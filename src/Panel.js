import React from 'react';
import './App.css';


class Panel extends React.Component {
    activateLasers = (e) => {
      e.preventDefault();
      e.stopPropagation();
      console.log('The link was clicked.');
    }
    render() {
      return <div className= "panel">
        <h3>{this.props.header}</h3>
        {this.props.content}
        
        The repository for the web app <a className="link" draggable="false" onDragStart={this.activateLasers} href={this.props.repo}>here</a>
      </div>;
    }
  }

  export default Panel;