import React from 'react'
// npm i react-bootstrap
import { Navbar, Container } from 'react-bootstrap'
import Logo from '../images/LogoNoBG.png'
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
            <img
                alt="brand logo"
                src={Logo}
                height="96"
                className="d-inline-block logo"
            />{' '}
            <div className="spacerdiv">

            </div>
    
        </div>
    )
}

export default Header
