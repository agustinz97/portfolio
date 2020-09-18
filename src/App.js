import React from 'react'
import styled from 'styled-components'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'

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
            <Router>
                <Header />

                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>

                <Footer />
            </Router>
        </Main>
    )
}

export default App
