
import styled from "styled-components";

import {AiFillGithub, AiFillLinkedin, AiOutlineMail} from 'react-icons/ai'

const FooterBg = styled.footer`
    background-color: black;
    color: white;
    display: flex;
    margin-top: 10rem;
    padding: 2rem;
    justify-content: space-around;
    align-items: center;
    h1{
        font-size: 3rem;
    }
    div{
        display: flex;
        align-items: center;
        justify-content: space-around;
        gap: 2rem;

        color: white;
        font-size: 2rem;

        a, p{
            text-decoration: none;
            color: white;
            display: flex;
            gap: 1rem;
            align-items: center;
        }
        
    }


`;

const Footer = () => {

    return ( 
        <FooterBg id='footer'>
            <h1>Fernu</h1>

            <div>
                <a href="https://github.com/Fernu292"><AiFillGithub />Github</a>
                <a href="https://www.linkedin.com/in/luis-fernando-n%C3%BA%C3%B1ez-rangel-885431213/"><AiFillLinkedin />LinkedIn</a>
                <p> <AiOutlineMail />fernu292@gmail.com</p>

            </div>
        </FooterBg>
     );
}
 
export default Footer;