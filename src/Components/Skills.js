import React from 'react';


class Skills extends React.Component {

    render(){
        return <div className="Skills">
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

    }
}

export default Skills;