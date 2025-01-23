import { BakgroundColor, HelpSectionImage, HelpSectionImageWrapper, HelpSectionTexts, HelpSectionTextsText, HelpSectionTextsTitle, HelpSectionTextsWrapper, HelpSectionWrapper } from "../assets/styles/HelpSectionStyles/helpSection";
import video from "../assets/images/video.jpeg";

function HelpSection () {
    return (
        <HelpSectionWrapper>
            <BakgroundColor>
                <HelpSectionTextsWrapper>
                    <HelpSectionTexts>
                        <HelpSectionTextsTitle>
                            How to use the app perfectly
                        </HelpSectionTextsTitle>
                        <HelpSectionTextsText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
                        </HelpSectionTextsText>                        
                    </HelpSectionTexts>
                    <HelpSectionImageWrapper>
                        <HelpSectionImage src={video} alt="Video" />
                    </HelpSectionImageWrapper>
                </HelpSectionTextsWrapper>
            </BakgroundColor>
        </HelpSectionWrapper>
    )
}

export default HelpSection;