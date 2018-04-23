import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import avatar from './avatar.jpg'

class Bio extends Component {
    render() {
        const bio = this.props.bio;
        return (
            <div className="bio">
                <h1>{bio.name}</h1>
                <span className="role">{bio.role}</span>
                <hr/>
                <ol className="contacts">
                    <li>
                        <span className="orange-text">email</span>
                        <a id='contact-email' target="_blank" href={`mailto:${bio.contacts.email}`} className="white-text">{bio.contacts.email}</a>
                    </li>
                    <li>
                        <span className="orange-text">weibo</span>
                        <a id='contact-weibo' target="_blank" href={bio.contacts.weiboUrl} className="white-text">{bio.contacts.weibo}</a>
                    </li>
                    <li>
                        <span className="orange-text">github</span>
                        <a id='contact-github' target="_blank" href={bio.contacts.githubUrl} className="white-text">{bio.contacts.github}</a>
                    </li>
                    <li>
                        <span className="orange-text">mobile</span>
                        <span className="white-text">{bio.contacts.mobile}</span>
                    </li>
                    <li>
                        <span className="orange-text">location</span>
                        <span className="white-text">{bio.contacts.location}</span>
                    </li>
                </ol>
                <div className="avatarAndSkills">
                    <div className="avatar">
                        <img src={avatar} alt="avatar"/>
                    </div>
                    <div className="skills">
                        <span className="welcome">{bio.welcomeMessage}</span>
                        <h3>Skills at a Glance:</h3>
                        <ol>
                            {bio.skills.map((skill, index) => (
                                <li className="skill" key={index}>{skill}</li>
                            ))}
                        </ol>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Bio;