import React from 'react';
import classes from './ProjectPage.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import AnimalsImg from '../../../../components/UI/ProjectImages/Animals';
import { SecondaryFunc } from '../../../../components/Utilities/Utility';
import GithubRepo from '../../../../components/Navigation/GithubRepo/GithubRepo';
import LiveDemo from '../../../../components/Navigation/LiveDemo/LiveDemo';

const AnimalsProject = (props) => {
    SecondaryFunc(props.history.location.pathname);

    return (
        <Container>
            <Row>
                <div className={classes.Picture}>
                    <AnimalsImg />
                </div>
            </Row>
            <Row className={classes.Center}>
                <GithubRepo href='https://github.com/romangrubic/memory-game-js' />
                <LiveDemo href='https://romangrubic.github.io/memory-game-js/' />
            </Row>
            <div className={classes.TextCenter}>
                <h2 className={classes.ProjectName}>Animals</h2>
            </div>
            <div className={classes.Pitch}>
                <p>
                    Concentration, also known as Match, Memory, Pelmanism or
                    simply Pairs, is a card game in which all of the cards are
                    laid face down on a surface and two cards are flipped face
                    up over each turn. The object of the game is to turn over
                    pairs of matching cards. It is a particularly good game for
                    young children, though adults may find it challenging and
                    stimulating as well. The invention of the memory game is
                    sometimes attributed to Christopher Louis Pelman and the
                    game is often called Pelmanism.
                </p>
            </div>
            <hr></hr>
            <div className={classes.Pitch}>
                <h3>Main Technology used</h3>
                <ul className={classes.List}>
                    <li>Javascript ES6</li>
                    <li>Bootstrap</li>
                    <li>GitHub</li>
                    <li>EmailJS</li>
                </ul>
            </div>
        </Container>
    );
};

export default AnimalsProject;
