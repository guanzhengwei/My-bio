import React from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery";
import App from './App';
import './style.css';

$('body').append('<div id="root"></div>');

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

