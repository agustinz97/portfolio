import React from 'react'
import styled from 'styled-components'

const Component = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
`

const ImageContainer = styled.div`
    min-width: 40px;
    width: 40px;
    height: 40px;
    padding: 4px;
    margin-right: 16px;

    display: flex;

    border-radius: 50%;
    background-color: #263e4c;
    overflow: hidden;

    img {
        width: 100%;
        object-fit: contain;
        z-index: 2;
    }
`

const Description = styled.div`
    height: 100%;

    overflow: hidden;

    h6 {
        font-weight: bold;
        font-size: 18px;
        line-height: 18px;

        margin-bottom: 4px;

        overflow: hidden;

        white-space: nowrap;
        text-overflow: ellipsis;
    }

    p {
        font-size: 16px;
        line-height: 16px;

        overflow: hidden;

        white-space: nowrap;
        text-overflow: ellipsis;
    }
`

export const EducationItem = ({ image, title, school }) => {
    return (
        <Component>
            <ImageContainer>
                <img src={image} alt="" />
            </ImageContainer>
            <Description>
                <h6>{school}</h6>
                <p>{title}</p>
            </Description>
        </Component>
    )
}
