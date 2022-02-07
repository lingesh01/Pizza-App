import React from 'react';
import { FooterLine, SocialLog, SocialIcons, SocialIconsLink, FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap } from "./Footer.styles";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <FooterLine />
            <FooterContainer id="service" >
                <FooterWrap>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLog href='#home'>Pizza</SocialLog>
                            <SocialIcons>
                                <SocialIconsLink href="/" target='_blank' aria-label='Facebook'>
                                    <FaFacebook />
                                </SocialIconsLink>
                                <SocialIconsLink href="/" target='_blank' aria-label='Instagram'>
                                    <FaInstagram />
                                </SocialIconsLink>
                                <SocialIconsLink href="/" target='_blank' aria-label='Youtube'>
                                    <FaYoutube />
                                </SocialIconsLink>
                                <SocialIconsLink href="/" target='_blank' aria-label='Twitter'>
                                    <FaTwitter />
                                </SocialIconsLink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrap>
            </FooterContainer>
        </>
    );
};

export default Footer;
