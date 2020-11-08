import React from 'react';
import Header from './Header.js';
import Content from './Content.js';
import {Link, Route, BrowserRouter as Router,  Switch} from 'react-router-dom';

function MainContainer() {
    return(
        <div className="show-container">
            <Router>
                <Header/>
                <Content/>
            </Router>
        </div>
    )
}

export default MainContainer;