import React, {Component} from 'react';

class Education extends Component {
    constructor(props) {
        super(props);
        this.state = {
            educations: this.props.educations
        };
    }

    render() {
        return (
            <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
                <div className="my-auto">
                    <h2 className="mb-5">Education</h2>
                    { this.state.educations.map((education) =>
                        <div className="resume-item d-flex flex-column flex-md-row">
                            <div className="resume-content mr-auto">
                                <h3 className="mb-0">{education.school}</h3>
                                <div className="subheading mb-3">{education.degree}</div>
                                <div>{education.content}</div>
                            </div>
                            <div className="resume-date text-md-right">
                                <span className="text-primary">{education.period}</span>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        );
    }
}

export default Education;
