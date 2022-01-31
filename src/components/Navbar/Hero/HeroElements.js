import styled from 'styled-components';
import ImgBg from '../../../images/vain-timoti2.png'

export const HeroContainer = styled.div`
   background: linear-gradient(to right, rgba(0,0,0,0.7),
   rgba(0,0,0,0.1)), url(${ImgBg});

   height: 120vh;
   background-position: center;
   background-size: cover;
`