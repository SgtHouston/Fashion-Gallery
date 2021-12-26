import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../componentcss/About.css'
import Stacy from '../images/Stacy.png'


function About() {
    return (
        <div className ="about">
            < Header />
            <br/>
            THE DESIGNER 
            <h1>Stacy Rogers</h1>
            <div className='about__main'>
                <div className='about__left'>
                    <img className='img-fluid' src={Stacy} alt=""></img>
                </div>
                <span className='about__right'>
                    Born in Chicago, Illinois, Stacy Rogers exercised her creative mind and taught herself to sew from the young age of 10. 
                    <br/>
                    <br/>
                    She began creating gowns from home and since then became an expert in luxury womens fashion and bridal wear. Stacy understood the importance of individuality and established SLR Couture in 2015 as a Luxury American Bespoke brand. 
                    <br/>
                    <br/>
                    SLR Couture designs encapsulate class, sophistication and originality. All designs are focused on highlighting beauty and confidence with style.
                    <br/>
                    <br/>
                    Stacy believes "a woman should work with their qualities within, to edify her beauty without." She has created SLR Couture to work with the female form, not to hide imperfections or flaws but to accentuate desired features.
                </span>
            </div>
            <div className="spacer"></div>

            
            < Footer/>
        </div>
    )
}

export default About
