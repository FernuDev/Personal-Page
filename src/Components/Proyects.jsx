import { useState } from "react";
import styled from "styled-components";

//Components 
import { Container } from "../App";
import Proyect from "./Proyect";
import ProyectH from "./ProjectTitle";

//Data
import { Proyectos } from "../Data/Proyects";

//Functions 
import ReactPaginate from "react-paginate";

const ProyectsContainer = styled.div`
    color: white;
    margin-top: 10rem;
    text-align: center;
    margin-bottom: 10rem;

    .project-h{
        font-size: 4rem;
    }

   
    .deep{
        max-width: 70%;
        margin: 0 auto;
    }

    @media (min-width: 280px){
        .project-d{
            font-size: 1.9rem;
            text-align: justify;
        }
    }

    @media (min-width: 720px){
        .project-d{
            font-size: 2.2rem;
            text-align: center;
        }

    }
`;

const FilterProjects = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    select{
        padding: 1rem;
        border: 0;
        border-radius: 1rem;
        font-size: 1.5rem;
    }

`;

const ProjectsGrid = styled.div`

    @media (min-width: 280px){
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: 1fr;
        row-gap: 5rem;
    }

    @media (min-width: 720px){
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: auto;
        column-gap: 1.5rem;
        row-gap: 5rem;
    }

    @media (min-width: 1200px){
        display: grid;
        grid-template-columns: repeat(3,1fr);
        column-gap: 2rem;
        grid-template-rows: auto;
        row-gap: 5rem;
    }
`;

const Paginador = styled.div`

    max-width: 45rem;
    display: flex;
    justify-content: center;
    margin: 5rem auto;
    margin-top: 5rem;
    padding: 5rem;


    @media (min-width: 280px) and (max-width: 720px){
        max-width: 70%;
        margin: 2rem 1rem;
        align-self: center;

        .btn-page{
            padding: 0.5rem 1rem;
            font-size: 1rem;
        }

        .selectPage{
            font-size: 0.8rem;
        }

        .disabled{
        }
        
        .paginador{
            max-width: 60%;
        }
        
        .selectPage{
            font-size: 0.8rem;
        }

    }

    
    ul{
        justify-content: center;
        margin: 0 auto;
    }
    .paginador{
        display: flex;
        margin: 0 auto;
        justify-content: space-around;
        list-style: none;
        align-items: center;
    }

    .selectPage{
        font-size: 1.5rem;
    }

    .LinkClass{
        padding: 1rem 2rem;
    }
    
    .disabled{
        background-color: gray;
        opacity: 70%;
    }

    .btn-page{
        padding: 1rem 3rem;

        a{
            background-color: none;
        }
    }

   
   
`;


const Proyects = () => {

    const[filtro, setFiltro]= useState('Projects');

    const[Proyects, setProyects] = useState(Proyectos.slice(0, Proyectos.length));
    const[pageNumber, setPageNumber] = useState(0);

    const n = 6;
    const pagesVisited = pageNumber * n;

    let pageCount = 0;
    
    const handleSelect = (e)=>{
        setFiltro(e.target.value);
    };

    
    //All Proyects
    const AllProyects = Proyects
        .slice(pagesVisited, n+pagesVisited)
        .map( proyecto => (
            <Proyect key ={ proyecto.link} proyecto ={ proyecto} />
        ));


    //Categories;

    //React
    const reactProyects = Proyectos.filter( proyecto => proyecto.category === 'React');

    const ReactProyects = reactProyects
        .slice(pagesVisited, n+pagesVisited)
        .map( proyecto =>(
            <Proyect key ={ proyecto.link} proyecto ={ proyecto} />
        ));
       
    //HTML/CSS 
    const HtmlProyects = Proyectos.filter( proyecto => proyecto.category === 'HTML/CSS');

    const HTMLProyects = HtmlProyects
            .slice(pagesVisited, pagesVisited+n)
            .map( proyecto =>(
                <Proyect key ={ proyecto.link} proyecto ={ proyecto} />
            ));


    //C++ projects

    const CProyects = Proyectos.filter( proyecto => proyecto.category==='C++');
    const CPProyects = CProyects
                .slice(pagesVisited, pagesVisited+n)
                .map( proyecto =>(
                    <Proyect key ={ proyecto.link} proyecto ={ proyecto} />
                ));
    
    //Python Projects
    const PythonP = Proyectos.filter( proyecto => proyecto.category==='Python');
    const PythonProyects = PythonP
                .slice(pagesVisited, pagesVisited+n)
                .map( proyecto=>(
                    <Proyect key ={ proyecto.link} proyecto ={ proyecto} />

                ));
    
    const pageChange = ({selected}) =>{
        setPageNumber(selected);
    }

    switch(filtro){
        
        case 'React':
            pageCount = Math.ceil(reactProyects.length / n);
            break;
        case 'HTML/CSS':
            pageCount = Math.ceil(HtmlProyects.length / n);
            break;
        case 'C++':
            pageCount = Math.ceil(CProyects.length / n);
            break;
        case "FullStack":
            pageCount = 0;
            break;
        case 'Python':
            pageCount = Math.ceil(PythonP.length / n);
            break;
        default :
            pageCount = Math.ceil(Proyects.length / n)

    }
    return ( 
        <ProyectsContainer>
            <Container> 
                <h2 className='project-h'>My Projects and experience</h2>
                <p className='project-d'>Around my carrer and continious learning I was made many projects for prove my capacity.</p> 
                <p className='project-d deep'>That includes many projects for the web and desktop software develop using many languages like JavaScript and C++ and HTML for make the structure of the web.
                
                Also using advanced frameworks like react and introduction in game develop using C++ and Unreal Engine
                </p>

                <FilterProjects>
                    <ProyectH filtro={filtro}/>

                    <select
                        onChange={handleSelect}
                    >
                        <option value='Projects' >--Select Category--</option>
                        <option value='React'>React</option>
                        <option value='HTML/CSS'>Basic HTML/CSS</option>
                        <option value='FullStack'>Full Stack Projects</option>
                        <option value='C++'>C++ Proyects</option>
                        <option value='Python'>Python Proyects</option>
                    </select>
                </FilterProjects>

                <Container>
                    <ProjectsGrid>
                        {filtro==='Projects'?
                            AllProyects
                            : null
                        }
                        {filtro==='React'?
                            ReactProyects
                            : null
                        }
                        {filtro==='HTML/CSS'?
                            HTMLProyects
                        : null
                        }
                        {filtro==='C++'?
                            CPProyects
                            : null
                        }
                        {filtro==='FullStack'?
                            <h1>Coming soon...</h1>
                            : null
                        }
                        {filtro==='Python'?
                            PythonProyects
                            : null
                        }
                    </ProjectsGrid>
                    

                    <Paginador>
                        <ReactPaginate 
                            className = 'paginador'
                            previousLabel = 'Prev'
                            nextLabel = 'Next'
                            pageCount = {pageCount}
                            pageClassName = 'selectPage'
                            onPageChange = {pageChange}
                            previousClassName = {'btn-secundario '}
                            nextClassName = {'btn-secundario '}
                            previousLinkClassName = {'btn-page'}
                            nextLinkClassName = {'btn-page'}
                            pageLinkClassName = 'LinkClass'
                            disabledClassName = {'disabled'}
                        />
                    </Paginador>
                    
                </Container>
                
                
            </Container>
            
        </ProyectsContainer>
     );
}
 
export default Proyects;