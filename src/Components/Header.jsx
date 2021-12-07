
import styled from "styled-components";
import HeaderBg from '../img/Bg/BG-Arck-Header.webp';

import { Container } from "../App";

const HeaderContainer = styled.header`
    background-image: url(${HeaderBg});
    background-repeat: no-repeat;
    background-size: cover;
    height: 105rem;
    margin: 0;
    padding: 2rem;
    color: white;

    .Title-header{
        font-size: 3.8rem;
        cursor: pointer;
    }

    @media (min-width: 280px){
        background-position: center right;
    }

    @media (min-width: 720px){
        background-position: center;
    }

    @media (min-width: 2560px){
        height: 130rem;
    }
`;

const HeaderContent = styled.div`
   
    @media (min-width: 280px){
        display: flex;
        flex-direction: column;
        font-size: 2rem;
    }
    @media (min-width: 480px){
        font-size:2.5rem;
    }

    @media (min-width: 720px){
        display: grid;
        grid-template-columns: repeat(2,1fr);
        font-size: 2.8rem;
        margin-top: 1rem;
    }

    @media (min-width: 1200px){
        font-size: 3.5rem;
        margin-top: 10rem;
    }
`;

const Header = () => {
    return ( 
        <HeaderContainer>
            <Container>
                <div>
                    <h1 className='Title-header'>Fernu Developer</h1>
                </div>

                <HeaderContent>
                    <div>
                        <h1>Hi everyone! I'm Luis Fernando</h1>
                        <p>I am passioned web developer who loves to make sites and web applications in react, also I love the continuous learning and every mistake about technnology</p>

                        <a className='btn-principal' href='#footer'>Contact Me</a>
                    </div>
                    <div>
                    </div>
                </HeaderContent>
            </Container>
        </HeaderContainer>
     );
}
 
export default Header;