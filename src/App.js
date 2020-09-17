import React from 'react';
import './App.scss';
import Experience from './Components/Experience';
import Skills from './Components/Skills';
import Education from './Components/Education';
import Projects from './Components/Projects';
import Personal from './Components/Personal';





function App() {
  return (
    <div className="App">
      
      <div className="Introduction">
        <br/>
       
        Hello, my name is kyle brewster and I am a developer looking for employment. 
        I am well versed in many technologies and consider myself a full stack
        developer. On the front end I am most experienced with react and focus on simple
        clean user freindly design. On the backend I am comfortable with a range of languages
        such as Java, Python and Javascript. I am developing my machine learning Skills
        using tensorflow. 
      </div>
      
      <Education/>
      <Experience/>
      <Skills/>
      <Projects/>
      <Personal/>
      
      <div className="contact">
        <h1>Contact</h1>
        Email: kbrewster24@outlook.com<br/>
        Phone: 603-726-1050<br/><br/>
      </div>
    </div>
  );
}

export default App;
