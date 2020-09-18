import styled from 'styled-components'
import { darken } from 'polished'

export const HeaderStyled = styled.header`
    width: 100%;
    height: 60px;
    padding: 0.5rem 1rem;

    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);

    display: flex;
    align-items: center;
    justify-content: space-between;

    position: relative;

    ul {
        width: 100%;
        max-width: 500px;
        height: 100vh;
        padding-top: 40px;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        position: fixed;
        top: 0;
        left: 0;
        transform: ${props => !props.active && 'translateX(-100%)'};

        background-color: #1c1c1c;
        list-style: none;
        transition: all ease-in-out 0.2s;

        @media (min-width: 768px) {
            padding-top: 0px;
            box-shadow: ${props =>
                props.active && '15px 0px 20px rgba(0, 0, 0, 0.3)'};
        }

        li {
            width: 100%;

            display: flex;
            justify-content: center;
            align-items: center;
        }

        a {
            width: 100%;
            height: 60px;

            text-decoration: none;
            color: #f2f2f2;

            display: flex;
            justify-content: center;
            align-items: center;

            @media (min-width: 768px) {
                &:hover {
                    transition: background-color ease 0.3s;
                    background-color: ${darken('-0.05', '#1c1c1c')};
                }
            }
        }
    }

    .header_name {
        font-size: 25px;
        color: #1c1c1c;
        text-decoration: none;
        font-weight: normal;

        margin-right: auto;
    }

    .header_btn {
        width: 30px;
        height: 30px;

        background: none;
        border: none;
        outline: none;
        cursor: pointer;

        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        z-index: 99;

        position: relative;

        span {
            width: 30px;
            height: 4px;
            background-color: ${props =>
                props.active ? '#f2f2f2' : '#1c1c1c'};
            transition: background-color ease-in-out 0.5s;

            position: ${props => props.active && 'absolute'};
            top: 50%;
            left: 50%;

            &:nth-child(1) {
                transform: ${props =>
                    props.active && 'translate(-50%, -50%) rotate(45deg)'};
            }

            &:nth-child(2) {
                transform: ${props =>
                    props.active && 'translate(-50%, -50%) rotate(-45deg)'};
            }

            &:nth-child(3) {
                opacity: ${props => props.active && '0'};
            }

            @media (min-width: 768px) {
                background-color: #1c1c1c;
            }
        }
    }
`
