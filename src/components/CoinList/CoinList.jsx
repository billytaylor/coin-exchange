import React from 'react'
import Coin from "../Coin/Coin";

export default function CoinList(props) {

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
                    props.coinData.map((element) => 
                        <Coin 
                            handleRefresh={props.handleRefresh} 
                            showBalance={props.showBalance}
                            {...element} />
                    )
                }
                </tbody>
            </table>
        </div>
    );
}
