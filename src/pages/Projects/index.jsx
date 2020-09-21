import React from 'react'

import { Wrapper, ProjectsGrid } from './styles'
import { Subtitle } from '../../components/Titles'
import { Project } from '../../components/Project'

import { PROJECTS } from '../../api/projects'

export const Projects = props => {
    return (
        <Wrapper>
            <Subtitle text="Mis proyectos" />
            <ProjectsGrid>
                {PROJECTS.map(project => {
                    return (
                        <Project
                            type={project.type}
                            tags={project.tags}
                            url={project.url}
                            image={project.image}
                            text={project.text}
                            name={project.name}
                        />
                    )
                })}
            </ProjectsGrid>
        </Wrapper>
    )
}
