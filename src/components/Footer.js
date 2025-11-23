import { memo } from 'react'
import '../componentcss/Footer.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
// import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EmailIcon from '@mui/icons-material/Email';
// import InstagramIcon from '@mui/icons-material/Instagram';

const TikTokIcon = () => {
    return (
        <svg className='tiktokicon footer-info' viewBox="0 0 50 50">
            <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z" />
        </svg>
    );
}


const Footer = memo(() => {

    return (
        
        <nav className="navbar navbar-dark text-center">
            <div className="col-12">
                <div className="footerlinks text-center ">
                    {/* Footer Links */}
                    <div className="my-3">
                        <a className="footerlink" href="/" aria-label="Navigate to Home page"> HOME </a>
                    </div>
                    <div className="my-3">
                        <a className="footerlink" href="/about" aria-label="Navigate to About page"> ABOUT </a>
                    </div>
                    <div className="my-3">
                        <a className="footerlink" href="/bridal" aria-label="Navigate to Bridal collection"> BRIDAL </a>
                    </div>
                    <div className="my-3">
                        <a className="footerlink" href="/prom" aria-label="Navigate to Prom collection"> PROM </a>
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
                <span > <LocationOnIcon/> Seattle, WA </span><br/>
                {/* <span > <PhoneIphoneIcon/> 678-653-3725 </span><br/> */}
                <span><a className="tiktokicon" title="Follow Us On TikTok!" href="https://www.tiktok.com/@slr.couture?_t=8qdODI2LS5D&_r=1" > <TikTokIcon /> @SLR.COUTURE </a></span> <br/>
                <span><a className="footer-info" title="E-Mail Us @ SLR Couture!" href="mailto: SLRCouture@gmail.com"> <EmailIcon/> SLRCouture@Gmail.com </a></span> <br/>
                <p> <AccessTimeIcon/> Mon-Fri: 9am - 5pm EST<br/>Sat-Sun: Closed </p>
                <p> All Inquiries Will Receive A Response Within 72 Business Hours. </p>
                <div className="footerlinks">
                    <p><a className="footer-info" href="/faqs">FAQ's</a></p>
                    <p><a className="footer-info" href="/terms">Privacy & Terms</a></p>
                </div>
                
            </div>
            
            <p className="footer-text">&#169; 2025  SLR Couture.  All Rights Reserved </p>
        </nav>
    )
})

export default Footer
