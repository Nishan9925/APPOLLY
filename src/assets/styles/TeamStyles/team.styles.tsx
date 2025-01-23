import styled from "styled-components";
import group from "../../images/group.png";
import profile1 from "../../images/profile1.png";

export const TeamWrapper = styled.section`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    width: 100vw;
    gap: 3.75rem;
`;

export const TeamTexts = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    width: 37.5625rem;
    gap: 1.25rem;

    @media (max-width: 610px) {
        width: 18.75rem;
    }
`;

export const TeamTextsTitle = styled.p`
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

export const TeamTextsText = styled.p`
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

export const TeamCardsWrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    gap: 30px;
    margin-bottom: 6.25rem;
    
    @media (max-width: 1110px) {
        flex-flow: column wrap;
    }

    @media (max-width: 768px) {
        margin-bottom: 21.625rem;
    }
`;
    
export const TeamCardWrapper = styled.div`
    width: 23.125rem;
    height: 36.25rem;
    box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    border-radius: 0.625rem;

    @media (max-width: 1200px) {
        width: 21.4375rem;
    }
`;

export const ProfilePictureWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ProfileCircle = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 50%; 
    overflow: hidden; 
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
`;

export const ProfileImage = styled.img`
    background-image: url(${profile1});
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    background-size: cover;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
`;

export const TeamCardTextsNameWrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    margin-top: 4.125rem;
`;

export const TeamCardTextsName = styled.p`
    font-size: var(--font-H4);
    font-weight: 700;
    line-height: 2.953125rem;
    color: var(--black);
    text-transform: uppercase;
`;

export const TeamCardTextsProffesion = styled.p`
    font-size: var(--font-H6);
    font-weight: 600;
    line-height: 1.875rem;
    color: var(--gray);
    text-transform: uppercase;
`;

export const TeamCardDescription = styled.p`
    font-size: var(--font-H7);
    font-weight: 400;
    line-height: 1.5rem;
    text-align: center;
    color: var(--gray);
    width: 20.375rem;
    margin-top: 0.875rem;
`;

export const SocialMediaWrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    gap: 1.9375rem;
    margin-top: 2.5rem;
`;

export const Line = styled.div`
    height: 1.4375rem;
    width: .1rem;
    background-color: var(--gray);
`;

export const ContactInfoFacebookIconWrapper = styled.div`
    width: 1.125rem;
    height: 1.125rem;
    background-size: cover;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
`;

export const ContactInfoFacebookIcon = styled.img`
    width: 100%;
    height: 100%;
`;
