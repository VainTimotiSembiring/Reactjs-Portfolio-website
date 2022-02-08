import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import { FaJs, FaReact } from 'react-icons/fa';

export const FooterContainer = styled.footer`
    background-color: #13e4f3
`;

export const FooterWrap = styled.div`
    padding: 16px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1300px;
    margin: 0 auto;
`;

export const SocialMedia = styled.section`
    max-width: 1300px;
    width: 100%;
`;

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 16px auto 0 auto;

    @Media screen and(max-width: 820px){
        flex-direction: column;
    }

`;
export const FooterText = styled.p`
    justify-self: start;
    cursor: pointer;
    text-decoration; none;
    font-size: 0.9rem;
    display: flex;
    color: #fff;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
`;

export const FooterReact = styled.p`
    align-items: center;
    font-size: 1.1rem;
    align-items: center;
    color: #fff;

`

// export const SocialLogo = styled(Link)`
//     color: #fff;
//     justify-self: start;
//     cursor: pointer;
//     text-decoration; none;
//     font-size: 1.5rem;
//     display: flex;
//     align-items: center;
//     margin-bottom: 16px;
//     font-weight: bold;

// `;



export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`;

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
`

export const FaReactjs = styled(FaReact)`
    color: #147aa6;
`
export const IconJs = styled(FaJs)`
    color: #edbb16;
`


