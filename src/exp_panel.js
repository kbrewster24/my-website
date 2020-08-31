import React from 'react';
import './App.css';
import Carousel from 'react-bootstrap/Carousel';
import { CarouselItem } from 'react-bootstrap';


class ExpPanel extends React.Component {

    constructor(props){
        super(props);
        this.myContent = props.content;
    }

    createHeaders = () => {
        console.log('test');
        this.myContent.map(function(c){
            console.log("test");
            return <div>content{c}</div>
        })
    }

    render() {
      return <div className= "exp_panel">
        <h3>{this.props.header}</h3>
        <div className="exp_sub_panel">
          <Carousel hasArrows hasBullets>
            <CarouselItem>
              <div className="content">{this.props.introduction}</div>
            </CarouselItem>
            {
              this.myContent.map(function(content){
                return <CarouselItem><div className="content">{content}</div></CarouselItem>
              })
            }
          </Carousel>
        </div>
        
        
        
        

      </div>;
    }
  }

  export default ExpPanel;