import React from 'react';



function Slide ({content}) {
    
    
    
    return(
        <div style={{height: "100%", width: "100%", backgroundImage: {content},
        backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}>

        </div>
    )


}

export default Slide;