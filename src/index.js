import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/startbootstrap-resume/vendor/bootstrap/css/bootstrap.min.css';
import '../node_modules/startbootstrap-resume/vendor/font-awesome/css/font-awesome.min.css';
import '../node_modules/startbootstrap-resume/vendor/devicons/css/devicons.min.css';
import '../node_modules/startbootstrap-resume/vendor/simple-line-icons/css/simple-line-icons.css';
import '../node_modules/startbootstrap-resume/css/resume.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import registerServiceWorker from './registerServiceWorker';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            home: {
                about: null
            }
        };
    }

    render() {
        return (
            <div>
                <Header />
                <Content home={this.state.home} />
                <Footer />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
