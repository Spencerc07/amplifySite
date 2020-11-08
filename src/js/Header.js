import React from 'react';
import '../css/Header.css';
import {Link} from 'react-router-dom';

function Header() {
    return(
        <div className="headerContainer">

            <div style={{color: "whitesmoke", fontSize: "36px", position: "absolute"}}>
                SJC
            </div>

            <div className="navLinks">
                <div style={{width: "100px"}}>
                    <Link to="/about" className="headerElement">About</Link>
                </div>
                <div style={{width: "100px"}}>
                    <Link to="/stuff" className="headerElement">Gallery</Link>
                </div>
                <div style={{width: "100px"}}>
                <Link to="/art" className="headerElement">Art</Link>
                </div>
                <div style={{width: "100px"}}>
                    <a className="headerElement" href="https://github.com/Spencerc07"  target="_blank">Github</a>
                </div>
            </div>

        </div>
    )
}

export default Header;