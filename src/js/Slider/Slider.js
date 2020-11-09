import { transitions } from 'material-ui/styles';
import React, { useState } from 'react';

import '../../css/Slider/Slider.css';
import SliderContent from './SliderContent';

function Slider ({images}) {
    const getWidth = () => window.innerWidth;
    
    const[state, setState] = useState({
        translate: 0, 
        transition: 0.45
    })

    const {translate, transition} = state;

    return(
        <div className="slider">
            <SliderContent translate={translate} transition={transition} width={getWidth()}>
            </SliderContent>
        </div>
    )
}

export default Slider;