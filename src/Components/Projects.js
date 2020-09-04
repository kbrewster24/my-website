import React from 'react';
import './Projects.scss';
import Panel from './Panel';
import Carousel from 'react-bootstrap/Carousel';


class Projects extends React.Component {

    render(){
        return <div className="Projects">
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
      </div>

    }
}

export default Projects;