import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Bio from './Bio';
import Work from './Work';
import Project from './Project';
import Education from './Education';
import MyMap from './MyMap'
import model from './model'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Bio bio={model.bio} />
                <Work work={model.work} />
                <Project projects={model.projects} />
                <Education education={model.education} />
                <MyMap />
                <div className="footer">
                    <a href="mailto:guanzhengwei520@gmail.com">
                        Let's Connect
                    </a>
                </div>
            </div>
            
        )
    }
}

export default App;