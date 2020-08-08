import React from 'react';
import { NavLink } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import classes from './Projects.module.css'

const Projects = (props) => {
    return (
            <Col xs={ 12 } lg={6} className={classes.Project}>
                <NavLink to={ props.link } data-toggle="tooltip" title="Click to view more info!">
                    <div className={classes.Logo}>
                    { props.img }
                    </div>
                </NavLink>
                <h2 className={classes.projectName}>{props.projectName}</h2>
            </Col>

    )
};

export default Projects;