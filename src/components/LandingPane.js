import React from 'react'
import '../componentcss/LandingPane.css'
import backgroundVid from '../video/Mikayla480.mov'
import CustomerWorn1 from '../images/IMG_6976.png'
import CustomerWorn2 from '../images/IMG_6993.png'
import CustomerWorn3 from '../images/IMG_6994.png'
import CustomerWorn5 from '../images/IMG_6979.png'
import CustomerWorn6 from '../images/SilverProm2.png'
import CustomerWorn7 from '../images/IMG-9180.png'
import CustomerWorn8 from '../images/Pageant copy.jpeg'
import CustomerWorn9 from '../images/Couple1.png'
import CustomerWorn10 from '../images/Couple2.png'
import CustomerWorn11 from '../images/PurpleBlueDress.png'
import CustomerWorn12 from '../images/IMG_9619.png'
import CustomerWorn13 from '../images/PinkPose.png'
import CustomerWorn14 from '../images/PinkFlower.png'
import CustomerWorn15 from '../images/SilverPose.png'
import CustomerWorn16 from '../images/GoldFull.png'
import Twins from '../images/Twins.png'
// import { Player, LoadingSpinner, ControlBar  } from 'video-react';
import "video-react/dist/video-react.css";
import ImagePopupComponent from './ImagePopupComponent'







function LandingPane() {

    // const screenWidth = window.screen.width
    // console.log(screenWidth)

    // let videoheight = 580

    // if (screenWidth >= 1280 ) {
    //     videoheight = 580
    // } else if (screenWidth <= 1279 && screenWidth >= 1000  ) {
    //     videoheight = 465
    // } else if (screenWidth <= 999 && screenWidth >= 769) {
    //     videoheight = 370
    // } else if (screenWidth <= 768 && screenWidth >= 700) {
    //     videoheight = 350
    // } else if (screenWidth <= 699 && screenWidth >= 530) {
    //     videoheight = 245
    // } else if  (screenWidth < 529 && screenWidth >= 410) {
    //     videoheight = 190
    // } else if (screenWidth < 409 && screenWidth >= 375) {
    //     videoheight = 160
    // } else {
    //     videoheight = 170
    // }

    return (

        <div className="landingpane">
            {/* <Player className='videoTag' id='video1'  src={backgroundVid} muted autoPlay loop playsinline fluid={false} height={videoheight}  >
                <ControlBar disableCompletely={true} className="my-class" />
                <LoadingSpinner />
            </Player> */}

                    
            <video className='videoTag' id='video1'  muted autoPlay loop playsInline>
                <source src={backgroundVid} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
                
            

            <div className="text-center">
                <span className="text-center landing_text"> Exquisite Bespoke Designs </span>
            </div>

            <div className="dressdisplay">
                < ImagePopupComponent Img={CustomerWorn1} alt="Customer Worn Dress 1" />
                < ImagePopupComponent Img={CustomerWorn3} alt="Customer Worn Dress 3" />
                < ImagePopupComponent Img={CustomerWorn2} alt="Customer Worn Dress 2" />
            </div>

            <div className="text-center">
                <span className="text-center landing_text"> Look And Feel Your Best With SLR Couture </span>
            </div>

            <div className="dressdisplay">
                < ImagePopupComponent Img={CustomerWorn13} alt="Customer Worn Dress 13" />
                < ImagePopupComponent Img={CustomerWorn15} alt="Customer Worn Dress 15" />
            </div>

            <div className="text-center">
                <span className="text-center landing_text"> A Dress For The Occasion Of A Lifetime </span>
            </div>

            < ImagePopupComponent className='large-img' Img={Twins} alt="Customer Worn Dress 8" />
            
            <div className="text-center">
                <span className="text-center landing_text"> Custom Formalwear Fitted Just For You </span>
            </div>

            <div className="dressdisplay">
                < ImagePopupComponent Img={CustomerWorn5} alt="Customer Worn Dress 5" />
                < ImagePopupComponent Img={CustomerWorn6} alt="Customer Worn Dress 6" />
                < ImagePopupComponent Img={CustomerWorn7} alt="Customer Worn Dress 7" />
            </div>

            <div className="text-center">
                <span className="text-center landing_text"> Make Your Special Occasion One To Remember </span>
            </div>

            < ImagePopupComponent className='large-img' Img={CustomerWorn12} alt="Customer Worn Dress 12" />
            
            <div className="text-center">
                <span className="text-center landing_text"> Collaborate With Us To Create A Work Of Art </span>
            </div>

            <div className="dressdisplay">
                < ImagePopupComponent Img={CustomerWorn14} alt="Customer Worn Dress 14" />
                < ImagePopupComponent Img={CustomerWorn16} alt="Customer Worn Dress 16" />           
            </div>

            <div className="text-center">
                <span className="text-center landing_text"> Let's Bring Your Vision To Life </span>
            </div>

            < ImagePopupComponent className='large-img'Img={CustomerWorn8} alt="Customer Worn Dress 8" />
            
            <div className="text-center">
                <span className="text-center landing_text"> Become A Part Of The SLR Couture Family </span>
            </div>

            <div className="dressdisplay dressdisplay-last">
                < ImagePopupComponent Img={CustomerWorn9} alt="Customer Worn Dress 9" />          
                < ImagePopupComponent Img={CustomerWorn10} alt="Customer Worn Dress 10" />
                < ImagePopupComponent Img={CustomerWorn11} alt="Customer Worn Dress 11" />    
            </div>

        </div>
    )
}

export default LandingPane
