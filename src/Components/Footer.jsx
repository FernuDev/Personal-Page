
import styled from "styled-components";

const FooterBg = styled.footer`
    background-color: black;
    color: white;
    display: flex;
    margin-top: 10rem;
`;

const Footer = () => {
    return ( 
        <FooterBg>
            <h1>Fernu</h1>
        </FooterBg>
     );
}
 
export default Footer;