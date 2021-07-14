
import React, { Component } from 'react'

import Banner from "../../images/Vegs.png"
import "./VideoTile.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlayCircle} from "@fortawesome/free-solid-svg-icons"

class VideoTile extends Component {
    render() {
        return (
            <div className="videoTileContainer" style={{background : `linear-gradient(rgba(0, 0, 0, .3), rgba(0, 0, 0, .3)) , url(${Banner})`,backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
                <div className="videoTileInfoWrapper">
                    <p className="videoTileName">Every<span className="underlineTxtWhite">day Fres</span>h &amp; clean</p>
                    <FontAwesomeIcon color="orange" size="7x"  icon={faPlayCircle}/>
                </div>
            </div>
        )
    }
}

export default VideoTile
