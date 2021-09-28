import React from 'react'
// npm i react-bootstrap
import { Navbar, Container, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../images/LogoNoBG.png'
import '../componentcss/Header.css'
// npm install @mui/icons-material
// import Email from '@mui/icons-material/EmailOutlined';
// import Burst from '@mui/icons-material/BurstModeOutlined';
// import Home from '@mui/icons-material/HomeOutlined';
// import Help from '@mui/icons-material/HelpOutlineOutlined';

function Header() {
    return (

            <Navbar className="d-flex header" bg="light" variant="light">
                <Container className="d-flex">
                    <Navbar.Brand className="header__brand d-flex" href="#home">
                        <img
                            alt="brand logo"
                            src={Logo}
                            height="80"
                            className="d-inline-block align-top"
                        />{' '}
                        
                    </Navbar.Brand>
                    <Nav className="d-flex header__links">
                        <Link className="header__link" href="#about">About Us  </Link>
                        <Link className="header__link" href="#gallery">Gallery  </Link>
                        <Link className="header__link" href="#contact">Contact Us  </Link>
                    </Nav>
                </Container>
            </Navbar>

    )
}

export default Header
