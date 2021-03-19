import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const CoinRow = styled.tr`
    td {
        border: 1px solid #cccccc;
        width: 25vh;
    }
`;

export default class Coin extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {

        //prevent default submit;
        event.preventDefault();
        this.props.handleRefresh(this.props.ticker);
/*
        // set the state
        const randomPC = 0.995 + Math.random() * 0.01;
        this.setState(function(oldState) {
            return {
                price: oldState.price * randomPC
            }
        });
*/
    }

    
    render() {
  
        return (
            <CoinRow>
                <td>{this.props.name}</td>
                <td>{this.props.ticker}</td>
                <td>${this.props.price}</td>
                <td><button onClick={this.handleClick}>Refresh</button></td>
            </CoinRow>
        )
    }

}



Coin.propTypes  = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}