import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Section = styled.section`
    font-size: 2rem;
    text-align: left;
    padding-left: 5rem;
`;

export default class AccountBalance extends Component {
    
    render() {
        const buttonText = this.props.showBalance ?
            "Hide Balance" : "Show Balance";

        return (
            <Section>
            Balance: ${this.props.showBalance ? this.props.amount : "*****"}
            <button onClick={this.toggleShowBalance}>{buttonText}</button>
            </Section>
        )
    }

    toggleShowBalance = (event) => {
        event.preventDefault();
        this.props.toggleShowBalance();
    }
};



AccountBalance.propTypes  = {
    amount: PropTypes.number.isRequired,
}