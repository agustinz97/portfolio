import React from 'react'

import { Wrapper, ProjectsGrid } from './styles'
import { Subtitle } from '../../components/Titles'
import { Project } from '../../components/Project'

export const Projects = props => {
    return (
        <Wrapper>
            <Subtitle text="Mis proyectos" />
            <ProjectsGrid>
                <Project
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis perspiciatis eaque laudantium enim in magnam?"
                    type="react"
                    image="https://lorempixel.com/800/900"
                />
                <Project
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis perspiciatis eaque laudantium enim in magnam?"
                    type="laravel"
                    image="https://lorempixel.com/800/700"
                />
                <Project
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis perspiciatis eaque laudantium enim in magnam?"
                    type="php"
                    image="https://lorempixel.com/600/900"
                />
                <Project
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis perspiciatis eaque laudantium enim in magnam?"
                    type="js"
                    image="https://lorempixel.com/500/500"
                />
            </ProjectsGrid>
        </Wrapper>
    )
}
