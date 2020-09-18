import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import { HeaderStyled } from './styles'

export const Header = () => {
    const [active, setActive] = useState(false)

    const menu = useRef(null)
    const button = useRef(null)

    const toggleMenu = () => {
        setActive(prevActive => !prevActive)
    }

    const closeOnBodyClick = () => {
        document.addEventListener('click', evt => {
            console.log(evt.target)

            if (
                !menu.current.contains(evt.target) &&
                !button.current.contains(evt.target)
            ) {
                setActive(false)
            }
        })
    }

    useEffect(closeOnBodyClick, [])

    return (
        <HeaderStyled active={active}>
            <nav ref={menu}>
                <ul>
                    <li>
                        <a href="/">Inicio</a>
                    </li>
                    <li>
                        <a href="/projects">Proyectos</a>
                    </li>
                    <li>
                        <a href="/education">Formación</a>
                    </li>
                </ul>
            </nav>
            <Link to="/" className="header_name">
                Agustín Zamar
            </Link>
            <button className="header_btn" onClick={toggleMenu} ref={button}>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </HeaderStyled>
    )
}
