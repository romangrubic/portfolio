import React from 'react';
// import { Route } from 'react-router-dom';
import classes from './Portfolio.module.css';
import Projects from './Projects/Projects';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import StarTrekImg from '../../../components/UI/ProjectImages/StarTrek';
// import ApiImg from '../../../components/UI/ProjectImages/Api';
import SnoopImg from '../../../components/UI/ProjectImages/Adverts';
// import KingdomImg from '../../../components/UI/ProjectImages/KingdomProperties';
import WeatherImg from '../../../components/UI/ProjectImages/Weather';
import BurgerImg from '../../../components/UI/ProjectImages/Burger';
import AnimalsImg from '../../../components/UI/ProjectImages/Animals';
import ClothiersImg from '../../../components/UI/ProjectImages/Garaks-clothiers';
import { SecondaryFunc } from '../../../components/Utilities/Utility';
// import StarTrekProject from './Projects/StarTrek';
// import PortfolioData from './Portfolio-data';

const Portfolio = ({ history, match }) => {
    SecondaryFunc(history.location.pathname);

    return (
        <Container>
            <div className={classes.bg}></div>
            <Row className={classes.ProjectRow}>
                {/* {PortfolioData.map((project) => (
                    <Projects
                        key={project.id}
                        link={project.link}
                        projectName={project.projectName}
                        img={project.img}
                    />
                ))} */}
                <Projects
                    link='/portfolio/GaraksClothiers'
                    projectName='E-commerce web-site with Stripe payments and FirebaseDB'
                    img={<ClothiersImg />}
                />
                <Projects
                    link='/portfolio/StarTrek'
                    projectName='E-commerce web-site with discussion board and private messaging'
                    img={<StarTrekImg />}
                />
                {/* <Projects
                    link='/portfolio/Q&A-Api'
                    projectName='Q&A about programming languages REST Api'
                    img={<ApiImg className={classes.Logo} />}
                /> */}
                {/* <Projects
                    link='/portfolio/KingdomProperties'
                    projectName='Property agency web-site with admin panel'
                    img={<KingdomImg />}
                /> */}
                <Projects
                    link='/portfolio/Burgershack'
                    projectName='Food ordering web-site'
                    img={<BurgerImg />}
                />
                <Projects
                    link='/portfolio/Snoop'
                    projectName='Buy/sell web-site'
                    img={<SnoopImg />}
                />
                <Projects
                    link='/portfolio/Weather360'
                    projectName='Weather forecast web-site'
                    img={<WeatherImg />}
                />
                <Projects
                    link='/portfolio/Animals'
                    projectName='Memory game'
                    img={<AnimalsImg />}
                />
            </Row>
        </Container>
    );
};

export default Portfolio;
