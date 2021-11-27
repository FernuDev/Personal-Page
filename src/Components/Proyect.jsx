import styled from "styled-components";

const ProyectCard = styled.div`
    background-color: white;
    max-width: 92%;
    color: black;
    height: 105%;
    position: relative;
    margin: 0 auto;

    h1{
        font-size: 3rem;
    }

    .button-card{
        margin-top: 2rem;
    }

    img{
        object-fit: cover;
        width: 100%;
    }

    @media (min-width: 280px){

        img{
            height: 20rem;
        }

        p{
            font-size: 1.2rem;
        }

        .button-card{
            a{
                font-size: 1.2rem;
            }
        }

        
    }

    @media (min-width: 1200px){
        .button-card{
            a{
                font-size: 2rem;
            }
        }

        p{
            font-size: 1.5rem;
            margin: 1rem 1rem;
        }

        img{
            height: 30rem;

        }
    }
`;

const Proyect = ({proyecto}) => {

    const { title, description, link, img } = proyecto;
    return ( 
        <ProyectCard>
            <img src={img} alt={title}/>
            <h1>{title}</h1>
            <p>{description}</p>
            <div className='button-card'>
                <a href={link} className='btn-principal'>View more</a>
            </div>
        </ProyectCard>
     );
}
 
export default Proyect;