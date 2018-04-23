import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Work extends Component {
    render() {
        const work = this.props.work;
        return (
            <div className="work">
                <h2>Work Experience</h2>
                <ol className="list-work">
                    {work.jobs.map((job, index) => (
                        <li key={index} className="work-list">
                            <div className="work-title">
                                <a target="_blank" href={job.url}>
                                    {job.employer}-{job.title}
                                </a>
                            </div>
                            <div className="date-location">
                                <span>{job.date}</span>
                                <span>{job.location}</span>
                            </div>
                            <span className="description">{job.description}</span>
                        </li>
                    ))}
                </ol>
            </div>
        )
    }
}

export default Work;