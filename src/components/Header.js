import React from 'react'
// npm i react-bootstrap

import Logo from '../images/LogoNoBG3.png'
import '../componentcss/Header.css'
import OffCanvasNav from './OffCanvasNav'
// npm install @mui/icons-material
// import Email from '@mui/icons-material/EmailOutlined';
// import Burst from '@mui/icons-material/BurstModeOutlined';
// import Home from '@mui/icons-material/HomeOutlined';
// import Help from '@mui/icons-material/HelpOutlineOutlined';

function Header() {
    return (
        <div className="header">

            <OffCanvasNav />
            <a href="/" alt=""><img
                alt="brand logo"
                src={Logo}
                className="d-inline-block logo img-fluid"
            /></a>
            <div className="spacerdiv">

            </div>
    
        </div>
    )
}

export default Header
