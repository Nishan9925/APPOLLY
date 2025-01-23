import { AbountInfoImg, AbountInfoImgWrapper, AboutInfoDescription, AboutInfoDescriptionTexts, AboutInfoDescriptionTextsText, AboutInfoDescriptionTextsTitle, AboutInfoDescriptionWrapper, AboutInfoMarkSVG, AboutInfoWrapper, AboutTextsTexts, AboutTextsTitle, AboutTextsWrapper, AboutWrapper } from "../assets/styles/AboutStyles/about";
import aboutInfo from "../assets/images/about-img.png";
import mark from "../assets/icons/mark.svg";

function About () {
    return (
        <AboutWrapper>
            <AboutTextsWrapper>
                <AboutTextsTitle>
                    About Our App
                </AboutTextsTitle>
                <AboutTextsTexts>
                    Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. 
                    Viverra nunc ante velit vitae. 
                    Est tellus vitae, nullam lobortis enim. 
                    Faucibus amet etiam tincidunt rhoncus, 
                    ullamcorper velit. Ullamcorper risus tempor, 
                    ac nunc libero urna, feugiat.
                </AboutTextsTexts>
            </AboutTextsWrapper>
            <AboutInfoWrapper>
                <AbountInfoImgWrapper>
                    <AbountInfoImg src={aboutInfo} alt="About Image"/>
                </AbountInfoImgWrapper>
                <AboutInfoDescriptionWrapper>
                    <AboutInfoDescription>
                        <AboutInfoMarkSVG src={mark}/>
                        <AboutInfoDescriptionTexts>
                            <AboutInfoDescriptionTextsTitle>
                                Creative design
                            </AboutInfoDescriptionTextsTitle>
                            <AboutInfoDescriptionTextsText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
                            </AboutInfoDescriptionTextsText>
                        </AboutInfoDescriptionTexts>
                    </AboutInfoDescription>
                    <AboutInfoDescription>
                        <AboutInfoMarkSVG src={mark}/>
                        <AboutInfoDescriptionTexts>
                            <AboutInfoDescriptionTextsTitle>
                                easy to use
                            </AboutInfoDescriptionTextsTitle>
                            <AboutInfoDescriptionTextsText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
                            </AboutInfoDescriptionTextsText>
                        </AboutInfoDescriptionTexts>
                    </AboutInfoDescription>
                    <AboutInfoDescription>
                        <AboutInfoMarkSVG src={mark}/>
                        <AboutInfoDescriptionTexts>
                            <AboutInfoDescriptionTextsTitle>
                                Best user experince
                            </AboutInfoDescriptionTextsTitle>
                            <AboutInfoDescriptionTextsText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
                            </AboutInfoDescriptionTextsText>
                        </AboutInfoDescriptionTexts>
                    </AboutInfoDescription>
                </AboutInfoDescriptionWrapper>
            </AboutInfoWrapper>
        </AboutWrapper>
    )
}

export default About;
