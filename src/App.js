import React, { useState, useEffect } from 'react'
import axios from 'axios'

//import './App.css';
//port Coin from './components/Coin/Coin';
import ExchangeHeader from './components/ExchangeHeader';
//import CoinpaprikaList from './components/CoinpaprikaList';
import CoinList from './components/CoinList/CoinList';
import AccountBalance from './components/AccountBalance/AccountBalance';
import styled from 'styled-components';

const Div = styled.div`
text-align: center;
background-color: blue;
color: white;
`;

const NUM_COINS = 4;
  
function App(props) {

  const [showBalance, setShowBalance] = useState(true);
  const [coinData, setCoinData] = useState([]);
  
  const getPrice = async (id) => {
    const response = await axios.get('https://api.coinpaprika.com/v1/tickers/'+id);
    const coin = response.data;
    console.log(coin.quotes.USD);
    return parseFloat(coin.quotes.USD.price.toFixed(4));
  };

  const componentDidMount = async () => {
    const response = await axios.get('https://api.coinpaprika.com/v1/coins');
    const coinIds = response.data.slice(0,NUM_COINS).map(coin => coin.id);
    const promises = coinIds.map(id => axios.get('https://api.coinpaprika.com/v1/tickers/'+id));
    const responses = await Promise.all(promises);

    const newCoinData = responses.map(function(response) {
      const coin = response.data;
      console.log(coin.quotes.USD);
      return {
        key: coin.id,
        id: coin.id,
        ticker: coin.symbol,
        name: coin.name,
        balance: coin.rank,
        price: parseFloat(coin.quotes.USD.price.toFixed(4)),
      }
    });

    setCoinData(newCoinData);
  }

  useEffect(function(){
    if (coinData.length === 0) {
      componentDidMount();
    }
  });

  const toggleShowBalance = () => {
    setShowBalance(!showBalance);
  }

  const handleRefresh = async (idToChange) => {

    const newPrice = await getPrice(idToChange);

    // set the state
    const newCoinData = coinData.map(function(values) {
      let newValues = {...values};
      if (newValues.id === idToChange) {
        newValues.price = newPrice;
      }
      return newValues;
    });
    //debugger;
    console.log(newCoinData);
    setCoinData(newCoinData);
  
  }

  let totalBalance = 0;
  coinData && coinData.map((element) => {
      return totalBalance += element.balance * element.price;
  });
      
  return (
    <Div>
      <ExchangeHeader/>
      <AccountBalance 
        amount={totalBalance} 
        toggleShowBalance={toggleShowBalance} 
        showBalance={showBalance}/>
      {
        (coinData.length > 0) ? <CoinList 
        coinData={coinData} 
        showBalance={showBalance}
        handleRefresh={handleRefresh}/>
        : null
      }
      {//this.state.coinData ? 
        // <CoinpaprikaList coins={this.state.coinData}/> : 
        //   null
      }
    </Div>
  );

}

export default App;
