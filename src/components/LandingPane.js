import React from 'react'
import '../componentcss/LandingPane.css'
// import Group from '../images/BG.jpeg'
import backgroundVid from '../video/DressVid.mp4'
import Silver from '../images/Silvercopy.jpg'
import SilverClose from '../images/SilverClose.jpg'
import GoldClose from '../images/GoldClose.jpg'
import SpiderClose from '../images/SpiderBodiceClose.jpg'





function LandingPane() {


    return (
        <div className="landingpane">
            {/* <video className='videoTag' autoPlay loop muted>
                <source className='video' src={backgroundVid} type='video/mp4' />
            </video> */}
            <div className="main__img">
                <img className='img-fluid' src={Silver} alt=""></img>
            </div>
            <div className="dressdisplay">
                <div className="landing__img">
                    <img className='img-fluid' src={SilverClose} alt=""></img>
                </div>
                <div className="landing__img">
                    <img className='img-fluid' src={GoldClose} alt=""></img>
                </div>
                <div className="landing__img">
                    <img className='img-fluid' src={SpiderClose} alt=""></img>
                </div>
                
                
            </div>
        </div>
    )
}

export default LandingPane
