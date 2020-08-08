import React from 'react';
import Button from 'react-bootstrap/Button';

const LiveDemo = ({ href }) => {
    return (
        <a
            href={href}
            target='_blank'
            rel='noopener noreferrer'
            data-toggle='tooltip'
            title='Hosted on GitHub pages!'
        >
            <Button variant='danger'>Live website</Button>
        </a>
    );
};

export default LiveDemo;
