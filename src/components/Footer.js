import React from 'react'
import '../componentcss/Footer.css'


function Footer() {
    return (
        <nav className="navbar navbar-dark text-center">
            <div className="col-12">
                <div className="footerlinks text-center ">
                    <div className="my-3">
                        <a className="footerlink" href="/" alt=''>HOME</a>
                    </div>
                    <div className="my-3">
                        <a className="footerlink" href="/about" alt=''>ABOUT</a>
                    </div>
                    <div className="my-3">
                        <a className="footerlink" href="/lookbook" alt=''>LOOKBOOK</a>
                    </div>
                    <div className="my-3">
                        <a className="footerlink" title="E-Mail Us @ SLR Couture!" href="mailto: SLRCouture@gmail.com">CONTACT US</a>
                    </div>
                </div>
            </div>
            <h5 className="footer__text">&#169; 2022  SLR Couture.  All Rights Reserved </h5>
        </nav>
    )
}

export default Footer
