import React from 'react'
import '../componentcss/LandingPane.css'
import backgroundVid from '../video/Mikayla-Edited.mov'
import CustomerWorn1 from '../images/IMG_6976.png'
import CustomerWorn2 from '../images/IMG_6993.png'
import CustomerWorn3 from '../images/IMG_6994.png'






function LandingPane() {


    return (
        <div className="landingpane">
            <video className='videoTag' autoPlay loop muted>
                <source className='video' src={backgroundVid} type='video/mp4' />
            </video>
            <br/>
            <div className="dressdisplay">
                <div className="landing__img">
                    <img className='img-fluid' src={CustomerWorn1} alt="Customer Worn Dress 1"></img>
                </div>
                <div className="landing__img">
                    <img className='img-fluid' src={CustomerWorn2} alt="Customer Worn Dress 2"></img>
                </div>
                <div className="landing__img">
                    <img className='img-fluid' src={CustomerWorn3} alt="Customer Worn Dress 3"></img>
                </div>
                
                
            </div>
        </div>
    )
}

export default LandingPane
