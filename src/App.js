import React, { Component } from 'react'

//import './App.css';
//port Coin from './components/Coin/Coin';
import ExchangeHeader from './components/ExchangeHeader';
import CoinList from './components/CoinList/CoinList';
import AccountBalance from './components/AccountBalance/AccountBalance';
import styled from 'styled-components';

const Div = styled.div`
text-align: center;
background-color: blue;
color: white;
`;

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      balance: 10000,
      coinData: [
        {
          name: "Bitcoin",
          ticker: "BTC",
          price: 9999.99,
        },
        {
          name: "Ethereum",
          ticker: "ETH",
          price: 999.99,
        },
        {
          name: "Tether",
          ticker: "ESDT",
          price: 1.00,
        },{
          name: "Doge",
          ticker: "DOG",
          price: 100.00,
        },
      ]
    }
    this.handleRefresh = this.handleRefresh.bind(this);
  }  
  

  render() {

    return (
      <Div>
        <ExchangeHeader/>
        <AccountBalance amount={this.state.balance} />
        <CoinList coinData={this.state.coinData} handleRefresh={this.handleRefresh}/>
      </Div>
    );
  }

  handleRefresh(tickerToChange) {

    // set the state
    const newCoinData = this.state.coinData.map(function({ticker, name, price}) {
      let newPrice = price;
      if (ticker === tickerToChange) {
        const randomPC = 0.995 + Math.random() * 0.01;
        newPrice = newPrice * randomPC;
      }
      return {ticker, name, price: newPrice};
    });
    console.log(newCoinData);
    this.setState({coinData: newCoinData});
  
  }

}

export default App;
