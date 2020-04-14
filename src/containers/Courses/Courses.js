import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Course from '../Course/Course';

import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ],
        currentUrl: null
    }
    postSelectedHandler = (id, title) => {
        this.props.history.push({ pathname: '/courses/' + id + title });
    }


    render() {

        let course = this.state.courses.map(course => {
            return (
                <Course
                    className="Course"
                    key={course.id}
                    // id={course.id}
                    title={course.title}
                    //match={this.props.match}
                    clicked={() => this.postSelectedHandler(course.id, course.title)}
                />
            );
        })
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        course
                    }
                </section>
                <Route path={this.props.match.url + '/:id' + ':title'} exact component={Course} />
            </div >
        );
    }
}

export default Courses;