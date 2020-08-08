import React from 'react';
import classes from './About.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SecondaryFunc } from '../../../components/Utilities/Utility';

const About = (props) => {
    SecondaryFunc(props.history.location.pathname);

    return (
        <Container className={classes.Container}>
            <Row>
                <h1>Summary</h1>
                <p className={classes.AboutInfo}>
                    During my bootcamp in Code Institute, I have learned a lot
                    (Javascript, Python, Flask, Django, SQL and NoSQL) and I
                    have several projects available on my GitHub. What I lack in
                    experience, I can substitute with positive attitude and
                    willingness to learn. Imagine what I could do with right
                    direction and training if focused on one thing. I currently
                    enjoy working with Django and React and i'm open to new
                    technologies.<br></br>
                    <br></br>
                    My projects are available in Portfolio section with
                    documentation.
                </p>
            </Row>
            <hr></hr>
            <Row>
                <h1>Education</h1>
            </Row>
            <Row>
                <Col sm={12} lg={6} className={classes.Diploma}>
                    <h3>
                        <a
                            href='https://codeinstitute.net/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className={classes.BlackFont}
                        >
                            Code Institute
                        </a>
                    </h3>
                    <p>
                        <b>Diploma in Software Development</b> <br></br>
                        <b>Merit grade</b> - April 2020 <br></br>
                        Credit rated by <b>Edinburgh Napier University</b>{' '}
                        <br></br>
                        Level 5 RQF - Higher National Diploma<br></br>
                        Level 6 NFQ - Higher Certificate <br></br>
                        Associate Degree (USA) <br></br>
                    </p>
                    <a
                        href='https://www.credential.net/a9914dbf-40ba-4895-b3e3-c5b5b6e15c8d'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        View Diploma
                    </a>
                </Col>
                <Col sm={12} lg={6} className={classes.Diploma}>
                    <h3>
                        <a
                            href='https://www.udemy.com/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className={classes.BlackFont}
                        >
                            Udemy
                        </a>
                    </h3>
                    <p>
                        <b>Certificate in React Development</b> <br></br>
                        May 2020
                    </p>
                    <a
                        href='https://udemy-certificate.s3.amazonaws.com/image/UC-22c389e8-54a2-4dec-a1bc-b7d4c154a545.jpg?v=1588960889000'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        View Certificate
                    </a>
                </Col>
            </Row>
            <hr></hr>
            <Row>
                <h1>Technology stack</h1>
                <p className={classes.AboutInfo}>
                    I specialize in HTML, CSS, JavaScript and Python languages
                    and manipulating databases. Passionate about creating a
                    positive user experience, I enjoy the challenge working with
                    and adapting new technologies as they develop.
                </p>
                <ul className={classes.MainList}>
                    <li>Programming:</li>
                    <ul className={classes.SecondList}>
                        <li>HTML5 + CSS3</li>
                        <li>Javascript</li>
                        <ul className={classes.ThirdList}>
                            <li>
                                jQuery, React (Hooks, React-Router, Redux,
                                Redux-Saga)
                            </li>
                        </ul>
                        <li>Python</li>
                        <ul className={classes.ThirdList}>
                            <li>
                                Flask, Django, Django REST framework (REST Api)
                            </li>
                        </ul>
                    </ul>
                    <li>Databases:</li>
                    <ul className={classes.SecondList}>
                        <li>SQL</li>
                        <ul className={classes.ThirdList}>
                            <li>PostgreSQL</li>
                        </ul>
                        <li>NoSQL</li>
                        <ul className={classes.ThirdList}>
                            <li>MongoDB, Firebase</li>
                        </ul>
                    </ul>
                    <li>Tools and technologies:</li>
                    <ul className={classes.SecondList}>
                        <li>Version control</li>
                        <ul className={classes.ThirdList}>
                            <li>Git, Github</li>
                        </ul>
                        <li>Responsive web design</li>
                        <ul className={classes.ThirdList}>
                            <li>Bootstrap, CSS3</li>
                        </ul>
                        <li>Web hosting</li>
                        <ul className={classes.ThirdList}>
                            <li>GitHub Pages, Heroku, AWS S3</li>
                        </ul>
                        <li>Online payments</li>
                        <ul className={classes.ThirdList}>
                            <li>Stripe</li>
                        </ul>
                        <li>Test development</li>
                        <ul className={classes.ThirdList}>
                            <li>Travis CI, Jasmine</li>
                        </ul>
                    </ul>
                </ul>
            </Row>
            <hr></hr>
            <Row>
                <h1>Hobbies and Interests</h1>
                <p className={classes.AboutInfo}>
                    Member of Scout community for long time. I enjoy hiking,
                    camping and exploring. I'm also a big fan of everything Star
                    Trek and enjoy playing board games and role-playing games
                    like DnD and Warhammer 40k with friends.
                </p>
            </Row>
        </Container>
    );
};

export default About;
