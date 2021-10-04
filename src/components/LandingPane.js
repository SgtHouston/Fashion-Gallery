import React from 'react'
import '../componentcss/LandingPane.css'
// import Group from '../images/BG.jpeg'
import backgroundVid from '../video/DressVid.mp4'
import dress from '../images/Dress.jpeg'





function LandingPane() {


    return (
        <div className="landingpane">
            <video className='videoTag' autoPlay loop muted>
                <source className='video' src={backgroundVid} type='video/mp4' />
            </video>
            <div className="dressdisplay">
                <div className="landing__img">
                    <img className='img-fluid' src={dress} alt=""></img>
                </div>
                <div className="landing__img">
                    <img className='img-fluid' src={dress} alt=""></img>
                </div>
                <div className="landing__img">
                    <img className='img-fluid' src={dress} alt=""></img>
                </div>
                
            </div>
        </div>
    )
}

export default LandingPane
