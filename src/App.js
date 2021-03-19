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

  state = {
    showBalance: true,
    coinData: [
      {
        name: "Bitcoin",
        ticker: "BTC",
        balance: 1,
        price: 9999.99,
      },
      {
        name: "Ethereum",
        ticker: "ETH",
        balance: 2,
        price: 999.99,
      },
      {
        name: "Tether",
        ticker: "ESDT",
        balance: 3,
        price: 1.00,
      },{
        name: "Doge",
        ticker: "DOG",
        balance: 0,
        price: 100.00,
      },
    ]
  }

  render() {

    let totalBalance = 0;
    this.state.coinData.map((element) => {
        return totalBalance += element.balance * element.price;
    });
        
    return (
      <Div>
        <ExchangeHeader/>
        <AccountBalance 
          amount={totalBalance} 
          toggleShowBalance={this.toggleShowBalance} 
          showBalance={this.state.showBalance}/>
        <CoinList 
          coinData={this.state.coinData} 
          showBalance={this.state.showBalance}
          handleRefresh={this.handleRefresh}/>
      </Div>
    );
  }

  toggleShowBalance = () => {
    this.setState({showBalance: !this.state.showBalance});
  }

  handleRefresh = (tickerToChange) => {

    // set the state
    const newCoinData = this.state.coinData.map(function(values) {
      let newValues = {...values};
      if (newValues.ticker === tickerToChange) {
        const randomPC = 0.995 + Math.random() * 0.01;
        newValues.price *= randomPC;
      }
      return newValues;
    });
    console.log(newCoinData);
    this.setState({coinData: newCoinData});
  
  }

}

export default App;
