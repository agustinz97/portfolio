import React from 'react'

import { Button } from '../../components/Buttons'
import { Wrapper, Text } from './styles'
import { Title, Subtitle } from '../../components/Titles'

export const Home = () => {
    return (
        <Wrapper>
            <Title text="¡Hola!" />
            <Subtitle text="¿Cómo puedo ayudarte?" />
            <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                repellendus dolor unde est tempore sequi, exercitationem animi,
                placeat cum temporibus totam architecto fugiat at nihil.
            </Text>
            <Button type="black-outline" url="/projects" />
        </Wrapper>
    )
}
