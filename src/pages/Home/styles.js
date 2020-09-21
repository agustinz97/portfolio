import styled from 'styled-components'

export const Wrapper = styled.section`
    width: 100%;
    max-width: 1200px;
    height: auto;
    padding: 80px 1rem;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 1025px) {
        align-items: flex-start;
    }
`

export const Text = styled.p`
    margin-bottom: 30px;

    font-size: 18px;
    text-align: center;

    @media (min-width: 1025px) {
        font-size: 24px;
    }

    @media (min-width: 1025px) {
        text-align: left;
    }
`

export const ButtonsGroup = styled.div`
    width: 100%;
    max-width: 300px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 768px) {
        max-width: 400px;
    }

    @media (min-width: 1025px) {
        width: auto;
        max-width: 100%;

        *:not(:last-child) {
            margin-right: 1rem;
        }
    }
`
