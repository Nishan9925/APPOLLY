import styled from "styled-components";

export const FooterWrapper = styled.footer`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`;
    
export const BackgroundColor = styled.div`
    background-color: var(--black);
    width: 100vw;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`;

export const FooterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: row nowrap;
    gap: 15.375rem;
    margin-top: 8.6875rem;

    @media (max-width: 1130px) {
        flex-flow: column nowrap;
        align-items: left;
    justify-content: space-between;
    }
   
`;

export const LogoNewsWrapper = styled.div`
    display: flex;
    align-items: left;
    justify-content: space-between;
    flex-flow: row nowrap;
    gap: 4.125rem;

    @media(max-width: 1130px) {
        flex-flow: column nowrap;
        align-items: left;
    }
`;

export const LogoWrapper = styled.div`
    display: flex;
    align-items: left;
    justify-content: space-between;
    flex-flow: column nowrap;
    width: 20.875rem;
`;

export const LogoWrapperTexts = styled.div`
    display: flex;
    align-items: left;
    justify-content: space-between;
    flex-flow: column nowrap;
`;

export const LogoWrapperTextsTitle = styled.p`
    font-size: var(--font-H4);
    font-weight: 700;
    line-height: 2.953125rem;
    color: var(--white);
    text-transform: uppercase;
`;

export const LogoWrapperTextsDescription = styled.p`
    font-size: var(--font-H7);
    font-weight: 400;
    line-height: 1.5rem;
    text-align: left;
    color: var(--white);
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
    width: 0.1rem;
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

export const LinksWrapper = styled.div`
    display: flex;
    align-items: left;
    justify-content: space-between;
    flex-flow: column nowrap;
    gap: 0.75rem;
`;

export const LinksTitle = styled.div`
    font-size: var(--font-H5);
    font-weight: 600;
    line-height: 2.34375rem;
    color: var(--white);
    text-transform: uppercase;
`;

export const FooterMenuText = styled.div`
    font-size: var(--font-H7);
    font-weight: 400;
    line-height: 1.5rem;
    color: var(--white);
`;

export const NewsWrapper = styled.div`
    display: flex;
    align-items: left;
    justify-content: space-between;
    flex-flow: column nowrap;
`;

export const NewsWrapperTexts = styled.div`
    display: flex;
    align-items: left;
    justify-content: space-between;
    flex-flow: column nowrap;
    gap: 0.6875rem;
`;

export const NewsWrapperTitle = styled.p`
    font-size: var(--font-H5);
    font-weight: 600;
    line-height: 2.34375rem;
    text-align: left;
    text-transform: uppercase;
    color: var(--white);
`;

export const NewsWrapperText = styled.p`
    font-size: var(--font-H7);
    font-weight: 400;
    line-height: 1.5rem;
    text-align: left;
    color: var(--white);
    width: 18.625rem;
    margin-bottom: 33px;
`;

export const FooterLine = styled.div`
    width: 90vw;
    height: 0.2rem;
    background-color: var(--gray);
    margin-top: 4.1875rem;
`;

export const FooterCopyrightTextWrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    gap: 1.125rem;
    padding: 1.125rem;

    @media (max-width: 768px) {
        padding: 1.25rem;
    }
`;

export const FooterCopyrightIcon = styled.img`

`;

export const FooterCopyrightText = styled.p`
    font-size: var(--font-H7);
    font-weight: 400;
    line-height: 1.5rem;
    text-align: left;
    color: var(--white);

    @media(max-width: 768px) {
        font-size: var(--font-H8);
    }
`;


