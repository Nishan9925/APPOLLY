import styled from "styled-components";
import bgcImage from "../../images/background-img.png";

export const CustomersWrapper = styled.section`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    width: 100vw;
    background-image: url(${bgcImage});
`;

export const CustomerContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: center;
    width: 90vw;
`;

export const CustomerTextsWrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: space-between;
    padding-top: 6.25rem;
    gap: 1.25rem;

    @media (max-width: 768px) {
        padding-top: 3.125rem;
        gap: 1rem;
    }
`;

export const CustomerTextsTitle = styled.p`
    font-size: var(--font-H4);
    font-weight: 700;
    line-height: 2.953125rem;
    text-align: center;
    color: var(--white);
    text-transform: uppercase;

    @media (max-width: 610px) {
        font-size: var(--font-H5);
    }
`;

export const CustomerTextsText = styled.p`
    font-size: var(--font-H7);
    font-weight: 400;
    line-height: 1.5rem;
    text-align: center;
    color: var(--white);
    width: 37.5625rem;
    overflow: hidden;

    @media (max-width: 610px) {
        width: 21.4275rem;
        height: 3rem;
    }
`;


