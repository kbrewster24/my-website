import React from 'react';
import './App.scss';
import Experience from './Experience';
import Panel from './Panel';
import slidesData from './info';
import Carousel from 'react-bootstrap/Carousel';
import './Projects.scss';





function App() {
  return (
    <div className="App">
      
      <div className="Introduction">
        <br/>
        <h1>Introduction</h1> 
        Hello, my name is kyle brewster and I am a developer looking for employment. 
        I am well versed in many technologies and consider myself a full stack
        developer. On the front end I am most experienced with react and focus on simple
        clean user freindly design. On the backend I am comfortable with a range of languages
        such as Java, Python and Javascript. I am developing my machine learning Skills
        using tensorflow. 
      </div>
      <div className="Education_Experience">
        <br/><h1>Education</h1>
        <h3>University of New Hampshire</h3>
        I completed my BS for Computer Science.
        I have also completed 18 credits towards my Masters and plan to complete my degree by the end of 2021<br/><br/>
        Some of the Coursework I have completed:<br/><br/>
        
        <div className="left">
          <h4>Undergrad</h4>
          <ul>
            <li>Artificial Intelligence</li>
            <li>Data Structures & Algorithms</li>
            <li>Parallel Programming</li>
            <li>OO Design and Development</li>
            <li>Database Systems</li>
          </ul>
        </div>
        <div className="right">
        <h4>Graduate</h4>
        <ul>
            <li>Mobile Robotics</li>
            <li>Machine Learning</li>
            <li>Computer Vision</li>
            <li>Human Robot Interaction</li>
          </ul>
        </div>
      </div>

      <h1>Experience</h1>
      <Experience/>
      
      <div className="Skills">
        <h1>Skills</h1>
        <div className="left">
          <h4>Languages</h4>
          <ul>
              <li>Java</li>
              <li>C/C++</li>
              <li>Javascript</li>
              <li>Python</li>
              <li>R</li>
              <li>HTML/CSS</li>
              
            </ul>
            <h4>Concepts</h4>
            <ul>
              <li>Data Structures </li>
              <li>Algorithms</li>
              <li>Neural Networks</li>
              <li>Machine Learning Methods</li>
            </ul>
           
          </div>
          <div className="right">
            <h4>Soft Skills</h4>
            <ul>
              <li>Problem Solving</li>
              <li>Agile</li>
              <li>Work Ethic</li>
              <li>Quick Learner</li>
              <li>Communication</li>
            </ul>
            <h4>Technologies</h4>
            <ul>
              <li>SQL</li>
              <li>MongoDB</li>
              <li>Docker</li>
              <li>AWS</li>
              <li>React</li>
              <li>Tensorflow</li>
              
            </ul>
            
          </div>
      </div>




      <br/>
      <div className="Projects">
        <h1>Projects</h1>
        <div className="Project_slider">
          <Carousel interval={10000}>
            <Carousel.Item>
              <Panel header = "Player Scouting app" content="Developed application for
              UNH Men’s soccer team to “scout” upcoming team. 
              Application uses AWS API gateway and lambda function to run a python script 
              which scrapes player statistical information from the upcoming teams’ website.
              Application displays player stats neatly on a front end using react, coaches
              are able to move player cards to simulate teams’ formation and add 
              additional scouting information to the player cards." 
              repo="https://github.com/kbrewster24/Player-Scout-App"/>
            </Carousel.Item>

            <Carousel.Item>
              <Panel header = "Driving with Gestures" content="Worked as part of a group to train a convolutional neural net to understand 5 
              different hand gestures. Gestures were used to control a car in a simulated
              pygame environment." 
              repo="" paper="/Final_Report.pdf"/>
            </Carousel.Item>

            <Carousel.Item>
              <Panel header = "Fantasy Soccer prediction algorithm" content="Developed a prediction algorithm using my own regression and mean squared error function.
              Trained on player stats from the fantasy premier league API. App would select players 
              for each week of fantasy and beat the average user in proof of concept implementation." 
              repo=""/>
            </Carousel.Item>

            <Carousel.Item>
              <Panel header = "Quadsat Swarm" content="Worked as part on an interdisciplinary team to develop Quadcopters. Implemented grad 
              Mechanical Engineering students SMC controller to keep the quadcopter steady. Developed
              gps positioning for outdoor use and began to implement a swarm algorithm for controlling
              multiple quadcopters at once. " 
              repo=""/>
            </Carousel.Item>
          </Carousel>

        </div>
        {console.log(slidesData)}
        
        

      </div>



      <div className="Personal">
        <h1>Personal</h1>
        <br/>
        <h3>Soccer</h3>
        <div className="Soccer">
        Soccer has always been a passion of mine. I had a drive and commitnment
        to be the best player I possibly could from a young age. This drive brought me to the division one level where 
        I competed for 5 years, won 2 America East titles and helped return the program to the NCAA tournament making it to the sweet 
        sixteen once and the round of 32 twice.<br/><br/>Being apart of a successful program allowed me to understand the 
        importance of being a team player in that what you think is best for you might not always be the best
        for the team. Another invaluable lesson I learned from being a student athlete is time management being 
        able to balance classes, practices and a social life while you are on the road not sleeping in your own 
        bed and exhausted from playing in the previous game is not something that every college student gets to 
        experience and learn from. 
        </div>
        <Carousel className="images">
          <Carousel.Item>
            <img className="img" src = "/images/soccer.jpeg" alt="soccer"/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="img" src = "/images/Champions.png" alt="second championship"/>
            <Carousel.Caption>
              <p>Winning our second America East Championship</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <br/><br/>
      </div>


      
      <div className="contact">
        <h1>Contact</h1>
        Email: kbrewster24@outlook.com<br/>
        Phone: 603-726-1050<br/><br/>
      </div>
    </div>
  );
}

export default App;
