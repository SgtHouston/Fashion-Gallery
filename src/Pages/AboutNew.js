import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../componentcss/AboutNew.css'
import Designer from '../images/Designer.png'

function AboutNew () {

    return (

        <div className = "aboutnew">
            <Header className='header'/>
                <div className='aboutnewtop'>
                    <div className='aboutnewlefttop'>

                    </div>
                    <div className='aboutnewrighttop'>
                        <div className='rttext'>Founder/Designer</div>
                    </div>
                </div>
                <div className='aboutnewbanner'>
                    <div className='bannertext'>
                        <span>LUXURY</span> 
                        <div className='circle'>&#9679;</div> 
                        <span>ICONIC</span> 
                        <div className='circle'>&#9679;</div> 
                        <span>HAUTE</span> 
                        <div className='circle'>&#9679;</div> 
                        <span>COUTURE</span> 
                        <div className='circle'>&#9679;</div> 
                        <span>EXCLUSIVE</span> 
                    </div>
                </div>
                <div className='aboutnewbottom'>
                    <div className='aboutnewbl'>
                        <div className='aboutnewblhtext'>
                            <p className='toptext'>Let's <span className='create'>Create</span> A One-Of-A-Kind Piece Tailored To <span className='create'>Perfection</span>! </p>
                            <div className='box'>
                                <p className='boxtext'> "At SLR Couture, investing in a custom bespoke garment is all about YOU! <br/> We offer the perfect fit, allowing you to stand out with a flawless piece crafted from high-quality fabric that captures your unique style."</p>
                                <a className='orderlink' href='/start-order'><div className='startorder'> REQUEST A QUOTE </div></a>
                            </div>
                            <p className='bottomtext'>
                                Our mission is to consistently provide exceptional experiences that leave a 
                                lasting impression, through top-tier service and high-quality craftsmanship.
                                Choosing an SLR Couture gown is more than a fashion choice-- its a bold statement of confidence, 
                                creativity, and a celebration of your individuality.  <br/><br/> I understand the frustration of wearing clothes
                                that don't fit well or reflect your personality because I've been there too.  
                                That's why I'm committed to helping you express your unique style through custom designs
                                tailored just for you.
                            </p>
                        </div>
                        
                        
                    </div>
                    <div className='aboutnewbr'>
                        <img className='designer-img responsive' src={Designer} alt="Stacy Rogers, SLR Couture founder and designer"></img>
                        <p className='imglabel'>STACY R.</p>
                    </div>
                </div>
            <Footer />
        </div>



    )
}

export default AboutNew