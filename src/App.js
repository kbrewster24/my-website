import React from 'react';
import logo from './logo.svg';
import './App.css';
import Experience from './Experience';
import Panel from './Panel';
import Slider from '@farbenmeer/react-spring-slider';
import slidesData from './info';
import './carousel.scss';
import Carousel from 'react-bootstrap/Carousel';
import { CarouselItem } from 'react-bootstrap';





function App() {
  return (
    <div className="App">
      <div className="Personal">
        <h1>Introduction</h1> 
        Hello, my name is kyle brewster and I am a developer looking for employment. 
        I am well versed in many technologies and would consider myself a full stack
        developer. On the front end I am most experienced with react and focus on simple
        clean user freindly design. On the backend I am comfortable with a range of languages
        such as Java, Python and Javascript. I am also developing my machine learning Skills
        using tensorflow. 
      </div>
      <div className="Education_Experience">
        <h1>Work and Education</h1>
        <h3>University of New Hampshire</h3>
        I completed my BS for Computer Science with a gpa of 3.22.
        I also completed 18 credits towards my Masters and plan to complete my degree by the end of 2021<br/><br/>
        Some of the Coursework I have completed:<br/><br/>
        
        <div className="left">
          <h4>Undergrad</h4>
          <ul>
            <li>Artificial Intelligence</li>
            <li>Data Structures</li>
            <li>Algorithms</li>
            <li>Parallel Programming</li>
            <li>Operating Systems</li>
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

      <Experience/>
      
      <div className="Skills">
        <h1>Skills</h1>
        <div className="left">
          <h4>Languages</h4>
          <ul>
              <li>Java</li>
              <li>C</li>
              <li>C++</li>
              <li>Javascript</li>
              <li>Python</li>
              <li>R</li>
              <li>HTML/CSS</li>
              <li>React</li>
            </ul>
            <h4>Concepts</h4>
            <ul>
              <li>Data Structures </li>
              <li>Algorithms</li>
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
              <li>Linux</li>
              <li>Tensorflow</li>
              <li>Neural Networks</li>
            </ul>
            
          </div>
      </div>





      <div className="Projects">
        <h1>Projects</h1>
        <div className="Project_slider">
          <Carousel interval={null}>
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
              repo="Final_Report.pdf"/>
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
        I have played soccer my whole life. 
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
