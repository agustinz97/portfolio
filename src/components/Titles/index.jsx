import React from 'react'
import styled from 'styled-components'

const TitleStyled = styled.h1`
    margin-bottom: 30px;

    font-size: 60px;
    line-height: 1em;
    text-align: center;

    @media (min-width: 768px) {
        font-size: 80px;
    }
`

const SubtitleStyled = styled.h2`
    margin-bottom: 30px;

    font-size: 20px;
    line-height: 1em;
    text-align: center;

    @media (min-width: 768px) {
        font-size: 30px;
    }
`

export const Title = ({ text }) => {
    return <TitleStyled>{text}</TitleStyled>
}

export const Subtitle = ({ text }) => {
    return <SubtitleStyled>{text}</SubtitleStyled>
}
