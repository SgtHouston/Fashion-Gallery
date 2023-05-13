import React from 'react'
import '../componentcss/Sliders.css'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Slider from '../components/Slider'
import SliderDB from '../db/SliderDB'

function Sliders() {
    return (
        <div className="sliders">
            < Header />
                <div className="sliders-body">
                    <h2 className='sliders-title'> Sliders </h2>
                    <br />
                    <p className="sliders-header">FROM CONCEPT . . . TO CREATION</p>
                    <div className="sliders-inner">
                        {/* Map SliderDB onto page */}
                        {SliderDB.map((ImgPair, index) => {
                                return (
                                    <Slider className={`slider slider${index + 1}`} key={index + 1} ImgPair={ImgPair} />
                                );
                            })}
                    </div>
                </div>
            < Footer />
        </div>
    )
}

export default Sliders