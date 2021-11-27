import ProgressBar from 'react-bootstrap/ProgressBar'
import styled from 'styled-components';
import {FaReact, FaPython} from 'react-icons/fa';
import {AiFillHtml5, AiFillProject} from 'react-icons/ai';
import {SiCplusplus} from 'react-icons/si';

const SkillContainer = styled.section`
    max-width: 70%;
    margin: 5rem auto;
    color: white;
    text-align: center;

    >h1{
        font-size: 4rem;
    }

    .bg-info{
        background-color: #170FBF;
        border-radius: inherit;
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

                <label htmlFor="Js">JavaScript</label>
                <ProgressBar now = {60} label ={`60%`} variant='info' id='Js' />
                <label htmlFor="Js">C++</label>
                <ProgressBar now = {60} label ={`60%`} variant='info' id='Js' />
                <label htmlFor="Js">HTML/CSS</label>
                <ProgressBar now = {60} label ={`60%`} variant='info' id='Js' />
                <label htmlFor="Js">React<FaReact/></label>
                <ProgressBar now = {60} label ={`60%`} variant='info' id='Js' />
            </div>
        </SkillContainer>
     );
}
 
export default Skills;