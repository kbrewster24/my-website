import React from 'react';
import './Experience.scss';
import Carousel from 'react-bootstrap/Carousel';
import { CarouselItem } from 'react-bootstrap';


class ExpPanel extends React.Component {

    constructor(props){
        super(props);
        this.myContent = props.content;
    }

    

    render() {
      return <div className= "exp_panel">
        <h3>{this.props.header}</h3>
        <div className="exp_sub_panel">
          <Carousel interval={1000000}>
            <CarouselItem>
              <div className="content">{this.props.introduction}</div>
            </CarouselItem>
            {
              this.myContent.map(function(content, index){
                return <CarouselItem key={index}><div className="content">{content}</div></CarouselItem>
              })
            }
          </Carousel>
        </div>
        
        
        
        

      </div>;
    }
  }

  export default ExpPanel;