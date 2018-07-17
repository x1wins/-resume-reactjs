import React, {Component} from 'react';

class Interests extends Component {
    constructor(props) {
        super(props);
        this.state = {
            interest: this.props.interest
        };
    }

    render() {
        return (
            <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="interests">
                <div className="my-auto">
                    <h2 className="mb-5">Interests</h2>
                    <p className="mb-0">{this.state.interest.content}</p>
                </div>
            </section>
        );
    }
}

export default Interests;
