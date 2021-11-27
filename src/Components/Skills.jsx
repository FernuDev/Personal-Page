import ProgressBar from 'react-bootstrap/ProgressBar'
import styled from 'styled-components';

const SkillContainer = styled.section`
    max-width: 70%;
    margin: 20rem auto;
    color: white;
    text-align: center;

    >h1{
        font-size: 4rem;
    }
`;

const Skills = () => {
    return ( 
        <SkillContainer>
            <h1>My Skills</h1>

            <p>Around my travel as a web developer y get some skills, that could generate higth products value for many companies.
            </p>

            <div>
                <h1>My technnical skills</h1>

                <ProgressBar now = {60} label ={`60%`} />
            </div>
        </SkillContainer>
     );
}
 
export default Skills;