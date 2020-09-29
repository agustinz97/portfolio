import React from 'react'

import { Wrapper, EducationGroup, Grid } from './styles'
import { Subtitle } from '../../components/Titles'
import { EducationItem } from '../../components/EducationItem'

import { courses } from '../../api/courses'

export const Education = () => {
    const MAX_ITEMS = 5

    return (
        <Wrapper>
            <Subtitle text="Mis estudios" />

            <Grid>
                {courses.development.length > 0 && (
                    <EducationGroup>
                        <h5 className="title">Desarrollo y Programación</h5>
                        <div className="items">
                            {courses.development
                                .slice(0, MAX_ITEMS)
                                .map((course, i) => {
                                    return (
                                        <EducationItem
                                            key={i}
                                            title={course.title}
                                            school={course.school}
                                            image={course.image}
                                        />
                                    )
                                })}
                        </div>
                    </EducationGroup>
                )}
                {courses.design.length > 0 && (
                    <EducationGroup>
                        <h5 className="title">Diseño</h5>
                        <div className="items">
                            {courses.design
                                .slice(0, MAX_ITEMS)
                                .map((course, i) => {
                                    return (
                                        <EducationItem
                                            key={i}
                                            title={course.title}
                                            school={course.school}
                                            image={course.image}
                                        />
                                    )
                                })}
                        </div>
                    </EducationGroup>
                )}
                {courses.languages.length > 0 && (
                    <EducationGroup>
                        <h5 className="title">Idiomas</h5>
                        <div className="items">
                            {courses.languages
                                .slice(0, MAX_ITEMS)
                                .map((course, i) => {
                                    return (
                                        <EducationItem
                                            key={i}
                                            title={course.title}
                                            school={course.school}
                                            image={course.image}
                                        />
                                    )
                                })}
                        </div>
                    </EducationGroup>
                )}
                {courses.others.length > 0 && (
                    <EducationGroup>
                        <h5 className="title">Otros</h5>
                        <div className="items">
                            {courses.others
                                .slice(0, MAX_ITEMS)
                                .map((course, i) => {
                                    return (
                                        <EducationItem
                                            key={i}
                                            title={course.title}
                                            school={course.school}
                                            image={course.image}
                                        />
                                    )
                                })}
                        </div>
                    </EducationGroup>
                )}
            </Grid>
        </Wrapper>
    )
}
