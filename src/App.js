import React from 'react'
import styled from 'styled-components'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

const Main = styled.main`
    width: 100%;
    min-height: 100vh;

    font-family: 'Lato';

    display: flex;
    flex-direction: column;
`

function App() {
    return (
        <Main>
            <Header />
            <h1>Lorem ipsum dolor sit amet.</h1>
            <Footer />
        </Main>
    )
}

export default App
