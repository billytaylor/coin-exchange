import React, { Component } from 'react'
import styled from 'styled-components';
import logo from './logo.svg';


const Header = styled.header`
    background-color: darkblue;
    min-height: 10vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;

const Img=styled.img`
    height: 3rem;
    pointer-events: none;
`;

export default class ExchangeHeader extends Component {
    render() {
        return (
            <div>
                <Header>
                    <Img src={logo} alt="React logo" />
                    <p>Coin Exchange  {123}</p>
                </Header>
            </div>
        )
    }
}
