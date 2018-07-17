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
            error: null,
            isLoaded: false,
            home: null
        };
    }

    componentDidMount() {
        const url = (process.env.NODE_ENV === 'development')
            ? "http://localhost:3000/homes/1.json"
            : 'https://<your-app>.herokuapp.com/homes/';

        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log('parsed json: ', result)
                    console.log('result.about.email: ', result.about.email)
                    this.setState({
                        isLoaded: true,
                        home: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {

        if (!this.state.isLoaded) {
            return <p>Loading ...</p>;
        }

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
