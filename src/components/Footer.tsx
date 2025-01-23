import { Line, BackgroundColor, ContactInfoFacebookIcon, ContactInfoFacebookIconWrapper, FooterContainer, FooterWrapper, LinksWrapper, LogoNewsWrapper, LogoWrapper, LogoWrapperTexts, LogoWrapperTextsDescription, LogoWrapperTextsTitle, NewsWrapper, SocialMediaWrapper, LinksTitle, FooterMenuText, NewsWrapperTexts, NewsWrapperTitle, NewsWrapperText, FooterLine, FooterCopyrightText, FooterCopyrightTextWrapper, FooterCopyrightIcon } from "../assets/styles/FooterStyles/footer";
import facebookIcon from "../assets/icons/facebook-fill.png";
import instagramIcon from "../assets/icons/instagram-fill.png";
import twitterIcon from "../assets/icons/twitter-fill.png";
import youtubeIcon from "../assets/icons/youtube-fill.png";
import { Input } from "antd";
import { SendOutlined } from '@ant-design/icons';
import copyrightIcon from "../assets/icons/copyright-line.png";


function Footer () {
    return (
        <FooterWrapper>
            <BackgroundColor>
                <FooterContainer>
                   <LogoNewsWrapper>
                        <LogoWrapper>
                            <LogoWrapperTexts>
                                <LogoWrapperTextsTitle>
                                    Logo
                                </LogoWrapperTextsTitle>
                                <LogoWrapperTextsDescription>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
                                </LogoWrapperTextsDescription>
                            </LogoWrapperTexts>
                            <SocialMediaWrapper>
                                <ContactInfoFacebookIconWrapper>
                                    <ContactInfoFacebookIcon src={facebookIcon}/>
                                </ContactInfoFacebookIconWrapper>
                                <Line></Line>
                                <ContactInfoFacebookIconWrapper>
                                    <ContactInfoFacebookIcon src={instagramIcon}/>
                                </ContactInfoFacebookIconWrapper>
                                <Line></Line>
                                <ContactInfoFacebookIconWrapper>
                                    <ContactInfoFacebookIcon src={twitterIcon}/>
                                </ContactInfoFacebookIconWrapper>
                                <Line></Line>
                                <ContactInfoFacebookIconWrapper>
                                    <ContactInfoFacebookIcon src={youtubeIcon}/>
                                </ContactInfoFacebookIconWrapper>
                            </SocialMediaWrapper>
                        </LogoWrapper>
                        <LinksWrapper>
                            <LinksTitle>
                                quick link
                            </LinksTitle>
                            <FooterMenuText>
                                About
                            </FooterMenuText>
                            <FooterMenuText>
                                Features
                            </FooterMenuText>
                            <FooterMenuText>
                                Screenshot
                            </FooterMenuText>
                            <FooterMenuText>
                                Blog
                            </FooterMenuText>
                        </LinksWrapper>
                   </LogoNewsWrapper>
                   <NewsWrapper>
                        <NewsWrapperTexts>
                            <NewsWrapperTitle>
                                news letter
                            </NewsWrapperTitle>
                            <NewsWrapperText>
                                Subscribe our newsletter to get our latest
                                update & news
                            </NewsWrapperText>
                            <Input addonAfter={<SendOutlined />} placeholder="Your email address" />
                        </NewsWrapperTexts>
                   </NewsWrapper>
                </FooterContainer>
                <FooterLine></FooterLine>
                <FooterCopyrightTextWrapper>
                    <FooterCopyrightIcon src={copyrightIcon} alt="Copyright Icon"/>
                    <FooterCopyrightText>
                        Copyright 2021 .Ojjomedia. All Right Reserved.
                    </FooterCopyrightText>
                </FooterCopyrightTextWrapper>
            </BackgroundColor>
        </FooterWrapper>
    )
}

export default Footer;