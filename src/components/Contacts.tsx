import { ContactInfoIcon, ContactInfoIconWrapper, ContactInfoText, ContactsContainer, ContactsTexts, ContactsTextsIcon, ContactsWrapper, Line } from "../assets/styles/ContactsStyle/contacts";
import mailIcon from "../assets/icons/mail-fill.png";
import phoneIcon from "../assets/icons/phone-fill.png";

function Contacts () {
    return (
        <ContactsWrapper>
            <ContactsContainer>
                <ContactsTexts>
                    <ContactsTextsIcon>
                        <ContactInfoIconWrapper>
                            <ContactInfoIcon src={mailIcon} alt="Mail Icon"/>
                        </ContactInfoIconWrapper>
                    </ContactsTextsIcon>
                    <ContactInfoText>
                        info@youremail.com
                    </ContactInfoText>
                </ContactsTexts>
                <Line />
                <ContactsTexts>
                    <ContactsTextsIcon>
                        <ContactInfoIconWrapper>
                            <ContactInfoIcon src={phoneIcon} alt="Phone Icon"/>
                        </ContactInfoIconWrapper>
                    </ContactsTextsIcon>
                    <ContactInfoText>
                        +880 321 655 9985
                    </ContactInfoText>
                </ContactsTexts>
            </ContactsContainer>
        </ContactsWrapper>
    )
}

export default Contacts;