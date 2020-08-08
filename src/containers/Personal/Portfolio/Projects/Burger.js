import React from 'react';
import classes from './ProjectPage.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import BurgerImg from '../../../../components/UI/ProjectImages/Burger';
import { SecondaryFunc } from '../../../../components/Utilities/Utility';
import GithubRepo from '../../../../components/Navigation/GithubRepo/GithubRepo';
import LiveDemo from '../../../../components/Navigation/LiveDemo/LiveDemo';

const BurgerProject = (props) => {
    SecondaryFunc(props.history.location.pathname);

    return (
        <Container>
            <Row>
                <div className={classes.Picture}>
                    <BurgerImg />
                </div>
            </Row>
            <Row className={classes.Center}>
                <GithubRepo href='https://github.com/romangrubic/burger-shop' />
                <LiveDemo href='https://romangrubic.github.io/burger-shop/' />
            </Row>
            <div className={classes.TextCenter}>
                <h2 className={classes.ProjectName}>Burger shack</h2>
            </div>
            <div className={classes.Pitch}>
                <p>
                    Aching for a juicy burger? But there is not one to your
                    liking? Burger shack to the rescue! With Burger shack you
                    can make your own burger. Triple decker with cheese or extra
                    salad and bacon? No problem, we make any burger you like!
                    And deliver within 30min to your doors.
                    <br></br>
                    <br></br>* T&C may apply.
                </p>
            </div>
            <hr></hr>
            <div className={classes.Pitch}>
                <h3>Description</h3>
                <p>
                    The goal of this project was to learn ReactJS, React Hooks
                    and Redux. Project is fully functional and allows user
                    authorization through FirebaseDB. Every order is stored on
                    the server and easily accessible.
                </p>
            </div>
            <hr></hr>
            <div className={classes.Pitch}>
                <h3>Main Technology used</h3>
                <ul className={classes.List}>
                    <li>ReactJS</li>
                    <li>Redux</li>
                    <li>Firebase</li>
                    <li>GitHub</li>
                </ul>
            </div>
        </Container>
    );
};

export default BurgerProject;
