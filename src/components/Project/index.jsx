import React from 'react'
import styled from 'styled-components'

const COLORS = {
    react: '#61dafb',
    js: '#efd81d',
    php: '#7377ad',
    laravel: '#f72c1f',
}

const Container = styled.div`
    width: 100%;
    height: 100%;

    border-bottom: 8px solid ${props => props.color && props.color};
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    overflow: hidden;

    display: flex;
    flex-direction: column;

    @media (hover: hover) {
        &:hover {
            transition: all ease 0.3s;
            transform: translateY(-5px);
            box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.5);
        }
    }
`

const ImageContainer = styled.div`
    width: 100%;
    height: 60%;

    display: flex;
`

const Image = styled.img`
    width: 100%;
    object-fit: cover;
`
const Description = styled.p`
    width: 100%;
    padding: 1rem;

    font-size: 14px;
`

const Tags = styled.div`
    width: 100%;
    padding: 1rem;
    margin-top: auto;
`

export const Project = props => {
    return (
        <Container color={COLORS[props.type]}>
            <ImageContainer>
                <Image src={props.image} />
            </ImageContainer>
            <Description>{props.text}</Description>
            <Tags>asds</Tags>
        </Container>
    )
}
