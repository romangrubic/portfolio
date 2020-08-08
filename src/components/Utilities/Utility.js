import { useEffect } from 'react';

export const MainFunc = () => {
    useEffect(() => {
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        fetch('https://react-hook-99ae7.firebaseio.com/visit.json', {
            method: 'POST',
            body: JSON.stringify('New visit -------------------'),
            headers: { 'Content-Type': 'application/json' },
        }).then(
            fetch(`${proxy}https://api.ipify.org/?format=json`)
                .then((result) => result.json())
                .then((data) =>
                    fetch(
                        'https://react-hook-99ae7.firebaseio.com/visit.json',
                        {
                            method: 'POST',
                            body: JSON.stringify(data.ip),
                            headers: { 'Content-Type': 'application/json' },
                        }
                    ).then(
                        fetch(
                            'https://react-hook-99ae7.firebaseio.com/visit.json',
                            {
                                method: 'POST',
                                body: JSON.stringify(
                                    new Date().toUTCString() + ' Time  -'
                                ),
                                headers: { 'Content-Type': 'application/json' },
                            }
                        ).then(
                            fetch(
                                'https://react-hook-99ae7.firebaseio.com/visit.json',
                                {
                                    method: 'POST',
                                    body: JSON.stringify(
                                        new Date().toTimeString() +
                                            ' Landing page    0'
                                    ),
                                    headers: {
                                        'Content-Type': 'application/json',
                                    },
                                }
                            )
                        )
                    )
                )
        );
    });
};

export const SecondaryFunc = (name) => {
    useEffect(() => {
        fetch('https://react-hook-99ae7.firebaseio.com/visit.json', {
            method: 'POST',
            body: JSON.stringify(
                new Date().toTimeString() + ` ${name}       0`
            ),
            headers: { 'Content-Type': 'application/json' },
        });
    });
};
