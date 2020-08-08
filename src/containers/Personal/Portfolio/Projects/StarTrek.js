import React from 'react';
import classes from './ProjectPage.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import StarTrekImg from '../../../../components/UI/ProjectImages/StarTrek';
import { SecondaryFunc } from '../../../../components/Utilities/Utility';
import GithubRepo from '../../../../components/Navigation/GithubRepo/GithubRepo';
import LiveDemo from '../../../../components/Navigation/LiveDemo/LiveDemo';

const StarTrekProject = (props) => {
    SecondaryFunc(props.history.location.pathname);

    return (
        <Container>
            <Row>
                <div className={classes.Picture}>
                    <StarTrekImg />
                </div>
            </Row>
            <Row className={classes.Center}>
                <GithubRepo href='https://github.com/romangrubic/Star-Trek-Django' />
                <LiveDemo href='https://star-trek-by-romangrubic.herokuapp.com/' />
            </Row>
            <div className={classes.TextCenter}>
                <h2 className={classes.ProjectName}>Star Trek</h2>
            </div>
            <div className={classes.Pitch}>
                <p>
                    Do you like Star Trek? Are you looking for a community of
                    people who like Star Trek franchise as much as you? Then
                    join our community! We have news from Star Trek franchise
                    and Federation itself! You can find nice goodies for you or
                    friends in our store. Yes, of course we have Raktajino mugs.
                    Or just join for discussion about everything Star Trek in
                    our Forum where you can chat with other Trekkies. Live long
                    and prosper!
                </p>
            </div>
            <hr></hr>
            <div className={classes.Pitch}>
                <h3>Description</h3>
                <p>
                    The goal of this project was to allow the user to create an
                    account and make a purchase of product/membership with
                    Stripe. Database used is a SQL database PostgresSQL.
                    <br></br>I am a big Star Trek fan so for my last project
                    with Code Institute, I decided to make a Star Trek web-site,
                    where beside creating account and purchasing a product via
                    Stripe, user can also read news from Star Trek franchise,
                    find games about Star Trek and join discussions about Star
                    Trek in a discussion forum. Users can also chat via private
                    messaging system and edit their profiles so beside this
                    project being a web-shop, it is also a social network for
                    people who like Star Trek.
                </p>
            </div>
            <hr></hr>
            <div className={classes.Pitch}>
                <h3>Main Technology used</h3>
                <ul className={classes.List}>
                    <li>Python - Django Framework</li>
                    <li>PostgresSQL</li>
                    <li>Stripe</li>
                    <li>Heroku</li>
                    <li>GitHub</li>
                    <li>TravisCI</li>
                    <li>AWS-S3</li>
                </ul>
            </div>
        </Container>
    );
};

export default StarTrekProject;
