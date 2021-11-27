
import styled from "styled-components";

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
        justify-content: space-space-around;
        gap: 2rem;

        color: white;
        font-size: 2rem;

        a{
            text-decoration: none;
            color: white;
        }
    }
`;

const Footer = () => {
    return ( 
        <FooterBg>
            <h1>Fernu</h1>

            <div>
                <a href="">Github</a>
                <a href="">LinkedIn</a>
                <p>Email</p>

            </div>
        </FooterBg>
     );
}
 
export default Footer;