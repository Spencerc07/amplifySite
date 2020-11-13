import React from 'react';

import '../../css/pages/About.css';
import me from '../../resources/me.jpg';

function About () {
    return(
        <div className = "aboutContainer">
            <div className="aboutContents">
                <div className="aboutPic">
                    <img src = {me} width="400px" style={{borderRadius: "50px"}}></img>
                </div>

                <div className = "aboutText">
                    <p>24 year old software developer</p>
                    <p>I'm interested in aesthetics and systems</p>
                </div>
            </div>
        </div>
    )
}

export default About;