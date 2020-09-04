import React from 'react';

class Education extends React.Component {

    render(){
        return <div className="Education">
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

    }
}

export default Education;