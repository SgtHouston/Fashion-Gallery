import React from 'react'
import '../componentcss/Footer.css'
import Logo from '../images/LogoNoBG.png'

function Footer() {
    return (
        <nav className="navbar navbar-dark text-center">
            <div className="col-12">
                <div className="footerlinks text-center d-flex">
                    <div className="my-3">
                        <a className="footerlink" href="/" alt=''>Home</a>
                    </div>
                    <div className="my-3">
                        <a className="footerlink" href="/about" alt=''>About</a>
                    </div>
                    <div className="my-3">
                        <a className="footerlink" href="/gallery" alt=''>Gallery</a>
                    </div>
                    <div className="my-3">
                        <a className="footerlink" title="E-Mail Us @ SLR Couture!" href="mailto: SLRCouture@gmail.com">Contact Us</a>
                    </div>
                </div>
            </div>
            <a href="/"><img src={Logo} width="256" alt="" /></a>
            <h5 className="footer__text">&#169; 2021  SLR Couture.  All Rights Reserved </h5>
        </nav>
    )
}

export default Footer
