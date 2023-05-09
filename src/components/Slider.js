import React from 'react'
import '../componentcss/Slider.css'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';


function Slider({Img1, Img2}) {
    
    return (
            <div className="Slider">
                <ReactCompareSlider
                    
                    itemOne={<ReactCompareSliderImage alt="one" src={Img1} />}
                    itemTwo={<ReactCompareSliderImage alt="two" src={Img2} />}
                    position={50}
                    // style={{
                    //     height: '100%',
                    //     width: '100%',
                        
                    // }}
                />
            </div>
        )
}

export default Slider




