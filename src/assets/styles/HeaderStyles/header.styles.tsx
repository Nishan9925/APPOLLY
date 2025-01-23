import styled from "styled-components";
import bgcImg from "../../images/background-img.png";
import mailIcon from "../../icons/mail-fill.png";
import phoneIcon from "../../icons/phone-fill.png";
import facebookIcon from "../../icons/facebook-fill.png";
import instagramIcon from "../../icons/instagram-fill.png";
import twitterIcon from "../../icons/twitter-fill.png";
import youtubeIcon from "../../icons/youtube-fill.png";
import mobileApp from "../../images/View-Mobile-App.png";
import googlePlay from "../../icons/google-play.png";
import appStore from "../../icons/app-store.png";
import rectangle from "../../images/rectangle.png";

export const HeaderWrapper = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column nowrap;
    background-image: url(${bgcImg});
    width: 100vw;
`;
    
export const ContactsInfoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2.1875rem ;
    width: 90vw;

    @media (max-width: 890px) {
        display: none;
    }
`;

export const ContactsInfoWrapperLeft = styled.div`
    display: flex;
    justfy-content: space-between;
    align-items: center;
    flex-flow: row nowrap;
    gap: 2.9375rem;
`;

export const ContactInfoMailWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: row nowrap;
    gap: 1.125rem;
`;

export const ContactInfoMailIconWrapper = styled.div`
    width: 1rem;
    height: 1rem;
    background-image: url(${mailIcon});
    background-size: cover;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
`;

export const ContactInfoMailIcon = styled.img`
    width: 100%;
    height: 100%;
`;

export const ContactInfoMailText = styled.p`
    font-size: var(--font-H7);
    font-weight: 400;
    line-height: 1.5rem;
    color: var(--white);
    text-align: left;
`;

export const ContactInfoPhoneWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: row nowrap;
    gap: 1.125rem;
    min-width: 9rem;
`;

export const ContactInfoPhoneIconWrapper = styled.div`
    width: 1rem;
    height: 1rem;
    background-image: url(${phoneIcon});
    background-size: cover;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
`;

export const ContactInfoPhoneIcon = styled.img`
    width: 100%;
    height: 100%;
`;

export const ContactInfoPhoneText = styled.p`
    font-size: var(--font-H7);
    font-weight: 400;
    line-height: 1.5rem;
    color: var(--white);
    text-align: left;
`;

export const ContactsInfoWrapperRight = styled.div`
    display: flex;
    justfy-content: space-between;
    align-items: center;
    flex-flow: row nowrap;
    gap: 1.875rem;
`;

export const ContactInfoFacebookIconWrapper = styled.div`
    width: 1.125rem;
    height: 1.125rem;
    background-image: url(${facebookIcon});
    background-size: cover;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    cursor: pointer;
`;

export const ContactInfoFacebookIcon = styled.img`
    width: 100%;
    height: 100%;
`;

export const ContactInfoInstagramIconWrapper = styled.div`
    width: 1.125rem;
    height: 1.125rem;
    background-image: url(${instagramIcon});
    background-size: cover;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    cursor: pointer;
`;

export const ContactInfoInstagramIcon = styled.img`
    width: 100%;
    height: 100%;
`;

export const ContactInfoTwitterIconWrapper = styled.div`
    width: 1.125rem;
    height: 1.125rem;
    background-image: url(${twitterIcon});
    background-size: cover;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    cursor: pointer;
`;

export const ContactInfoTwitterIcon = styled.img`
    width: 100%;
    height: 100%;
`;

export const ContactInfoYoutubeIconWrapper = styled.div`
    width: 1.125rem;
    height: 1.125rem;
    background-image: url(${youtubeIcon});
    background-size: cover;
    background-position: center;
    background-size: contain;
    cursor: pointer;
    background-repeat: no-repeat;
`;

export const ContactInfoYoutubeIcon = styled.img`
    width: 100%;
    height: 100%;
`;

export const HeaderInfo = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    width: 90vw;

    @media (max-width: 768px) {
        margin: 
        display: flex;
        flex-flow: column wrap;
        margin-top: 118px;
    }
`;

export const Rectangle = styled.div`
    background-image: url(${rectangle});
    
`;

export const HeaderInfoTextsWrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: left;
    justify-content: space-between;
    padding: 2.5rem 2.5rem;
    background-color: var(--white);
    width: 35.6rem;

    @media (max-width: 890px) {
        padding: 1rem 1rem;
    }

    @media (max-width: 650px) {
        width: 30rem;
    }

    @media (max-width: 560px) {
        width: 25rem;
    }

    @media (max-width: 470px) {
        width: 20rem;
    }
`;
    
export const HeaderInfoTextsTitle = styled.p`
    font-size: var(--font-H2);
    font-weight: 700;
    line-height: 3.9675rem;
    color: var(--royal-blue);
    text-transform: uppercase;
    margin-bottom: 1.125rem;

    @media (max-width: 890px) {
        font-size: var(--font-H5);
        margin-bottom: .1rem;
        line-height: 2.3125rem;        
    }
`;

export const HeaderInfoTextsParagraph = styled.p`
    font-size: var(--font-H7);
    font-weight: 400;
    line-height: 1.5rem;
    color: var(--gray);
`;

export const HeaderInfoTextsDownload = styled.p`
    font-size: var(--font-H5);
    font-weight: 600;
    line-height: 2.34375rem;
    color: var(--black);
    margin-top: 3.25rem;
    text-transform: uppercase;

    @media (max-width: 890px) {
        margin-top: 1rem;
    }
`;

export const HeaderInfoImgWrapper = styled.div`
    min-width: 30.375rem;
    min-height: 40.3125rem;
    background-image: url(${mobileApp});
    background-size: cover;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    margin-top: 4.1875rem;
    overflow: hidden;
    object-fit: cover;
    transform: translate(10%, -0%);
    overflow: hidden;

    @media (max-width: 963px) {
        min-width: 25.375rem;
        min-height: 35.3125rem;
    }

    @media (max-width: 890px) {
        min-width: 25.375rem;
        min-height: 35.3125rem;
    }

    @media (max-width: 768px) {
        min-width: 20.375rem;
        min-height: 30.3125rem;
    }
    
    @media (max-width: 390px) {
        min-width: 15.375rem;
        min-height: 25.3125rem;
    }
`;

export const HeaderInfoImg = styled.img`
    width: 100%;
    height: 100%;
`;

export const OnlineStoresWrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    gap: 0.875rem;
`;

export const GooglePlayWrapper = styled.div`
    max-width: 9.3125rem;
    max-height: 2.9375rem;
    background-image: url(${googlePlay});
    background-size: cover;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    cursor: pointer;
`;

export const GooglePlayImg = styled.img`
    width: 100%;
    height: 100%;
`;

export const AppStoreWrapper = styled.div`
    max-width: 9.3125rem;
    max-height: 2.9375rem;
    background-image: url(${appStore});
    background-size: cover;
    background-position: center;
    background-size: contain;
    cursor: pointer;
`;

export const AppStoreImg = styled.img`
    width: 100%;
    height: 100%;
`;
