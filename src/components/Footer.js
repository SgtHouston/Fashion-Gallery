import React from 'react'
import '../componentcss/Footer.css'
import Logo from '../images/LogoNoBG.png'

function Footer() {
    return (
        <nav className="navbar navbar-dark text-center">
            <h5 className="footer__text"> Copyright &#169; 2021  SLR Couture.  All Rights Reserved </h5>
            <a href="/"><img src={Logo} width="128" alt="" /></a>
        </nav>
    )
}

export default Footer
