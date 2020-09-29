import styled from 'styled-components'

export const Wrapper = styled.section`
    width: 100%;
    height: 100%;
    padding: 32px 1rem;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #ddd;
`

export const EducationGroup = styled.div`
    width: 100%;
    padding: 16px;
    margin-bottom: 32px;

    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.3);

    .title {
        margin-bottom: 24px;

        font-size: 18px;
        font-weight: bold;
        line-height: 18px;
    }

    .items {
        display: flex;
        flex-direction: column;

        & > * {
            margin-bottom: 24px;
            position: relative;
            z-index: 9;

            &:before {
                content: '';
                width: 1px;
                height: 24px;

                background: #707070;

                position: absolute;
                bottom: 100%;
                left: 20px;
                z-index: 1;
            }
        }
    }
`
export const Grid = styled.section`
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 1024px) {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        grid-column-gap: 32px;
        align-items: flex-start;
    }
`
