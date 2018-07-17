import React, {Component} from 'react';

class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skills: this.props.skills
        };
    }

    render() {
        return (
            <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
                <div className="my-auto">
                    <h2 className="mb-5">Skills</h2>

                    <div className="subheading mb-3">Programming Languages &amp; Tools</div>
                    <div className="subheading mb-3">Workflow</div>
                    <ul className="fa-ul mb-0">
                        {this.state.skills.map((skill) =>
                        <li>
                            <i className="fa-li fa fa-check"></i>
                            {skill.name}
                        </li>
                        )}
                    </ul>
                </div>
            </section>
        );
    }
}

export default Skills;
