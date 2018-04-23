import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Project extends Component {
    render() {
        const projects = this.props.projects;
        return (
            <div className="project">
                <h2>Projects</h2>
                <ol className="list-projects">
                    {projects.project.map((project, index) => (
                        <li key={index} className="project-list">
                            <div className="project-title">
                                <a target="_blank" href={project.url}>{project.title}</a>
                                <a target="_blank" href={project.description_url}>项目详情</a>
                            </div>
                            <div className="project-date">
                                {project.date}
                            </div>
                            <span className="project-description">{project.description}</span>
                        </li>
                    ))}
                </ol>
            </div>
        )
    }
}

export default Project;