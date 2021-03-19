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
                    <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.coinData.map((element, index) => 
                            <Coin key={index} handleRefresh={this.props.handleRefresh} {...element} />
                        )
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}
