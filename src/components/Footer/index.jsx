import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFacebookF,
    faInstagram,
    faTwitter,
    faGithub,
    faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

import { FooterStyled } from './styles'

export const Footer = () => {
    return (
        <FooterStyled>
            <ul>
                <li>
                    <a
                        href="https://facebook.com/agustinzc"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faFacebookF} version="fab" />
                    </a>
                </li>
                <li>
                    <a
                        href="https://instagram.com/_agustinzc"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faInstagram} version="fab" />
                    </a>
                </li>
                <li>
                    <a
                        href="https://twitter.com/_agustinzc"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faTwitter} version="fab" />
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/agustinz97"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faGithub} version="fab" />
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com/in/agustinzamar"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faLinkedin} version="fab" />
                    </a>
                </li>
            </ul>

            {/* <p> &copy; 2020 Agustín Zamar</p> */}
        </FooterStyled>
    )
}
