import logo from './logo.svg';
import './App.css';
import Coin from './components/Coin/Coin';
import AccountBalance from './components/AccountBalance/AccountBalance';

let sum =0;
for(let num of [1,2,3,4,5]) {
  sum+=num;
}




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="React logo" className="App-logo"></img>
        <p>
Coin Exchange   {sum}     </p>
      </header>
      <AccountBalance amount={10000} />
      <table>
        <thead>
          <tr>
          <th>Name</th>
          <th>Ticker</th>
          <th>Price</th>
          </tr>
        </thead>
        <tbody>
        <Coin name="Bitcoin" ticker="BTC" price={9999.99} />
        <Coin name="Ethereum" ticker="ETH" price={99.99} />
        <Coin name="Tether" ticker="USDT" price={1.00}/>
        </tbody>
      </table>
    </div>
  );
}

export default App;
