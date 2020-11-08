import React from 'react';
import About from './pages/About.js';
import Stuff from './pages/Stuff.js';
import Art from './pages/Art.js';
import Landing from './pages/Landing.js';
import {Link, Route, BrowserRouter as Router,  Switch} from 'react-router-dom';

function Content () {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Landing/>
                </Route>
                <Route path="/about">
                    <About/>
                </Route>                    
                <Route path="/stuff">
                    <Stuff/>
                </Route>                    
                <Route path="/art">
                    <Art/>
                </Route>
            </Switch>
        </div>
    )
}

export default Content;
