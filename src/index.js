import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/startbootstrap-resume/vendor/bootstrap/css/bootstrap.min.css';
import '../node_modules/startbootstrap-resume/vendor/font-awesome/css/font-awesome.min.css';
import '../node_modules/startbootstrap-resume/vendor/devicons/css/devicons.min.css';
import '../node_modules/startbootstrap-resume/vendor/simple-line-icons/css/simple-line-icons.css';
import '../node_modules/startbootstrap-resume/css/resume.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import '../node_modules/startbootstrap-resume/vendor/jquery/jquery.min.js';
import '../node_modules/startbootstrap-resume/vendor/bootstrap/js/bootstrap.bundle.min.js';
import '../node_modules/startbootstrap-resume/vendor/jquery-easing/jquery.easing.min.js';
import '../node_modules/startbootstrap-resume/js/resume.min.js';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Content />, document.getElementById('content'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
registerServiceWorker();
