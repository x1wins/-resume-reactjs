import React, {Component} from 'react';

class Experiance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            experiences: this.props.experiences
        };
    }

    render() {
        return (
            <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
                <div className="my-auto">
                    <h2 className="mb-5">Experience</h2>

                    { this.state.experiences.map((experience) =>
                    <div className="resume-item d-flex flex-column flex-md-row mb-5">
                        <div className="resume-content mr-auto">
                            <h3 className="mb-0">{experience.job}</h3>
                            <div className="subheading mb-3">{experience.company}</div>
                            <p>{experience.content}</p>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="text-primary">{experience.period}</span>
                        </div>
                    </div>
                    )}

                </div>

            </section>
        );
    }
}

export default Experiance;
