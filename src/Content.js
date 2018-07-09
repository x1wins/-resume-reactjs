import React, {Component} from 'react';
import About from './content/About';
import Experiance from './content/Experiance';
import Education from "./content/Education";
import Skills from "./content/Skills";
import Interests from "./content/Interests";
import Awards from "./content/Awards";

class Content extends Component {
    render() {
        return (
            <div className="container-fluid p-0">
                <About/>
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
