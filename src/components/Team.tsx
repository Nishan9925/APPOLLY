import { ContactInfoFacebookIcon, ContactInfoFacebookIconWrapper, Line, ProfileCircle, ProfileImage, ProfilePictureWrapper, SocialMediaWrapper, TeamCardDescription, TeamCardsWrapper, TeamCardTextsName, TeamCardTextsNameWrapper, TeamCardTextsProffesion, TeamCardWrapper, TeamTexts, TeamTextsText, TeamTextsTitle, TeamWrapper } from "../assets/styles/TeamStyles/team";
import profile1 from "../assets/images/profile1.png";
import profile2 from "../assets/images/profile2.png";
import profile3 from "../assets/images/profile3.png";
import facebookIconDark from "../assets/icons/facebookDark.png";
import instagramIconDark from "../assets/icons/instagramDark.png";
import twitterIconDark from "../assets/icons/twitterDark.png";
import youtubeIconDark from "../assets/icons/youtubeDark.png";

function Team() {
    return (
        <TeamWrapper>
            <TeamTexts>
                <TeamTextsTitle>
                    Our reative team
                </TeamTextsTitle>
                <TeamTextsText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
                </TeamTextsText>
            </TeamTexts>
            <TeamCardsWrapper>
                <TeamCardWrapper>
                    <ProfilePictureWrapper>
                        <ProfileImage src={profile1} alt="picture" />
                    </ProfilePictureWrapper>
                    <TeamCardTextsNameWrapper>
                        <TeamCardTextsName>
                            Carla Press
                        </TeamCardTextsName>
                        <TeamCardTextsProffesion>
                            App Developer
                        </TeamCardTextsProffesion>
                        <TeamCardDescription>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae.
                        </TeamCardDescription>
                    </TeamCardTextsNameWrapper>
                    <SocialMediaWrapper>
                        <ContactInfoFacebookIconWrapper>
                            <ContactInfoFacebookIcon src={facebookIconDark} />
                        </ContactInfoFacebookIconWrapper>
                        <Line></Line>
                        <ContactInfoFacebookIconWrapper>
                            <ContactInfoFacebookIcon src={instagramIconDark} />
                        </ContactInfoFacebookIconWrapper>
                        <Line></Line>
                        <ContactInfoFacebookIconWrapper>
                            <ContactInfoFacebookIcon src={twitterIconDark} />
                        </ContactInfoFacebookIconWrapper>
                        <Line></Line>
                        <ContactInfoFacebookIconWrapper>
                            <ContactInfoFacebookIcon src={youtubeIconDark} />
                        </ContactInfoFacebookIconWrapper>
                    </SocialMediaWrapper>
                </TeamCardWrapper>
                <TeamCardWrapper>
                    <ProfilePictureWrapper>
                        {/* <ProfileCircle/> */}
                        <ProfileImage src={profile2} alt="picture" />
                    </ProfilePictureWrapper>
                    <TeamCardTextsNameWrapper>
                        <TeamCardTextsName>
                            Craig Gouse
                        </TeamCardTextsName>
                        <TeamCardTextsProffesion>
                            UI/UX Designer
                        </TeamCardTextsProffesion>
                        <TeamCardDescription>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae.
                        </TeamCardDescription>
                    </TeamCardTextsNameWrapper>
                    <SocialMediaWrapper>
                        <ContactInfoFacebookIconWrapper>
                            <ContactInfoFacebookIcon src={facebookIconDark} />
                        </ContactInfoFacebookIconWrapper>
                        <Line></Line>
                        <ContactInfoFacebookIconWrapper>
                            <ContactInfoFacebookIcon src={instagramIconDark} />
                        </ContactInfoFacebookIconWrapper>
                        <Line></Line>
                        <ContactInfoFacebookIconWrapper>
                            <ContactInfoFacebookIcon src={twitterIconDark} />
                        </ContactInfoFacebookIconWrapper>
                        <Line></Line>
                        <ContactInfoFacebookIconWrapper>
                            <ContactInfoFacebookIcon src={youtubeIconDark} />
                        </ContactInfoFacebookIconWrapper>
                    </SocialMediaWrapper>
                </TeamCardWrapper>
                <TeamCardWrapper>
                    <ProfilePictureWrapper>
                        {/* <ProfileCircle/> */}
                        <ProfileImage src={profile3} alt="picture" />
                    </ProfilePictureWrapper>
                    <TeamCardTextsNameWrapper>
                        <TeamCardTextsName>
                            Jocelyn Septimus
                        </TeamCardTextsName>
                        <TeamCardTextsProffesion>
                            Website developer
                        </TeamCardTextsProffesion>
                        <TeamCardDescription>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae.
                        </TeamCardDescription>
                    </TeamCardTextsNameWrapper>
                    <SocialMediaWrapper>
                        <ContactInfoFacebookIconWrapper>
                            <ContactInfoFacebookIcon src={facebookIconDark} />
                        </ContactInfoFacebookIconWrapper>
                        <Line></Line>
                        <ContactInfoFacebookIconWrapper>
                            <ContactInfoFacebookIcon src={instagramIconDark} />
                        </ContactInfoFacebookIconWrapper>
                        <Line></Line>
                        <ContactInfoFacebookIconWrapper>
                            <ContactInfoFacebookIcon src={twitterIconDark} />
                        </ContactInfoFacebookIconWrapper>
                        <Line></Line>
                        <ContactInfoFacebookIconWrapper>
                            <ContactInfoFacebookIcon src={youtubeIconDark} />
                        </ContactInfoFacebookIconWrapper>
                    </SocialMediaWrapper>
                </TeamCardWrapper>
            </TeamCardsWrapper>
        </TeamWrapper>
    )
}

export default Team;
