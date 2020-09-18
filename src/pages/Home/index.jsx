import React from 'react'

import { Button } from '../../components/Buttons'
import { Wrapper, Title, Subtitle, Text } from './styles'

export const Home = () => {
    return (
        <Wrapper>
            <Title>¡Hola!</Title>
            <Subtitle>¿Cómo puedo ayudarte?</Subtitle>
            <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                repellendus dolor unde est tempore sequi, exercitationem animi,
                placeat cum temporibus totam architecto fugiat at nihil.
            </Text>
            <Button />
        </Wrapper>
    )
}
