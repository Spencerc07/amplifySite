import React from 'react';
import iod from '../../resources/iod.jpg';
import ns from '../../resources/ns.jpg';
import fc from '../../resources/fc.png';
import tosa from '../../resources/tosa.jpg';
import greco from '../../resources/greco.jpg';
import dwarf from '../../resources/dwarf.jpg';
import '../../css/pages/Collection.css';

function Stuff () {
    return (
        <div className = "collectionContainer">
            <div className = "collectionTitle">
                    Things I Like
            </div>
            
            <div className="mediaContents">
                <div className = "mediaContainer">
                    <div className = "mediaElement">
                        <h3 style={{marginTop: "20px"}}>Painting</h3>
                        <div className = "elementTitle">Isle of the Dead</div>
                        <div className = "elementCredit">Arnold Bocklin</div>
                        <img src = {iod} width="400px"></img>
                    </div>

                    <div className = "mediaElement">
                        <div className = "elementTitle">Fisherman's Cottage</div>
                        <div className = "elementCredit">Harold Sohlberg</div>
                        <img src = {fc} height="213px"></img>
                    </div>

                    <div className = "mediaElement">
                        <div className = "elementTitle">Temptation of St. Anthony</div>
                        <div className = "elementCredit">Salvador Dali</div>
                        <img src = {tosa} height="213px"></img>
                    </div>
                </div>

                <div className = "mediaContainer">
                    <div className = "mediaElement">
                        <h3 style={{marginTop: "20px"}}>Writing</h3>
                        <div className = "elementTitle">Naive. Super</div>
                        <div className = "elementCredit">Erlend Loe</div>
                        <img src={ns} height="213px"></img>
                    </div>

                    <div className = "mediaElement">
                        <div className = "elementTitle">The Dwarf</div>
                        <div className = "elementCredit">Per Lagerkvist</div>
                        <img src={dwarf} height="213px"></img>
                    </div>

                    <div className = "mediaElement">
                        <div className = "elementTitle">Report to Greco</div>
                        <div className = "elementCredit">Nikos Kazantzakes</div>
                        <img src={greco} height="213px"></img>
                    </div>
                </div>

                <div className = "mediaContainer">
                <div className = "mediaElement">
                        <h3 style={{marginTop: "20px"}}>Music</h3>
                        <div className = "elementTitle">I Had It All</div>
                        <div className = "elementCredit">dj poolboi</div>
                        <iframe src = "https://www.youtube.com/embed/bTxfcINRwXU" width="400px" height="213px"></iframe>
                    </div>

                    <div className = "mediaElement">
                        <div className = "elementTitle">Tommy's Party</div>
                        <div className = "elementCredit">Peach Pit</div>
                        <iframe src = "https://www.youtube.com/embed/iMUbmiXlHww" width="400px" height="213px"></iframe>
                    </div>

                    <div className = "mediaElement">
                        <div className = "elementTitle">Friend</div>
                        <div className = "elementCredit">Blackmill</div>
                        <iframe src = "https://www.youtube.com/embed/0zG_lckuzbo" width="400px" height="213px"></iframe>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Stuff;