import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/startbootstrap-resume/css/resume.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Content />, document.getElementById('content'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
registerServiceWorker();
