import React, {Component} from 'react';

class Awards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            awards: this.props.awards
        };
    }

    render() {
        return (
            <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="awards">
                <div className="my-auto">
                    <h2 className="mb-5">Awards &amp; Certifications</h2>
                    <ul className="fa-ul mb-0">
                    {this.state.awards.map((award) =>
                        <li>
                            <i className="fa-li fa fa-trophy text-warning"></i>
                            {award.title}
                        </li>
                    )}
                    </ul>
                </div>
            </section>
        );
    }
}

export default Awards;
