import React from 'react';
import classes from './ProjectPage.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import WeatherImg from '../../../../components/UI/ProjectImages/Weather';
import { SecondaryFunc } from '../../../../components/Utilities/Utility';
import GithubRepo from '../../../../components/Navigation/GithubRepo/GithubRepo';
import LiveDemo from '../../../../components/Navigation/LiveDemo/LiveDemo';

const WeatherProject = (props) => {
    SecondaryFunc(props.history.location.pathname);

    return (
        <Container>
            <Row>
                <div className={classes.Picture}>
                    <WeatherImg />
                </div>
            </Row>
            <Row className={classes.Center}>
                <GithubRepo href='https://github.com/romangrubic/weather-app-openweather' />
                <LiveDemo href='https://romangrubic.github.io/weather-app-openweather/' />
            </Row>
            <div className={classes.TextCenter}>
                <h2 className={classes.ProjectName}>Weather 360°</h2>
            </div>
            <div className={classes.Pitch}>
                <p>
                    Since the beginning of time, humans used to predict weather
                    just by looking into skies. Sometimes they would be right,
                    more often wrong. But, no more!
                    <br></br>
                    Introducing Weather 360°, web-site that shows weather around
                    the globe! Look for current and future weather for any city
                    on Earth (hope to include Lunar colonies and even Martian
                    colonies including Utopia Planitia in near future!). See the
                    cities location on a map and even roam the city streets
                    using Pegman in full-screen mode. Just like the simulations!
                </p>
            </div>
            <hr></hr>
            <div className={classes.Pitch}>
                <h3>Description</h3>
                <p>
                    This is made with collaboration between three different
                    API's (OpenWeather API, DarkSky API and Google maps API) and
                    a proxy. My choice in deciding which API's to use was mainly
                    in their simplicity. I started this project using DarkSky
                    API. In order to make the DarkSky API to work, I had to use
                    a proxy to bypass CORS problem. I googled how to bypass cors
                    and found this nice proxy CORS anywhere solution, which is
                    described as an API that enables cross-origin requests to
                    anywhere. After that problem, I found out that DarkSky API
                    can only locate a city based on it's coordinates, which
                    restricted it and made complicated for user to use (it is
                    simpler to type city name instead of latitude and
                    longtitude). This is when I found about OpenWeather API.
                    This API uses only city name to search it's database of
                    weather information but has restricted access to some
                    information and in order to get same amount of data as in
                    DarkSky API, I would need to pay. So, I faced dilemma about
                    which one to use and finally decided to combine this two
                    API's and make them work together in order to give the best
                    user experience. I took from OpenWeather API it's capability
                    to sort through database easily just by typing city name.
                    Once the user types city name and selects country (country
                    selection is optional), it feeds DarkSky API with
                    coordinates of the city and in that way I can access more
                    information that I thought would be desirable for user to
                    see. Also, in same way OpenWeather API feeds coordinates
                    into Google maps API to show the user exact location of the
                    searched city. User can use the Google maps in full-screen
                    mode and also can go into StreetView mode but each user has
                    a certain amount of calls to Google maps and once he reaches
                    the limit, has to wait for it to reset.
                    <br></br>
                    All three API's and a proxy, work together to give the user
                    as best experience and as intuitive design as they can.
                </p>
            </div>
            <hr></hr>
            <div className={classes.Pitch}>
                <h3>Main Technology used</h3>
                <ul className={classes.List}>
                    <li>Javascript ES6</li>
                    <li>OpenWeather API</li>
                    <li>DarkSky API</li>
                    <li>Google maps API</li>
                    <li>GitHub</li>
                    <li>EmailJS</li>
                </ul>
            </div>
        </Container>
    );
};

export default WeatherProject;
