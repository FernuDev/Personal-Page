import { Fragment } from "react";
import styled from "styled-components";

//Components
import Header from "./Components/Header";
import Proyects from "./Components/Proyects";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Skills from "./Components/Skills";

export const Container = styled.div`
    margin: 0 auto;
    max-width: 80%;
`;

const App = () => {
    return ( 
        <Fragment>
            <Header />

            <Proyects />

            <About />

            <Skills/>

            <Footer />
        </Fragment>
     );
}
 
export default App;