import styled from "styled-components";

export const ContactsWrapper = styled.section`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    width: 100vw;
`;

export const ContactsContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-start;
    width: 90vw;
    box-shadow: 0px 10px 100px 0px rgba(0, 0, 0, 0.24);
    border-radius: 0.625rem;    

    @media (max-width: 760px) {
        flex-flow: column nowrap;
    }
`;

export const ContactsTexts = styled.div`
    display: flex;
    gap: 1.125rem;
    align-items: center;
    flex-flow: row nowrap;
    margin: 4.0625rem 1.125rem 4.0625rem 3.125rem;

    @media (max-width: 850px) {
        margin: 2.0625rem 1.125rem 2.0625rem 1.125rem;
    }

    @media (max-width: 750px) {
        margin: 1.875rem 1.125rem 1.875rem 1.125rem;
        flex-flow: column nowrap;
    }
`;

export const ContactsTextsIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContactInfoIconWrapper = styled.div`
    background-size: cover;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-color: var(--royal-blue);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    overflow: hidden;

    @media (max-width: 750px) {
        width: 50px;
        height: 50px;
    }
`;

export const ContactInfoIcon = styled.img`
    width: 40%;
    height: 40%;
    object-fit: contain;
`;

export const Line = styled.div`
    width: 0.3rem;
    height: 7.3125rem;
    background-color: var(--gray);
    margin-left: 184px;

    @media (max-width: 1150px) {
        margin-left: 100px;
    }

    @media (max-width: 1050px) {
        margin-left: 50px;
    }

    @media (max-width: 1000px) {
        margin-left: 0px;
    }

    @media (max-width: 760px) {
        height: 0.3rem;
        width: 7.3125rem;
    }
`;

export const ContactInfoText = styled.p`
    color: var(--black);
    font-weight: 600;
    font-size: var(--font-H5);
    line-height: 2.34375rem;

    @media (max-width: 950px) {
        font-size: var(--font-H6);
    }
`;
