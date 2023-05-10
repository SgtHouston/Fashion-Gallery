import React from 'react'
import '../componentcss/Footer.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
// import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';


function Footer() {

    return (
        
        <nav className="navbar navbar-dark text-center">
            <div className="col-12">
                <div className="footerlinks text-center ">
                    {/* Footer Links */}
                    <div className="my-3">
                        <a className="footerlink" href="/" alt=''> HOME </a>
                    </div>
                    <div className="my-3">
                        <a className="footerlink" href="/about" alt=''> ABOUT </a>
                    </div>
                    <div className="my-3">
                        <a className="footerlink" href="/bridal" alt=''> BRIDAL </a>
                    </div>
                    <div className="my-3">
                        <a className="footerlink" href="/prom" alt=''> PROM </a>
                    </div> 
                    <div className="my-3">
                        <a className="footerlink" href="/clients"> GALLERY </a>
                    </div>
                    <div className="my-3">
                        <a className="footerlink" href="/consultations"> CONSULTATIONS </a>
                    </div>
                    <div className="my-3">
                        <a className="footerlink" href="/start-order"> START ORDER </a>
                    </div>
                </div>
            </div>
            <div className="footer-contact">
                {/* Contact Info */}
                <span > <LocationOnIcon/> Atlanta, GA </span><br/>
                {/* <span > <PhoneIphoneIcon/> 678-653-3725 </span><br/> */}
                <a className="footer-info" title="Follow Us On Instagram!" href="https://www.instagram.com/slrcouture/" ><span ><InstagramIcon/> @slrcouture </span></a><br/>
                <a className="footer-info" title="E-Mail Us @ SLR Couture!" href="mailto: SLRCouture@gmail.com"><span> <EmailIcon/> slrcouture@gmail.com </span></a>
                <p> <AccessTimeIcon/> Mon-Fri: 9am - 5pm EST<br/>Sat-Sun: Closed </p>
                <p> All inquiries will be responded to within 72 business hours. </p>
                <div className="footerlinks">
                    <p><a className="footer-info" href="/faqs">FAQ's</a></p>
                    <p><a className="footer-info" href="/terms">Privacy & Terms</a></p>
                </div>
                
            </div>
            
            <p className="footer__text">&#169; 2023  SLR Couture.  All Rights Reserved </p>
        </nav>
    )
}

export default Footer
