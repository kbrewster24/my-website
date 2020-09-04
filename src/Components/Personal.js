import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

class Personal extends React.Component {

    render(){
        return <div className="Personal">
        <h1>Personal</h1>
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
        <h3>Hiking</h3>
        <h3>Video Games</h3>
        <Carousel interval={100000} className="images">
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

    }
}

export default Personal;