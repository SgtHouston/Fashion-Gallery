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
                    <img className='img-fluid designer-img' src={Designer} alt=""></img>
                </div>
                <span className='about__right'>
                    Born in Chicago, Illinois, Stacy Rogers exercised her creative mind and taught herself to sew from the young age of 10. 
                    <br/>
                    <br/>
                    She began creating gowns from home and since then became an expert in luxury womens fashion and bridal wear. 
                    Stacy understood the importance of individuality and established SLR Couture in 2015 as a Luxury American Bespoke brand. 
                    <br/>
                    <br/>
                    SLR Couture designs encapsulate class, sophistication and originality. All designs are focused on highlighting beauty and confidence with style.
                    <br/>
                    <br/>
                    Stacy believes "a woman should work with their qualities within, to edify her beauty without." 
                    
                </span>
            </div>
            
            < Footer/>
        </div>
    )
}

export default About
