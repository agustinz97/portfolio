import React from 'react'

import { FooterStyled } from './styles'

export const Footer = () => {
    return (
        <FooterStyled>
            Todos los derechos reservados &copy; {new Date().getFullYear()}
        </FooterStyled>
    )
}
