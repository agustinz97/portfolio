import styled from 'styled-components'
import { darken } from 'polished'

export const FooterStyled = styled.footer`
    width: 100%;
    height: 120px;
    margin-top: auto;

    background-color: #1c1c1c;

    color: #f2f2f2;
    font-size: 1rem;

    display: grid;
    grid-template-rows: 80px 40px;

    ul {
        width: 100%;
        height: 100%;
        padding: 0 2rem;

        list-style: none;
        background-color: ${darken(-0.1, '#1c1c1c')};

        display: flex;
        justify-content: space-between;
        align-items: center;

        @media (min-width: 768px) {
            justify-content: center;
        }

        li {
            a {
                text-decoration: none;
                color: #f2f2f2;
                font-size: 24px;
            }

            @media (min-width: 768px) {
                a {
                    font-size: 30px;
                }

                &:not(:last-child) {
                    margin-right: 30px;
                }
            }
        }
    }

    p {
        width: 100%;
        height: 100%;

        font-size: 16px;
        line-height: 16px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`
