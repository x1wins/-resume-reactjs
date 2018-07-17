import React, {Component} from 'react';
import About from './content/About';
import Experiance from './content/Experiance';
import Education from "./content/Education";
import Skills from "./content/Skills";
import Interests from "./content/Interests";
import Awards from "./content/Awards";

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            home: props.home
        };
    }

    render() {
        return (
            <div className="container-fluid p-0">
                <About about={this.state.home.about}/>
                <Experiance experiences={this.state.home.experiences}/>
                <Education educations={this.state.home.educations}/>
                <Skills skills={this.state.home.skills}/>
                <Interests interest={this.state.home.ineterest}/>
                <Awards awards={this.state.home.awards}/>
            </div>
        );
    }
}

export default Content;
