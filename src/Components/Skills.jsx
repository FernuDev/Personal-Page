import ProgressBar from 'react-bootstrap/ProgressBar'
import styled from 'styled-components';
import {FaReact} from 'react-icons/fa';
import {AiFillHtml5, AiFillProject} from 'react-icons/ai';
import {SiCplusplus} from 'react-icons/si';

const SkillContainer = styled.section`
    max-width: 50%;
    margin: 5rem auto;
    color: white;
    text-align: center;

    >h1{
        font-size: 4rem;
    }

    .bg-info{
        background: rgb(9,123,191);
        background: linear-gradient(90deg, rgba(9,123,191,1) 0%, rgba(8,144,191,1) 76%, rgba(115,0,255,1) 100%);
        border-radius: inherit;
        font-size: 1.2rem;
    }

    .progress{
        background-color: lightgrey;
        border-radius: 15px;
        max-width: 35rem;
        margin: 1.2rem auto;
    }

    .Card-skills{
        background-color: #474D73;
        padding: 2rem;
        border-radius: 1.5rem;


        label{
            text-align: left;
            font-size: 2rem;
        }
    }
`;

const Skills = () => {
    return ( 
        <SkillContainer>
            <h1>My Skills</h1>

            <p>Around my travel as a web developer y get some skills, that could generate higth products value for many companies.
            </p>

            <div className='Card-skills'>
                <h1>My technnical skills</h1>

                <label htmlFor="Js">JavaScript<AiFillProject /></label>
                <ProgressBar now = {60} label ={`60%`} variant='info' id='Js' />
                <label htmlFor="C++">C++<SiCplusplus /></label>
                <ProgressBar now = {60} label ={`60%`} variant='info' id='C++' />
                <label htmlFor="HTML">HTML/CSS <AiFillHtml5 /></label>
                <ProgressBar now = {60} label ={`60%`} variant='info' id='HTML' />
                <label htmlFor="react">React<FaReact/></label>
                <ProgressBar now = {60} label ={`60%`} variant='info' id='react' />
            </div>
        </SkillContainer>
     );
}
 
export default Skills;