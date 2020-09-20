import React from 'react'

import { Wrapper, ProjectsGrid } from './styles'
import { Subtitle } from '../../components/Titles'
import { Project } from '../../components/Project'

import tabataImage from '../../assets/img/tabata-timer.png'

export const Projects = props => {
    return (
        <Wrapper>
            <Subtitle text="Mis proyectos" />
            <ProjectsGrid>
                <Project
                    text="Aplicacion web para crear rutinas de ejercicio, con cronometro y otras funcionalidades"
                    type="react"
                    image={tabataImage}
                    tags={['react', 'js', 'css', 'html']}
                    url="https://tabata-timer.vercel.app"
                    name="Tabata Timer"
                />
            </ProjectsGrid>
        </Wrapper>
    )
}
