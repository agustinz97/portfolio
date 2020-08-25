import React from 'react'

import { HeaderStyled } from './styles'

export const Header = () => {
    return (
        <HeaderStyled>
            <ul>
                <li>
                    <a href="#">Inicio</a>
                </li>
                <li>
                    <a href="#">Proyectos</a>
                </li>
                <li>
                    <a href="#">Sobre mi</a>
                </li>
                <li>
                    <a href="#">Formación</a>
                </li>
            </ul>
        </HeaderStyled>
    )
}
