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
            home: {
                about: this.props.home.about
            }
        };
    }

    render() {
        return (
            <div className="container-fluid p-0">
                <About about={this.state.about}/>
                <Experiance/>
                <Education/>
                <Skills/>
                <Interests/>
                <Awards/>
            </div>
        );
    }
}

export default Content;
