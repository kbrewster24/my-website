import React from 'react';
import './App.scss';
import ExpPanel from './exp_panel'


class Experience extends React.Component {
    constructor(props){
        super(props)
        this.liberty_content = ["My largest contributions were to write a piece of code that would read errors from our software interpret the error codes and provide the users with neat instructions as to the most common reasons why the error occured and how to fix the error. This saved the developers using our software a lot of time as they would normally have to reach out to our team to try and remediate the error.",
        "My other larger contribution was to help my team rewrite a large portion of their testing. The tests they had were using a dated system and messy code. As a result half of the tests would barely run and they had little information as to whether their portion of the app was functioning correctly. In addition there was not a consistent way of knowing if their changes were going to break something. So I worked closely with another developer to look into cucumber and selenium. We worked to simplify the codebase so the code was reusable, easy to understand and would actually tell the developers useful information."];

        this.jacobs_content = ["My Largest contribution was to update part of an application called the currency checker. The currency checker would look at a large dataset being hooked into an aircraft to check if there were any unauthorized changes in the dataset. The old method was just doing a check on the date modified attribute of the files which wasn't very secure because there are ways to get around this. So what I did was have the system do a hash of all the files and their contents to check if anything had actually changed. The task to do this was run asynchronously in the background so that the app could still be used as it was running the checks."]

    }
    
    render() {
      return <div className = "experience">
        <ExpPanel header="Liberty Mutual" introduction="Interned for liberty Mutual summer 
        and winter of 2018 as well as the summer of 2019. 
        During my time there I fully integrated with two seperate teams. I learned to work import in
        an agile environment. I worked on small bug and feature requests that I could handle on
        my own as well as pairing with other developers for larger changes." 
        content={this.liberty_content} />
        
        <ExpPanel header="Jacobs Technology" introduction="I interned with Jacobs technology the summer and winter break of 2017. I was fully 
        integrated with a small team of about 3 developers. I worked on small bug fixes and 
        feature requests as well as pairing with one other developer for larger tasks." 
        content={this.jacobs_content}/>
      </div>;
    }
  }

  export default Experience;