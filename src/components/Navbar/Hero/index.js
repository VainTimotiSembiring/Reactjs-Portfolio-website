import React, {useState} from 'react';
import Navbar from '..';
import { GlobalStyle } from '../../../GlobalStyle';
import Sidebar from '../Sidebar';
import{ HeroContainer,
        HeroContent, 
        HeroItems,
        HeroH1, 
        HeroP,
        HeroTmbl }
    from './HeroElements'


const Hero = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen);
  };



  return( 
    <HeroContainer>
        <Navbar toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle = {toggle}/>
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
