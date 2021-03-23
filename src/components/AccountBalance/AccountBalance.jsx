import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Section = styled.section`
    font-size: 2rem;
    text-align: left;
    padding-left: 5rem;
`;

export default function AccountBalance(props) {
    
    const buttonText = props.showBalance ?
        "Hide Balance" : "Show Balance";

    const toggleShowBalance = (event) => {
            event.preventDefault();
            props.toggleShowBalance();
        }

    return (
        <Section>
        Balance: ${props.showBalance ? props.amount : "*****"}
        <button onClick={toggleShowBalance}>{buttonText}</button>
        </Section>
    )

    
};



AccountBalance.propTypes  = {
    amount: PropTypes.number.isRequired,
}