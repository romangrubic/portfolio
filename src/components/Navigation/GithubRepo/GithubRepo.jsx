import React from 'react';
import Button from 'react-bootstrap/Button';

const GithubRepo = ({ href }) => {
    return (
        <a
            href={href}
            target='_blank'
            rel='noopener noreferrer'
            data-toggle='tooltip'
            title='Opens GitHub repository!'
        >
            <Button variant='info'>Source code</Button>
        </a>
    );
};

export default GithubRepo;
