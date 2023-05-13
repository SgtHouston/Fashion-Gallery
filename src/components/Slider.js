import React from 'react'
import '../componentcss/Slider.css'
// npm i react-compare-slider
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';


function Slider({ImgPair}) {
    
    return (
            <div className="Slider">
                <ReactCompareSlider
                    
                    itemOne={<ReactCompareSliderImage alt="one" src={ImgPair.Img1} />}
                    itemTwo={<ReactCompareSliderImage alt="two" src={ImgPair.Img2} />}
                    position={50}
                    style={{
                        height: '100%',
                        width: '100%',
                        border:'3px solid #838587'
                    }}
                />
            </div>
        )
}

export default Slider




