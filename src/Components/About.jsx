
import styled from "styled-components";
import BgAbout from '../img/Bg/BgAboutMe.webp';
import Code from '../img/About/Code.svg';

const AboutBg = styled.section`
    background-image: url(${BgAbout});
    background-size: cover;
    height: 90rem;
    margin-bottom: 50rem;
    flex-direction: column;
    color: white;
    display: flex;
    position: relative;

    .About-content{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 2;
        max-width: 60%;
        text-align: center;
        margin: 30rem auto ;

        h1{
            font-size: 4rem;
        }

        p{
            font-size: 2rem;
        }
    }

    img{
        position: absolute;
        display: flex;
        justify-content: flex-end;
        opacity: 80%;
        z-index: 1;
        right: 0cm;
        top: 70%;
    }
`;

const AboutContent = styled.div`
    color: white;
    max-width: 80%;
    display: flex;
    flex-direction: column;
    margin: 10rem auto;

    text-align: center;
    z-index: 2;

    h1{
        font-size: 4rem;
    }

    p{
        font-size: large;
    }
`;

const About = () => {
    return ( 
        <>
            <AboutBg>
                <div className='About-content'>
                    <h1>About Me</h1>

                    <p>I'm Passioned Web developer, Young and ambicious, I love learn anything</p>
                    <p>Every time I learn more and more like a new technnology or new scientific topic, but my speciality is astronomy and programming and of course web development</p>
                    <p>In adition I'm too polite, I mean, I can integrate in any team of work for colaborate and work in amazing projects</p>
                </div>

                <img src = {Code} alt="CodeAbout" />

                <AboutContent>
                    <h1>Why me?</h1>

                    <p>
                        I'm proactive and multidiciplinary, in all aspects of my life I have a lot of responsability and compromise.
                    </p>

                    <p>
                        In adition I have complete some certifications to prove my skills in web design as a complement to my proyects to show you my capacities
                    </p>
                </AboutContent>
            </AboutBg>
        </>
     );
}
 
export default About;
