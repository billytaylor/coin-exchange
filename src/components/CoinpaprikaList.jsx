import React, { Component } from 'react'

export default class CoinpaprikaList extends Component {
    
    render() {
        console.log(this.props.coins);

        return (
            <div>
                <table>
                    <thead><tr>{
                            Object.keys(this.props.coins[0])
                            .map(
                                (element) => <th key={element}>{element}</th>
                            )
                    }</tr></thead>
                    <tbody>{
                            this.props.coins.map(
                                coin => <tr key={coin.key}>
                                    {Object.keys(coin).map(
                                        key => <td key={key}>{coin[key]}</td>
                                    )}
                                </tr>
                            )
                    }</tbody>
                </table>        
            </div>
        )
    }
}
