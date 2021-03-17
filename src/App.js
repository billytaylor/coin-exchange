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
  }  
  

  render() {

    return (
      <Div>
        <ExchangeHeader/>
        <AccountBalance amount={this.state.balance} />
        <CoinList coinData={this.state.coinData}/>
      </Div>
    );
  }
}

export default App;
