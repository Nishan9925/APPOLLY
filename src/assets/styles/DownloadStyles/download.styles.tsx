import styled from "styled-components";
import googlePlay from "../../icons/google-play.png";
import appStore from "../../icons/app-store.png";

export const DownloadWrapper = styled.section`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    width: 100vw;

    @media (max-width: 690px) {
        flex-flow: column wrap;
    }
`;

export const DownloadRatingsWrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: left;
    width: 35.625rem;
    margin-top: 7.125rem;

    @media (max-width: 620px) {
        width: 28.75rem;
    }

    @media (max-width: 500px) {
        width: 25rem;
    }

    @media (max-width: 430px) {
        width: 21.4375rem;
    }
`;

export const DownloadRatingsTexts = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: left;
`;

export const DownloadRatingsTextsTitle = styled.p`
    font-size: var(--font-H4);
    font-weight: 700;
    line-height: 2.953125rem;
    color: var(--black);
    text-transform: uppercase;
`;

export const DownloadRatingsTextsText = styled.p`
    font-size: var(--font-H7);
    font-weight: 400;
    line-height: 1.5rem;
    color: var(--gray);
`;

export const OnlineStoresWrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    gap: 0.875rem;
    margin-top: 3.75rem;
`;

export const GooglePlayWrapper = styled.div`
    max-width: 9.3125rem;
    max-height: 2.9375rem;
    background-image: url(${googlePlay});
    background-size: cover;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
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
`;

export const AppStoreImg = styled.img`
    width: 100%;
    height: 100%;
`;

export const DownloadRatingsWrapperStats = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-flow: row nowrap;
    margin-top: 3.75rem;
`;

export const DownloadRatingsStats = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    width: 10.625rem;
    height: 11rem;
    background-color: var(--royal-blue);
    border-radius: 0.625rem;

    @media (min-width: 1000px) {
        gap: 1.125rem;
    }

    @media (max-width: 1120px) {
        width: 9.375rem;
        height: 9.75rem;
    }
    
    @media (max-width: 1000px) {
        width: 6.875rem;
        height: 7.25rem;
    }

    @media (max-width: 725px) {
        width: 6.4375rem;
        height: 6.25rem;
    }
`;

export const DownloadRatingsStatsIcon = styled.img`
    margin-top: 1.875rem;
    
    @media (max-width: 1000px) {
        width: 1.125rem;
        height: 1.125rem;
        margin-top: .875rem;
    }

    @media (max-width: 690px) {
        margin-top: 0.3rem;
    }
`;

export const DownloadRatingsStatsText = styled.p`
    font-size: var(--font-H5);
    font-weight: 600;
    line-height: 1.5625rem;
    color: var(--white);

    @media (max-width: 1000px) {
        font-size: var(--font-H6);
    }
    
`;

export const DownloadRatingsStatsTitle = styled.p`
    font-size: var(--font-H6);
    font-weight: 600;
    line-height: 1.875rem;
    color: var(--white);
    text-trasnform: uppercase;
    margin-bottom: 1.25rem;
    text-transform: uppercase;

    @media (max-width: 1150px) {
        font-size: 13px;
        font-weight: 400;
        margin-bottom: 0.25rem;
    }
`;

export const DownloadRatingsImageWrapper = styled.div`
    width: 32.5rem;
    height: 31.625rem;
    background-size: cover;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;

    @media (max-width: 620px) {
        margin-top: 3.75rem;
    }

    @media (max-width: 550px) {
        width: 20.875rem;
        height: 20.5rem;
    }
`;

export const DownloadRatingsImage = styled.img`
    width: 100%;
    height: 100%;
`;


