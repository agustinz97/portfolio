import styled from 'styled-components'

export const Wrapper = styled.section`
    width: 100%;
    max-width: 1200px;
    height: auto;
    padding: 80px 1rem;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ProjectsGrid = styled.div`
    width: 100%;

    display: grid;
    grid-template-columns: 1fr;
    row-gap: 20px;

    @media (min-width: 768px) {
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        column-gap: 30px;
    }
`
