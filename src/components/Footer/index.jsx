import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFacebookF,
    faInstagram,
    faTwitter,
    faGithub,
} from '@fortawesome/free-brands-svg-icons'

import { FooterStyled } from './styles'

export const Footer = () => {
    return (
        <FooterStyled>
            <ul>
                <li>
                    <a href="/">
                        <FontAwesomeIcon icon={faFacebookF} version="fab" />
                    </a>
                </li>
                <li>
                    <a href="/">
                        <FontAwesomeIcon icon={faInstagram} version="fab" />
                    </a>
                </li>
                <li>
                    <a href="/">
                        <FontAwesomeIcon icon={faTwitter} version="fab" />
                    </a>
                </li>
                <li>
                    <a href="/">
                        <FontAwesomeIcon icon={faGithub} version="fab" />
                    </a>
                </li>
            </ul>
            {/* <p> &copy; 2020 Agustín Zamar</p> */}
        </FooterStyled>
    )
}
