import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../componentcss/About.css'
import Designer from '../images/Designer.png'


function About() {
    return (
        <div className ="about">
            < Header />
            <div className='about__main'>
                
                <div className='about__left'>
                    <img className=' responsive img-fluid designer-img' src={Designer} alt=""></img>
                </div>
                <span className='about__right'>
                    Based in Atlanta, GA, SLR Couture is an International design house specializing in the creation of bespoke luxury bridal and formal wear. 
                    <br/>
                    <br/>
                    SLR Couture was established by Stacy Rogers in 2008, a native of Chicago, IL. Her mission and passion is to inspire effortless glamor by creating well-fitted, impeccably made clothing with thoughtful attention to detail. 
                    <br/>
                    <br/>
                    An SLR Couture garment quintessentially expresses and enhances a woman's individual beauty.  Every intricate detail is executed with precision and passion. A perfect balance of sexy, classic and chic, an SLR Couture gown is for the woman who isn't afraid to turn heads. 
                    <br/>
                    <br/>
                    To Stacy, individuality is at the heart of fashion; no two women should look alike, because no two women are alike. Perhaps this attention to individualism explains why the working woman, chic fashionista, and party girl are among the many loyal SLR Couture enthusiasts. 
                    <br/>
                    <br/>
                    SLR Couture designs capture the energy of New York and the romance of Paris.  Balancing romantic, modern designs with an edgy flair, SLR Couture's Collection is glamorous and feminine. 
                    <br/>
                    <br/>
                    "We at SLR Couture are truly experts of our craft.  Our brides and clients choose us because they see our passion within our work, our luxury high quality materials and our attention to detail." 
                    <br/>
                    <br/>
                    That is what makes this designer a go-to on the couture scene. SLR Couture has acquired a large following all around the globe. With all of her talent, Stacy is continuously climbing to reach her goal of becoming a high profile figure in the fashion world.     
                </span>
            </div>
            
            < Footer/>
        </div>
    )
}

export default About
