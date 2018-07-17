import React, {Component} from 'react';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            about: this.props.about
        };
    }

    render() {
        return (
            <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
                <div className="my-auto">
                    <h1 className="mb-0">
                        <span className="text-primary">{this.state.about.name}</span>
                    </h1>
                    <div className="subheading mb-5">{this.state.about.address}
                        <a href="mailto:name@email.com">{this.state.about.email}</a>
                    </div>
                    <p className="mb-5">{this.state.about.content}</p>
                    <ul className="list-inline list-social-icons mb-0">
                        <li className="list-inline-item">
                            <a href="#">
                                <span className="fa-stack fa-lg">
                                  <i className="fa fa-circle fa-stack-2x"></i>
                                  <i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
                                </span>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#">
                                <span className="fa-stack fa-lg">
                                  <i className="fa fa-circle fa-stack-2x"></i>
                                  <i className="fa fa-twitter fa-stack-1x fa-inverse"></i>
                                </span>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#">
                                <span className="fa-stack fa-lg">
                                  <i className="fa fa-circle fa-stack-2x"></i>
                                  <i className="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                                </span>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#">
                                <span className="fa-stack fa-lg">
                                  <i className="fa fa-circle fa-stack-2x"></i>
                                  <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}

export default About;
