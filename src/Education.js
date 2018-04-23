import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Education extends Component {
    render() {
        const education = this.props.education;
        return (
            <div className="education">
                <h2>Education</h2>
                <ol className="schools">
                    {education.schools.map((school, index) => (
                        <li key={index} className="list-school">
                            <div className="school-name">
                                <a target="_blank" href={school.url}>
                                    {school.name}--{school.degree}
                                </a>
                            </div>
                            <div className="school-date">
                                <span>{school.date}</span>
                                <span>{school.location}</span>
                            </div>
                            <span className="major">Major: {school.major}</span>
                        </li>
                    ))}
                </ol>
                <h3>Online Classes</h3>
                <ol className="onlineCourses">
                    {education.onlineCourses.map((onlineCourse, index) => (
                        <li key={index} className="list-onlineCourse">
                            <div className="onlineCourse-title">
                                <a target="_blank" href={onlineCourse.url}>{onlineCourse.title} - {onlineCourse.school}</a>
                                <a target="_blank" href={onlineCourse.certificateUrl}>证书</a>
                            </div>
                            <span className="onlineCourse-date">{onlineCourse.date}</span>
                        </li>
                        
                    ))}
                </ol>
            </div>
        )
    }
}

export default Education;