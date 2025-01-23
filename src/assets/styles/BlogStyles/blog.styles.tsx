import styled from "styled-components";

export const BlogWrapper = styled.section`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    width: 100vw;
`;

export const BlogTexts = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    width: 37.5625rem;
    gap: 1.25rem;
    margin-bottom: 3.75rem;

    @media (max-width: 610px) {
        width: 18.75rem;
    }
`;

export const BlogTextsTitle = styled.p`
    font-size: var(--font-H4);
    font-weight: 700;
    line-height: 2.953125rem;
    text-align: center;
    color: var(--black);
    text-transform: uppercase;

    @media (max-width: 610px) {
        font-size: var(--font-H5);
        font-weight: 600;
        line-height: 2.34375rem;
    }
`;


export const BlogTextsText = styled.p`
    font-size: var(--font-H7);
    font-weight: 400;
    line-height: 1.5rem;
    text-align: center;
    color: var(--gray);
    overflow: hidden;

    @media (max-width: 610px) {
        height: 4.375rem;
    }
`;

export const BlogsWrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    gap: 1.875rem;
    margin-bottom: 6.25rem;

    @media (max-width: 1110px) {
        flex-flow: column wrap;
    }
`;

export const BlogsCard = styled.div`
    dsiplay: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.1);
    width: 23.125rem;
    height: 31.25rem;
    border-radius: 0.625rem;
    gap: 1.875rem;

    @media (max-width: 1200px) {
        width: 21.4375rem;
    }
`;

export const BlogsCardImgWrapper = styled.div`
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;
    
export const BlogsCardImg = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`;

export const BlogsCardTexts = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    margin-top: 2.5rem;
`;

export const BlogsCardTextsTitle = styled.p`
    margin: 2.5rem 0 0.625rem 1.125rem;
    font-size: var(--font-H6);
    font-weight: 600;
    line-height: 1.875rem;
    color: var(--black);
    text-transform: uppercase;
    text-align: left;
`;

export const BlogsCardTextsText = styled.p`
    font-size: var(--font-H7);
    font-weight: 400;
    line-height: 1.5rem;
    color: var(--gray);
    text-align: left;
    margin: 0 1.125rem 1.75rem 1.125rem;
`;

export const BlogsCardLink = styled.p`
    font-size: var(--font-H6);
    color: var(--royal-blue);
    text-decoration: underline;
    text-transform: uppercase;
    font-weight: 600;
    margin-left: 1.125rem;
`;




