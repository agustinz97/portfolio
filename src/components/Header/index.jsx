import React, { useState } from 'react'

import { HeaderStyled } from './styles'

export const Header = () => {
    const [active, setActive] = useState(false)

    const toggleMenu = () => {
        setActive(prevActive => !prevActive)
    }

    return (
        <HeaderStyled active={active}>
            <nav>
                <ul>
                    <li>
                        <a href="/">Inicio</a>
                    </li>
                    <li>
                        <a href="/">Proyectos</a>
                    </li>
                    <li>
                        <a href="/">Sobre mi</a>
                    </li>
                    <li>
                        <a href="/">Formación</a>
                    </li>
                </ul>
            </nav>
            <button className="header_btn" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </HeaderStyled>
    )
}
