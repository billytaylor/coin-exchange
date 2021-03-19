import React, { Component } from 'react'
import Coin from "../Coin/Coin";

export default class CoinList extends Component {
    render() {
        return (
            <div>
                <table>
                    <thead>
                    <tr>
                    <th>Name</th>
                    <th>Ticker</th>
                    <th>Balance</th>
                    <th>Price</th>
                    <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.coinData.map((element, index) => 
                            <Coin 
                                key={index} 
                                handleRefresh={this.props.handleRefresh} 
                                showBalance={this.props.showBalance}
                                {...element} />
                        )
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}
