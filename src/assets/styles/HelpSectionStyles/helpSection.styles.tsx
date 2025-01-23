import styled from "styled-components"
import bgcImage from "../../images/background-img.png";

export const HelpSectionWrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column nowrap;    
`;

export const BakgroundColor = styled.div`
    width: 100vw;
    height: 29.8125rem;
    background-image: url(${bgcImage});
    margin-top: 7.125rem;
    margin-bottom: 15rem;

    @media (max-width: 450px) {
        height: 22.3125rem;
        margin-bottom: 5.625rem;
    }
`;

export const HelpSectionTextsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column nowrap;
    margin-top: 6.25rem;
    gap: 3.75rem;

    @media (max-width: 690px) {
        margin-top: 3.125rem;
        gap: 2.5rem;
    }    
`;
    
export const HelpSectionTexts = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column nowrap;
    gap: 1.25rem;
    max-width: 37.5625rem;

    @media (max-width: 630px) {
        max-width: 30rem;
        gap: 1rem;
    }

    @media (max-width: 425px) {
        width: 18.75rem;
        height: 9.8125rem;
    }
`;

export const HelpSectionTextsTitle = styled.p`
    text-transform: uppercase;
    font-size: var(--font-H4);
    font-weight: 700;
    line-height: 2.953125rem;
    text-align: center;
    color: var(--white);

    @media (max-width: 425px) {
        font-weight: 600;
        font-size: var(--font-H5);
        line-height: 2.34375rem;
    }
`;

export const HelpSectionTextsText = styled.p`
    fot-size: var(--font-H7);
    font-weight: 400;
    line-height: 1.5rem;
    text-align: center;
    color: var(--white);
    overflow: hidden;

    @media (max-width: 450px) {
        height: 4.375rem;
    }

`;

export const HelpSectionImageWrapper = styled.div`
    width: 48.125rem;
    height: 19.9375rem;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    box-shadow: 0px 10px 100px 0px rgba(0, 0, 0, 0.24);
    border-radius: 0.625rem;
    margin-bottom: 6.25rem;
    
    @media (max-width: 800px) {
        width: 40.125rem;
        height: 19.9375rem;
    }

    @media (max-width: 690px) {
        margin-bottom: 3.125rem;
    }

    @media (max-width: 660px) {
        width: 35.125rem;
        height: 15.9375rem;
    }

    @media (max-width: 600px) {
        width: 26.4375rem;
        height: 12.9375rem;
    }

    @media (max-width: 450px) {
        width: 21.4375rem;
        height: 9.375rem;
    }
`;
            
export const HelpSectionImage = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 0.625rem;
`;
