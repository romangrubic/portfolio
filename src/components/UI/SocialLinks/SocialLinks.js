import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

import classes from './SocialLinks.module.css';

// LinkedIn, Github, CV
const LinkedIn = <a href="https://www.linkedin.com/in/roman-grubic-b835ab67/"
    target="_blank"
    rel="noopener noreferrer"><FontAwesomeIcon
        icon={ faLinkedin }
        size="3x"
        className={ classes.SocialLink } /></a>

const GitHub = <a href="https://github.com/romangrubic"
    target="_blank"
    rel="noopener noreferrer"><FontAwesomeIcon
        icon={ faGithub }
        size="3x"
        className={ classes.SocialLink } /></a>

const CV = <a href="https://raw.githubusercontent.com/romangrubic/react-portfolio/master/src/assets/CV/RomanGrubic.docx"
    target="_blank"
    rel="noopener noreferrer"><FontAwesomeIcon
        icon={ faDownload }
        size="3x"
        className={ classes.SocialLink } /></a>

const SocialLinks = (props) => {
    return (
        <div className={ classes.SocialLinks }>
            { LinkedIn }
            { GitHub }
            { CV }
        </div>
    )
};

export default SocialLinks;