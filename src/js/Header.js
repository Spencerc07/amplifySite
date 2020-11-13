import React from 'react';
import '../css/Header.css';
import {Link} from 'react-router-dom';

function Header() {
    return(
        <div className="headerContainer">
            <div >
                <Link to="/" style={{color: "whitesmoke", fontSize: "36px", textDecoration: "none"}}>SJC</Link>
            </div>

            <div className="navLinks">
                <div className="navItem">
                    <Link to="/about" className="headerElement">About</Link>
                </div>
                <div className="navItem">
                    <Link to="/stuff" className="headerElement">Gallery</Link>
                </div>
                <div className="navItem">
                <Link to="/art" className="headerElement">Art</Link>
                </div>
                <div className="navItem">
                    <a className="headerElement" href="https://github.com/Spencerc07"  target="_blank">Github</a>
                </div>
            </div>

        </div>
    )
}

export default Header;