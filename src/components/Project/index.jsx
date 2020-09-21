import React from 'react'
import styled from 'styled-components'

/* const COLORS = {
    react: '#61dafb',
    js: '#efd81d',
    php: '#7377ad',
    laravel: '#f72c1f',
    css: '#0091ca',
    html: '#e8602a',
    mysql: '#005e86',
} */

const Container = styled.a`
    width: 100%;
    height: 100%;

    border-bottom: 8px solid #1c1c1c;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    overflow: hidden;

    display: flex;
    flex-direction: column;

    text-decoration: none;
    color: #1c1c1c;

    &:active {
        text-decoration: none;
        color: #1c1c1c;
    }

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
    height: 0;
    padding: 56.25% 0 0 0;

    display: block;

    overflow: hidden;

    position: relative;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    position: absolute;
    top: 0;
`

const Title = styled.h3`
    font-size: 24px;
    margin-bottom: 12px;
`

const Description = styled.div`
    width: 100%;
    padding: 1rem;

    font-size: 14px;
`

const Tags = styled.div`
    width: 100%;
    padding: 1rem;
    margin-top: auto;

    display: flex;
`

const Tag = styled.p`
    width: max-content;
    padding: 4px 8px;

    color: #fff;
    font-size: 16px;

    background-color: #333;
    border-radius: 6px;

    &:not(:last-child) {
        margin-right: 8px;
    }
`

export const Project = props => {
    return (
        <Container href={props.url} rel="noopener norreferrer" target="_blank">
            <ImageContainer>
                <Image
                    src={props.image}
                    alt={`Portada del proyecto ${props.name}`}
                />
            </ImageContainer>
            <Description>
                <Title>{props.name}</Title>
                <p>{props.text}</p>
            </Description>
            <Tags>
                {props.tags.map((tag, i) => {
                    return <Tag key={i}>{tag}</Tag>
                })}
            </Tags>
        </Container>
    )
}
