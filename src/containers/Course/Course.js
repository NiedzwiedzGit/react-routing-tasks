import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../Courses/Courses.css';

class Course extends Component {

    state = {
        loadedPostTitle: null
    }

    render() {
        let a = null;
        if (this.props.match.params.id) {
            a = <div>
                <h1>{this.props.match.params.title}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>;
        } else {
            a = <div>
                <h1>{this.props.title}</h1>
                {/* <p>You selected the Course with ID: {this.props.id}</p> */}
            </div>;
        }

        return (
            <div
                className="Course"
                onClick={this.props.clicked}>
                {a}
            </div>

        );
    }
}

export default withRouter(Course);