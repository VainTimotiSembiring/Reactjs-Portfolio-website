import React from 'react';
import Navbar from '..';
import{ HeroContainer,
        HeroContent, 
        HeroItems,
        HeroH1, 
        HeroP,
        HeroTmbl }
    from './HeroElements'

const Hero = () => {
  return( 
    <HeroContainer>
        <Navbar />
        <HeroContent>
            <HeroItems>
                <HeroH1>Vain Timoti Sembiring</HeroH1>
                <HeroP>Just Ordinary Man</HeroP>
                <HeroTmbl>see more</HeroTmbl>
            </HeroItems>
        </HeroContent>
    </HeroContainer>
  )};

export default Hero;
