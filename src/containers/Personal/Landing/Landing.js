import React from 'react';
import classes from './Landing.module.css';
// import gsap, { SteppedEase } from 'gsap';

const Landing = (props) => {
    // let LandingText = useRef(null);

    // useEffect(() => {
    //     let boxTl = gsap.timeline();

    //     boxTl.fromTo(
    //         LandingText,
    //         5,
    //         { width: '0' },
    //         {
    //             width: '450px',
    //             ease: SteppedEase.config(37),
    //         },
    //         0
    //     );

    //     boxTl.fromTo(
    //         LandingText,
    //         0.5,
    //         {
    //             borderColor: 'rgba(255,255,255,0.75)',
    //         },
    //         {
    //             borderColor: 'rgba(255,255,255,0)',
    //             repeat: -1,
    //             ease: SteppedEase.config(37),
    //         },
    //         0
    //     );
    // }, []);

    return (
        <div>
            <div className={classes.context}>
                {/* <h1>Let's bring your idea(s) to life!</h1>
                <br></br>
                <h2>Web developer who can solve your problem <br></br>or help with an existing project</h2> */}
                <h1
                // ref={(el) => {
                //     LandingText = el;
                // }}
                >
                    Hello, <br></br>It's a pleasure to meet you.
                </h1>
                <br></br>
                <h2>
                    The purpose of this site is to serve as extension to my
                    resume, provide information to potential employers while
                    demonstrating my skills. <br></br>Looking for a job at the
                    moment!
                </h2>
            </div>
            <div className={classes.area}>
                <ul className={classes.circles}>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    );
};

export default Landing;
