import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Issues from './Issues';
import SingleIssue from './SingleIssue';
import Header from './Header';
import logo from './sad-dog1.jpg'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        <Routes>
            <Route path='/' element={<App />}>
                <Route path='issues-messages' element={<Issues />}>
                    <Route path='?:issueID' element={<SingleIssue />} />
                </Route>
            </Route>
            <Route path='*' element={
                <div className='ooops'>
                    <h1 className='empty-page-msg'>Ooops! There is nothing in here...😒</h1>
                    <Link to="/issues-messages" ><button className='ooops-btn'>Go Back</button></Link>
                    <div className='ooops-img'>
                        <img src={logo} alt="sad-dog" />
                    </div>
                </div>
            } />
        </Routes>
    </Router>
  </React.StrictMode>
);
