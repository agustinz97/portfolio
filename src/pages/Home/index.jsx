import React from 'react'

import { Button } from '../../components/Buttons'
import { Wrapper, Text, ButtonsGroup } from './styles'
import { Title, Subtitle } from '../../components/Titles'

import pdfCV from '../../assets/pdf/CV.pdf'

export const Home = () => {
    return (
        <Wrapper>
            <Title text="¡Hola!" />
            <Subtitle text="¿Cómo puedo ayudarte?" />
            <Text>
                Soy desarrollador web full-stack.
                <br />
                Actualmente vivo en Salta, Argentina.
            </Text>
            <ButtonsGroup>
                <Button
                    type="black-outline"
                    url="/projects"
                    text="Conocer más"
                />
                <Button
                    type="black"
                    text="Descargar CV"
                    external={true}
                    download="CV-ZamarAgustin.pdf"
                    url={pdfCV}
                />
            </ButtonsGroup>
        </Wrapper>
    )
}
