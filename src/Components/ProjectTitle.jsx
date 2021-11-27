
import {FaReact, FaPython} from 'react-icons/fa';
import {AiFillHtml5, AiFillProject} from 'react-icons/ai';
import {SiCplusplus} from 'react-icons/si';
import styled from 'styled-components';

const FlexH = styled.h2`
    display: flex;
    gap: 2rem;
    align-items: center;
`;

const ProyectH = ({filtro}) => {

    switch(filtro){
        case "React":
            return (
                <FlexH className='project-h'>{filtro}<FaReact /></FlexH>

            );
        case "HTML/CSS":
            return(
                <FlexH className='project-h'>{filtro}<AiFillHtml5 /></FlexH>
            );
        case "C++":
            return(
                <FlexH className='project-h'>{filtro}<SiCplusplus /></FlexH>
            );
        case "Python":
            return(
                <FlexH className='project-h'>{filtro}<FaPython /></FlexH>
            );
        default:
            return(
                <FlexH className='project-h'>{filtro}<AiFillProject /></FlexH>
            )
    }

    
}
 
export default ProyectH;