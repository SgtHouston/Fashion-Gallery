import React from 'react'
import '../componentcss/Sliders.css'
import PicDB from "../db/picDB";
import Footer from '../components/Footer'
import Header from '../components/Header'
import Slider from '../components/Slider'
import Pic1 from '../images/SilverPose.png'
import Pic2 from '../images/PinkPose.png'

function Sliders() {
    return (
        <div className="Sliders">
            < Header />
                <div className="Sliders-inner">
                    <Slider Img1={Pic1} Img2={Pic2}/>
                    <Slider Img1={Pic1} Img2={Pic2}/>

                </div>
            < Footer />
        </div>
    )
}

export default Sliders