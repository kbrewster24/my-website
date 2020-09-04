import React from 'react';
import './App.scss';

const RenderLinks = (props) => {
  const repo = props.repo;
  if(repo){
    return <div>The repository for the web app <a className="link" href={repo}>here</a></div>
  }
  else
    return <div></div>
}

const RenderPaper = (props) => {
  const paper = props.paper;
  console.log(paper)
  if(paper){
    return <div>Download the paper <a className="link" href={paper} download>here</a></div>
  }
  else
    return <div></div>
}

class Panel extends React.Component {
    
    render() {
      return <div className= "panel">
        <h3>{this.props.header}</h3>
        {this.props.content}
        <RenderLinks repo={this.props.repo}/>
        <RenderPaper paper={this.props.paper}/>
      </div>;
    }
  }

  export default Panel;