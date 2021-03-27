import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const CoinRow = styled.tr`
    td {
        border: 1px solid #cccccc;
        width: 25vh;
    }
`;

/*
export default class Coin extends Component {

    handleClick = (event) => {

        //prevent default submit;
        event.preventDefault();
        this.props.handleRefresh(this.props.ticker);
    }

    
    render() {
  
        return (
            <CoinRow>
                <td>{this.props.name}</td>
                <td>{this.props.ticker}</td>
                <td>{this.props.showBalance ? this.props.balance : "*****"}</td>
                <td>${this.props.price}</td>
                <td><button onClick={this.handleClick}>Refresh</button></td>
            </CoinRow>
        )
    }

}
*/

export default function Coin(props) {

    const handleClick = (event) => {

        //prevent default submit;
        event.preventDefault();
        props.handleRefresh(props.id);
    }

    return (
        <CoinRow>
            <td>{props.name}</td>
            <td>{props.ticker}</td>
            <td>{props.showBalance ? props.balance : "*****"}</td>
            <td>${props.price}</td>
            <td><button onClick={handleClick}
                    className="btn btn-info">Refresh</button></td>
        </CoinRow>
    )

}



Coin.propTypes  = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}