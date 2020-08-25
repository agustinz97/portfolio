import styled from 'styled-components'

export const HeaderStyled = styled.header`
    width: 100%;
    height: 60px;

    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.3);

    display: flex;
    align-items: center;
    justify-content: center;

    ul {
        list-style: none;

        display: flex;

        li:not(:last-child) {
            margin-right: 2rem;
        }
        a {
            text-decoration: none;
            font-size: 1.5rem;
            color: #1c1c1c;
        }
    }
`
