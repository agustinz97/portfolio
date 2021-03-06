import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledButton = styled(({ tag, children, ...props }) =>
    React.createElement(tag, props, children)
)`
    padding: 4px 8px;

    background: none;
    border: 2px solid #1c1c1c;
    border-radius: 6px;
    cursor: pointer;
    transition: all ease-in-out 0.2s;
    outline: none;

    font-size: 18px;
    color: #1c1c1c;
    text-decoration: none;
    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;

    @media (hover: hover) {
        &:hover {
            background-color: #1c1c1c;
            color: #f2f2f2;
        }
    }

    @media (min-width: 768px) {
        font-size: 24px;
    }
`

export const Button = ({
    type,
    url,
    target = '',
    external = false,
    text,
    download,
}) => {
    return (
        <StyledButton
            to={url}
            href={url}
            download={download}
            tag={url ? (external ? 'a' : Link) : 'button'}
            target={target || ''}
        >
            {text}
        </StyledButton>
    )
}
