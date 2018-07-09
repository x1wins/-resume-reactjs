import React, {Component} from 'react';
import About from './content/About';
import Experiance from './content/Experiance';

class Content extends Component {
    render() {
        return (
            <div className="container-fluid p-0">
                <About/>
                <Experiance/>
            </div>
        );
    }
}

export default Content;
