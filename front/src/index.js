import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Profile from './components/profile/profile';
import {BrowserRouter as Router} from 'react-router-dom'
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3030/';
axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        <App/>
    </Router>
  </React.StrictMode>
);