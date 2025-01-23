import { AppStoreImg, AppStoreWrapper, ContactInfoFacebookIcon, ContactInfoFacebookIconWrapper, ContactInfoInstagramIcon, ContactInfoInstagramIconWrapper, ContactInfoMailIcon, ContactInfoMailIconWrapper, ContactInfoMailText, ContactInfoMailWrapper, ContactInfoPhoneIcon, ContactInfoPhoneIconWrapper, ContactInfoPhoneText, ContactInfoPhoneWrapper, ContactInfoTwitterIcon, ContactInfoTwitterIconWrapper, ContactInfoYoutubeIcon, ContactInfoYoutubeIconWrapper, ContactsInfoWrapper, ContactsInfoWrapperLeft, ContactsInfoWrapperRight, GooglePlayImg, GooglePlayWrapper, HeaderInfo, HeaderInfoImg, HeaderInfoImgWrapper, HeaderInfoTexts, HeaderInfoTextsDownload, HeaderInfoTextsParagraph, HeaderInfoTextsTitle, HeaderInfoTextsWrapper, HeaderWrapper, OnlineStoresWrapper } from "../assets/styles/HeaderStyles/header";
import mailIcon from "../../src/assets/icons/mail-fill.png";
import phoneIcon from "../assets/icons/phone-fill.png";
import facebookIcon from "../assets/icons/facebook-fill.png";
import instagramIcon from "../assets/icons/instagram-fill.png";
import twitterIcon from "../assets/icons/twitter-fill.png";
import youtubeIcon from "../assets/icons/youtube-fill.png";
import googlePlay from "../assets/icons/google-play.png";
import appStore from "../assets/icons/app-store.png";
import Navbar from "./Navbar";
import { Rectangle } from "../assets/styles/HeaderStyles/header.styles";

function Header () {
    return (
        <HeaderWrapper>
            <ContactsInfoWrapper>
                <ContactsInfoWrapperLeft>
                    <ContactInfoMailWrapper>
                        <ContactInfoMailIconWrapper>
                            <ContactInfoMailIcon src={mailIcon} alt="Mail Icon" />
                        </ContactInfoMailIconWrapper>
                        <ContactInfoMailText>
                            Info@youremail.com
                        </ContactInfoMailText>
                    </ContactInfoMailWrapper>
                    <ContactInfoPhoneWrapper>
                        <ContactInfoPhoneIconWrapper>
                            <ContactInfoPhoneIcon src={phoneIcon} alt="Phone Icon" />
                        </ContactInfoPhoneIconWrapper>
                        <ContactInfoPhoneText>
                            (480) 555-0103
                        </ContactInfoPhoneText>
                    </ContactInfoPhoneWrapper>
                </ContactsInfoWrapperLeft>
                <ContactsInfoWrapperRight>
                    <ContactInfoFacebookIconWrapper>
                        <ContactInfoFacebookIcon src={facebookIcon} alt="Faceook" />
                    </ContactInfoFacebookIconWrapper>
                    <ContactInfoInstagramIconWrapper>
                        <ContactInfoInstagramIcon src={instagramIcon} alt="Instagram" />
                    </ContactInfoInstagramIconWrapper>
                    <ContactInfoTwitterIconWrapper>
                        <ContactInfoTwitterIcon src={twitterIcon} alt="Twitter" />
                    </ContactInfoTwitterIconWrapper>
                    <ContactInfoYoutubeIconWrapper>
                        <ContactInfoYoutubeIcon src={youtubeIcon} alt="YouTube" />
                    </ContactInfoYoutubeIconWrapper>
                </ContactsInfoWrapperRight>
            </ContactsInfoWrapper>
               <Navbar />
               <HeaderInfo>
                    <Rectangle></Rectangle>
                    <HeaderInfoTextsWrapper>
                        <HeaderInfoTextsTitle>
                            A Great App Makes Your Life Better
                        </HeaderInfoTextsTitle>
                        <HeaderInfoTextsParagraph>
                            Amet minim mollit non deserunt 
                            ullamco est sit aliqua dolor do 
                            amet sint. Velit officia consequat 
                            duis enim velit mollit. Exercitation 
                            veniam consequat sunt nostrud amet.
                        </HeaderInfoTextsParagraph>
                        <HeaderInfoTextsDownload>
                            Download App Now
                        </HeaderInfoTextsDownload>
                        <OnlineStoresWrapper>
                            <GooglePlayWrapper>
                                <GooglePlayImg src={googlePlay} alt="Google Play" />
                            </GooglePlayWrapper>
                            <AppStoreWrapper>
                                <AppStoreImg src={appStore} alt="App Store"/>
                            </AppStoreWrapper>
                        </OnlineStoresWrapper>
                    </HeaderInfoTextsWrapper>
                    <HeaderInfoImgWrapper>
                        <HeaderInfoImg />
                    </HeaderInfoImgWrapper>
               </HeaderInfo>
        </HeaderWrapper>
    )
}

export default Header;
