import React from 'react'
import '../componentcss/LandingPane.css'
import Group from '../images/BG.jpeg'


function LandingPane() {
    return (
        <div className="landingpane">
            <h1 className="landing__header">Welcome To SLR Couture</h1>
            <img className="landing-img" src={Group} alt=''></img>
        </div>
    )
}

export default LandingPane
