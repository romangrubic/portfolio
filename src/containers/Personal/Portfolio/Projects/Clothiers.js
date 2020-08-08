import React from 'react';
import classes from './ProjectPage.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ClothiersImg from '../../../../components/UI/ProjectImages/Garaks-clothiers';
import { SecondaryFunc } from '../../../../components/Utilities/Utility';
import GithubRepo from '../../../../components/Navigation/GithubRepo/GithubRepo';
import LiveDemo from '../../../../components/Navigation/LiveDemo/LiveDemo';

const ClothiersProject = (props) => {
    SecondaryFunc(props.history.location.pathname);

    return (
        <Container>
            <Row>
                <div className={classes.Picture}>
                    <ClothiersImg />
                </div>
            </Row>
            <Row className={classes.Center}>
                <GithubRepo href='https://github.com/romangrubic/e-shop' />
                <LiveDemo href='https://garaks-clothiers.herokuapp.com/' />
            </Row>
            <div className={classes.TextCenter}>
                <h2 className={classes.ProjectName}>Garak's Clothiers</h2>
            </div>
            <div className={classes.Pitch}>
                <p>
                    In need of new clothes? Or looking for a gift? Here at
                    Garak's Clothiers shop you can find clothes and shoes for
                    anyone. We are selling assortment of hats, jackets, shoes,
                    women and men clothes. Only the finest quality clothes and
                    accessories because you deserve it!
                </p>
            </div>
            <hr></hr>
            <div className={classes.Pitch}>
                <h3>Description</h3>
                <p>
                    The goal of this project was to learn ReactJS, React Hooks,
                    Redux and Redux-Saga. Project is fully functional and allows
                    user authorization through FirebaseDB and GoogleAuth as well
                    as purchase through Stripe payments. Every order is stored
                    on the server and easily accessible. Products are stored at
                    Cloud Firestore on Firebase.
                </p>
            </div>
            <hr></hr>
            <div className={classes.Pitch}>
                <h3>Main Technology used</h3>
                <ul className={classes.List}>
                    <li>ReactJS</li>
                    <li>Redux</li>
                    <li>Redux-Saga</li>
                    <li>Firebase</li>
                    <li>Stripe</li>
                    <li>GitHub</li>
                    <li>Heroku</li>
                </ul>
            </div>
        </Container>
    );
};

export default ClothiersProject;
