import React from 'react';
import project4 from '../assets/images/project4.jpg';
import project3 from '../assets/images/project3.png';
import project2 from '../assets/images/project2.jpg';
import project1 from '../assets/images/project1.png';
import mini04 from "../assets/images/Screenshot 2025-03-17 at 2.40.10 PM (2) copy.png"
import mini03 from "../assets/images/guess-word-800.webp"
import mini02 from "../assets/images/Number-Guessing-Game-01.png"
import mini01 from "../assets/images/weatherApp.jpg"
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <h2>Mini Projects</h2>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/rahul-karthik-au/Weather-App" target="_blank" rel="noreferrer"><img src={mini01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/rahul-karthik-au/Weather-App" target="_blank" rel="noreferrer"><h2>Weather App</h2></a>
                <p>Developed a weather app with the help of HTML, CSS, JavaScript and Used weatherApi to fetch the weather data.</p>
            </div>
            <div className="project">
                <a href="https://github.com/rahul-karthik-au/NumberGuess" target="_blank" rel="noreferrer"><img src={mini02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/rahul-karthik-au/NumberGuess" target="_blank" rel="noreferrer"><h2>Number Guess Game</h2></a>
                <p>Designed, developed, and launched a Number Guess to get familiar in HTML , CSS and JavaScript.</p>
            </div>
            <div className="project">
                <a href="https://github.com/rahul-karthik-au/Word-Guess" target="_blank" rel="noreferrer"><img src={mini03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/rahul-karthik-au/Word-Guess" target="_blank" rel="noreferrer"><h2>Word Hurdle</h2></a>
                <p>Developed a Word Hurdle Game. Used a api to fetch different words and HTML for structure, CSS for Style and JavaScript for interactivity. </p>
            </div>
            <div className="project">
                <a href="https://github.com/rahul-karthik-au/ToDo-List" target="_blank" rel="noreferrer"><img src={mini04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/rahul-karthik-au/ToDo-List" target="_blank" rel="noreferrer"><h2>ToDo List</h2></a>
                <p>A simple ToDo List Web App with a feature of editing and deletion was built with help of React.</p>
            </div>
            </div>
            <h2>Projects</h2>
            <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/rahul-karthik-au/Little-Lemon-Restaurant" target="_blank" rel="noreferrer"><img src={project1} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/rahul-karthik-au/Little-Lemon-Restaurant" target="_blank" rel="noreferrer"><h2>Little Lemon Restaurant</h2></a>
                <p>This is a full stack application built with MERN stack which is used to order foods and table reservation.</p>
            </div>
            <div className="project">
                <a href="https://github.com/rahul-karthik-au/amplify-app" target="_blank" rel="noreferrer"><img src={project2} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/rahul-karthik-au/amplify-app" target="_blank" rel="noreferrer"><h2>E-Commerce Website using AWS</h2></a>
                <p>This is a full stack E-Commerce website built with Amazon Web Service.Used AWS S3, DynamoDB, Cognito , AWS Amplify, Lambda and other necessary AWS Services.</p>
            </div>
            <div className="project">
                <a href="https://github.com/rahul-karthik-au/Personal-Finance-Tracker" target="_blank" rel="noreferrer"><img src={project3} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/rahul-karthik-au/Personal-Finance-Tracker" target="_blank" rel="noreferrer"><h2>Personal Finance Tracker</h2></a>
                <p>This is project which helps you to track yyour Finance. It is built using Spring Boot. Used MySQL as the backend.</p>
            </div>
            <div className="project">
                <a href="https://github.com/rahul-karthik-au/Emotion-Recognition-from-Speech" target="_blank" rel="noreferrer"><img src={project4} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/rahul-karthik-au/Emotion-Recognition-from-Speech" target="_blank" rel="noreferrer"><h2>Emotion Recognition from Speech</h2></a>
                <p>It is a project where we used RAVDESS voice data to recognise emotion from speech. We have developed a LSTM model and CNN model to recognise emotion and compared the results of two model.Also performed extracting features and bootstraping on Data .</p>
            </div>
        </div>
    </div>
    );
}

export default Project;