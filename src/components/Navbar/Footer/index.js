import React from 'react';
import { FaCopyright, FaFacebook, FaInstagram, FaJs, FaReact, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FooterContainer,
   FooterWrap,
   SocialMedia,
   SocialMediaWrap,
  //  SocialLogo,
   SocialIcons,
   SocialIconLink,
   FooterText,
   FooterReact,
   FaReactjs,
   IconJs } from './FooterElements';

const Footer = () => {
  return (
      <FooterContainer>
        <FooterWrap>
            <SocialMedia>
              <SocialMediaWrap>
                  <FooterText to ='/'><FaCopyright/> 2022 by V.T.S</FooterText>
                  {/* <SocialLogo to= "/">Vain</SocialLogo> */}
                  <FooterReact>Created using <FaReactjs/> React <IconJs/> </FooterReact>
                  <SocialIcons>
                    <SocialIconLink href="/" target="_blank"
                     aria-label ="Facebook" rel="noopener noreferrer">
                      <FaFacebook/>
                    </SocialIconLink>
                    <SocialIconLink href="/" target="_blank"
                     aria-label ="Instagram" rel="noopener noreferrer">
                      <FaInstagram/>
                    </SocialIconLink>
                    <SocialIconLink href="/" target="_blank"
                     aria-label ="Youtube" rel="noopener noreferrer">
                      <FaYoutube/>
                    </SocialIconLink>
                    <SocialIconLink href="/" target="_blank"
                     aria-label ="Twitter" rel="noopener noreferrer">
                      <FaTwitter/>
                    </SocialIconLink>
                  </SocialIcons>
              </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
      </FooterContainer>
  )
  
};

export default Footer;
