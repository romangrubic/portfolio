import React from 'react';
import classes from './ProjectPage.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import SnoopImg from '../../../../components/UI/ProjectImages/Adverts';
import { SecondaryFunc } from '../../../../components/Utilities/Utility';
import GithubRepo from '../../../../components/Navigation/GithubRepo/GithubRepo';
import LiveDemo from '../../../../components/Navigation/LiveDemo/LiveDemo';

const SnoopProject = (props) => {
    SecondaryFunc(props.history.location.pathname);

    return (
        <Container>
            <Row>
                <div className={classes.Picture}>
                    <SnoopImg />
                </div>
            </Row>
            <Row className={classes.Center}>
                <GithubRepo href='https://github.com/romangrubic/Snoop-Adverts-Flask' />
                <LiveDemo href='https://adverts-project.herokuapp.com/home' />
            </Row>
            <div className={classes.TextCenter}>
                <h2 className={classes.ProjectName}>Snoop</h2>
            </div>
            <div className={classes.Pitch}>
                <p>
                    Tired of signing up just to place your toaster or TV in
                    order to get few bobs? Tired of unwanted spam mail in your
                    e-mail about adverts that don't interest you? With Snoop you
                    don't have to give your e-mail or phone number! No more long
                    sign-up process and you have more time to snoop for a good
                    deal on that car you like!
                </p>
            </div>
            <hr></hr>
            <div className={classes.Pitch}>
                <h3>Description</h3>
                <p>
                    The goal of this project was to allow the user to make
                    simple operations where it could create, retrieve, update
                    and delete data. Database used is a noSQL database MongoDB.
                    <br></br>
                    The project is a web-site where user can post their adverts
                    (similar to DoneDeal, Adverts, Gumtree...) and buy from
                    others and also for companies or users to rent out side
                    spaces on the pages to promote their bussines (that space is
                    coloured in lightblue in order to be visible from rest of
                    the site and is clickable. When it is clicked, it will open
                    a contact modal).
                </p>
            </div>
            <hr></hr>
            <div className={classes.Pitch}>
                <h3>Main Technology used</h3>
                <ul className={classes.List}>
                    <li>Python - Flask Framework</li>
                    <li>MongoDB</li>
                    <li>Heroku</li>
                    <li>GitHub</li>
                    <li>EmailJS</li>
                </ul>
            </div>
        </Container>
    );
};

export default SnoopProject;
