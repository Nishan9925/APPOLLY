import { AppStoreImg, AppStoreWrapper, DownloadRatingsImage, DownloadRatingsImageWrapper, DownloadRatingsStats, DownloadRatingsStatsIcon, DownloadRatingsStatsText, DownloadRatingsStatsTitle, DownloadRatingsTexts, DownloadRatingsTextsText, DownloadRatingsTextsTitle, DownloadRatingsWrapper, DownloadRatingsWrapperStats, DownloadWrapper, GooglePlayImg, GooglePlayWrapper, OnlineStoresWrapper } from "../assets/styles/DownloadStyles/download";
import googlePlay from "../assets/icons/google-play.png";
import appStore from "../assets/icons/app-store.png";
import download from "../assets/icons/download.svg";
import like from "../assets/icons/like.svg";
import star from "../assets/icons/star.svg";
import downloadPhoneImage from "../assets/images/Gravity-Scene-iPhone-12-Mockup 1.png";

function Download () {
    return (
        <DownloadWrapper>
            <DownloadRatingsWrapper>
                <DownloadRatingsTexts>
                    <DownloadRatingsTextsTitle>
                        Download App Now
                    </DownloadRatingsTextsTitle>
                    <DownloadRatingsTextsText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
                    </DownloadRatingsTextsText>
                </DownloadRatingsTexts>
                <OnlineStoresWrapper>
                    <GooglePlayWrapper>
                        <GooglePlayImg src={googlePlay} alt="Google Play"/>
                    </GooglePlayWrapper>
                    <AppStoreWrapper>
                        <AppStoreImg src={appStore} alt="App Store"/>
                    </AppStoreWrapper>
                </OnlineStoresWrapper>
                <DownloadRatingsWrapperStats>
                    <DownloadRatingsStats>
                        <DownloadRatingsStatsIcon src={download} alt="download icon" />
                        <DownloadRatingsStatsText>
                            59865
                        </DownloadRatingsStatsText>
                        <DownloadRatingsStatsTitle>
                            Download
                        </DownloadRatingsStatsTitle>
                    </DownloadRatingsStats>
                    <DownloadRatingsStats>
                        <DownloadRatingsStatsIcon src={like} alt="like" />
                        <DownloadRatingsStatsText>
                            29852
                        </DownloadRatingsStatsText>
                        <DownloadRatingsStatsTitle>
                            Like
                        </DownloadRatingsStatsTitle>
                    </DownloadRatingsStats>
                    <DownloadRatingsStats>
                        <DownloadRatingsStatsIcon src={star} alt="star"/>
                        <DownloadRatingsStatsText>
                            1500
                        </DownloadRatingsStatsText>
                        <DownloadRatingsStatsTitle>
                            5 star rating
                        </DownloadRatingsStatsTitle>
                    </DownloadRatingsStats>
                </DownloadRatingsWrapperStats>
            </DownloadRatingsWrapper>
            <DownloadRatingsImageWrapper>
                <DownloadRatingsImage src={downloadPhoneImage} alt="Download Iphone Image"/>
            </DownloadRatingsImageWrapper>
        </DownloadWrapper>
    )
}

export default Download;