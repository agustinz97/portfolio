import { darken } from 'polished'
import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    width: 180px;
    height: 40px;

    background: none;
    border: 2px solid #1c1c1c;
    border-radius: 6px;
    cursor: pointer;
    transition: all ease-in-out 0.2s;
    outline: none;

    font-size: 18px;
    color: #1c1c1c;

    &:hover {
        background-color: #1c1c1c;
        color: #f2f2f2;
    }

    @media (min-width: 768px) {
        width: 220px;
        height: 50px;

        font-size: 24px;
    }
`

export const Button = ({ type }) => {
    return <StyledButton>Conocer más</StyledButton>
}
