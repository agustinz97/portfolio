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

    @media (min-width: 768px) {
        align-items: flex-start;
    }
`

export const Text = styled.p`
    margin-bottom: 30px;

    font-size: 16px;
    text-align: center;

    @media (min-width: 768px) {
        font-size: 24px;
        text-align: left;
    }
`

export const ButtonsGroup = styled.div`
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
