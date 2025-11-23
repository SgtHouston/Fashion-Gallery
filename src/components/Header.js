// npm i react-bootstrap
import { memo } from 'react'
import Logo from '../images/SLRCoutureTransparentLogoUpdate.png'
import '../componentcss/Header.css'
import OffCanvasNav from './OffCanvasNav'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// npm install @mui/icons-material


const Header = memo(() => {


    // Navbar header hides on scroll down, show on scroll up
    let prevScrollpos = window.pageYOffset;

    // Call function on scroll
    window.onscroll = function() {
        // Current scroll position is amount of pixels scrolled on y axis
        const currentScrollPos = window.pageYOffset;
        // console.log(window.pageYOffset);

        // if user is still at top of the page OR prev scroll position is greater than current one (if user scrolled up the page)
        if (window.pageYOffset < 90 || prevScrollpos > currentScrollPos) {
            // place header atop page
            document.getElementById("header").style.top= '0px';
        } else {
            // hide header
            document.getElementById("header").style.top = "-86px";
        }
        prevScrollpos = currentScrollPos;
    }

    return (
        <div className="header" id="header">
            {/* Navigation Pane On Every Page Via Header */}
            <OffCanvasNav />

            <a href="/" alt="">
                <img
                alt="brand logo"
                src={Logo}
                className="d-inline-block logo img-fluid"/>
            </a>

            <div className="button-div">
                <a className="order-link" href="/start-order" >
                    <ArrowForwardIcon className="order-link-arrow"/>
                    <button className="order-button ">
                        Start Your Order
                    </button>
                </a>
            </div>
    
        </div>
    )
})

export default Header
