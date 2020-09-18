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

export const Title = styled.h1`
    margin-bottom: 30px;

    font-size: 60px;
    line-height: 1em;
    text-align: center;

    @media (min-width: 768px) {
        font-size: 80px;
    }
`

export const Subtitle = styled.h2`
    margin-bottom: 30px;

    font-size: 20px;
    line-height: 1em;
    text-align: center;

    @media (min-width: 768px) {
        font-size: 30px;
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
