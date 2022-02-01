import React from 'react'
// npm i react-bootstrap

import Logo from '../images/LogoNoBG3.png'
import '../componentcss/Header.css'
import OffCanvasNav from './OffCanvasNav'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// npm install @mui/icons-material


function Header() {

    return (
        <div className="header">
            {/* Navigation Pane On Every Page Via Header */}
            <OffCanvasNav />

            <a href="/" alt="">
                <img
                alt="brand logo"
                src={Logo}
                className="d-inline-block logo img-fluid"/>
            </a>

            <div className="button-div">
                <a className="order-link" href="/contact" >
                    <ArrowForwardIcon className="order-link-arrow"/>
                    <button className="order-button ">
                        Start Your Order
                    </button>
                </a>
            </div>
    
        </div>
    )
}

export default Header
