import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Section = styled.section`
    font-size: 2rem;
    text-align: left;
    padding-left: 5rem;
`;

const Button = styled.button`
    margin: 1rem 8px;
`;

const BalanceToggleButton = styled(Button)`
    width: 150px;
`;

const Balance = styled.div`
    min-width: 250px;
    min-height: 2.5rem;
    margin: 0.5rem 0 0 0.5rem;
    font-size: 1.5rem;    
`;

var formatter = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});


export default function AccountBalance(props) {
    
    const buttonText = props.showBalance ?
        "Hide Balance" : "Show Balance";

    const toggleShowBalance = (event) => {
            event.preventDefault();
            props.toggleShowBalance();
        }

    const buttonClass = 'btn ' + (props.showBalance ? 'btn-warning' : 'btn-info');

    let content = null;

    if (props.showBalance) {
        content = <>Balance: {formatter.format(props.amount)}</>;
    }

    return (
        <>
            <Balance>{content}</Balance>
            <Section>
                <BalanceToggleButton className={buttonClass} onClick={toggleShowBalance}>{buttonText}</BalanceToggleButton>
                <Button className="btn btn-success"
                    onClick={props.helicopterDrop}>
                    <i className="fas fa-helicopter"></i>
                </Button>
            </Section>
        </>
    )

    
};



AccountBalance.propTypes  = {
    amount: PropTypes.number.isRequired,
}