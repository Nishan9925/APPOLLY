import styled from "styled-components";
import aboutImg from "../../images/about-img.png";
import mark from "../../icons/mark.svg";

export const AboutWrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column nowrap;
    width: 100vw;
`;
    
export const AboutTextsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column nowrap;
    width: 37.5625rem;
    margin-top: 6.25rem;

    @media (max-width: 600px) {
        width: 18.75rem;
    }
`;

export const AboutTextsTitle = styled.p`
    font-size: var(--font-H4);
    font-weight: 700;
    line-height: 2.953125rem;
    text-align: center;
    color: var(--black);
    text-transform: uppercase;
`;

export const AboutTextsTexts = styled.p`
    font-size: var(--font-H7);
    font-weight: 400;
    line-height: 1.5rem;
    text-align: center;
    color: var(--gray);
    margin-top: 1.25rem;
    overflow: hidden;

    @media (max-width: 609px) {
        width: 18.75rem;
        height: 4.375rem;
    }
`;

export const AboutInfoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: row nowrap;
    margin-top: 3.75rem;

    @media (max-width: 695px) {
        flex-flow: column wrap;
    }
`;

export const AbountInfoImgWrapper = styled.div`
    background-image: url(${aboutImg});
    background-size: cover;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 31.375rem;
    height: 34.25rem;

    @media (max-width: 1134px) {
        width: 26.375rem;
        height: 29.25rem;
    }

    @media (max-width: 1043px) {
        width: 20.375rem;
        height: 24.25rem;
    }

    @media (max-width: 950px) {
        width: 15rem;
        height: 20rem;
    }
`;

export const AbountInfoImg = styled.img`
    width: 100%;
    height: 100%;
`;

export const AboutInfoDescriptionWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column nowrap;
    gap: 1.875rem;
    width: 35.625rem;
    padding: 1.875rem;

    @media (max-width: 872px) {
        width: 25rem;
    }

    @media (max-width: 460px) {
        width: 10rem;
    }
`;

export const AboutInfoDescription = styled.div`
    display: flex;
    justify-content: center;
    align-items: start;
    flex-flow: row nowrap;
    gap: 1.125rem;
    box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.1);
    border-radius: 0.625rem;
    
    @media (max-width: 460px) {
        width: 20rem;
    }

`;

export const AboutInfoMarkSVG = styled.img`
    background-image: url(${mark});
    margin-left: 1.125rem;
    margin-top: 1.875rem;
`;

export const AboutInfoDescriptionTexts = styled.div`
    display: flex;
    flex-flow: column nowrap;

    @media (max-width: 1053px) {
        width: 30rem;
    }

    @media (max-width: 949px) {
        width: 25rem;
    }
`;

export const AboutInfoDescriptionTextsTitle = styled.p`
    font-size: var(--font-H6);
    font-weight: 600;
    line-height: 1.875rem;
    color: var(--black);
    text-transform: uppercase;
    margin-top: 1.75rem;
`;

export const AboutInfoDescriptionTextsText = styled.p`
    font-size: var(--font-H7);
    font-weight: 400;
    line-height: 1.5rem;
    color: var(--gray);
    padding: 0.75rem 0 1.25rem 0;
    margin-right: 1rem;
    height: 4.1875rem;
    margin-bottom: 20px;
    overflow: hidden;

    @media (max-width: 946px) {
        height: 3.0625rem;
        overflow: hidden;
    }
`;



