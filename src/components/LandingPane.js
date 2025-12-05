import '../componentcss/LandingPane.css'
// import backgroundVid from '../video/Mikayla.mp4'
import backgroundVid2 from '../video/SLR Website Banner 4.mp4'
import CustomerWorn1 from '../images/IMG_6976.png'
import CustomerWorn2 from '../images/IMG_6993.png'
import CustomerWorn3 from '../images/IMG_6994.png'
import CustomerWorn5 from '../images/IMG_6979.png'
import CustomerWorn6 from '../images/SilverProm2.png'
import CustomerWorn7 from '../images/IMG-9180.png'
import CustomerWorn8 from '../images/Pageant copy.jpeg'
import CustomerWorn9 from '../images/PinkFlower.png'
import CustomerWorn10 from '../images/bluegarage.png'
// import CustomerWorn11 from '../images/PurpleBlueDress.png'
import CustomerWorn12 from '../images/IMG_9619.png'
import CustomerWorn13 from '../images/PinkPose.png'
import CustomerWorn14 from '../images/NewBlackDress1.png'
import CustomerWorn15 from '../images/SilverPose.png' 
import CustomerWorn16 from '../images/GoldFull.png'
import CustomerWorn17 from '../images/GreenStraight.jpg'
import CustomerWorn18 from '../images/bluetiffany_.png'
import CustomerWorn19 from '../images/bluebentley.jpg'
import CustomerWorn20 from '../images/NewPurpleDress3.png'
import Twins from '../images/Twins.png'
import ImagePopupComponent from './ImagePopupComponent'

// import wing from '../images/wing.png'



function LandingPane() {

    return (

        <div className="landingpane">
            <a className="text-center" href="/start-order"  >     
                <video className='videoTag' id='video1'  muted autoPlay loop playsInline >
                    <source src={backgroundVid2} type="video/mp4" />
                    Your browser does not support the video format.
                </video>
            </a>

            {/* <div className="text-center">
                    <span className="text-center landing_text"> Come Through In Custom </span>
            </div> */}

            <div className="dressdisplay top-display">
                < ImagePopupComponent Img={CustomerWorn19} alt="Customer Worn Dress 19" />
                < ImagePopupComponent Img={CustomerWorn14} alt="Customer Worn Dress 14" />
            </div>

            {/* <div className="text-center">
                <span className="text-center landing_text"> Exquisite Bespoke Designs </span>
            </div> */}
            <div className="dressdisplay-bottom">

                <div className="dressdisplay">
                    < ImagePopupComponent Img={CustomerWorn13} alt="Customer Worn Dress 13"  />
                    < ImagePopupComponent Img={CustomerWorn17} alt="Customer Worn Dress 17" />
                    < ImagePopupComponent Img={CustomerWorn15} alt="Customer Worn Dress 20" />
                    {/* < ImagePopupComponent Img={CustomerWorn20} alt="Customer Worn Dress 15" /> */}
                </div>
                

                {/* <div className="text-center">
                    <span className="text-center landing_text"> A Dress For The Occasion Of A Lifetime </span>
                </div> */}

                < ImagePopupComponent className='large-img' Img={Twins} alt="Customer Worn Dress 8" />
                
                {/* <div className="text-center">
                    <span className="text-center landing_text">Let Us Bring Your Vision To Life </span>
                </div> */}

                <div className="dressdisplay">
                    < ImagePopupComponent Img={CustomerWorn9} alt="Customer Worn Dress 9" />
                    < ImagePopupComponent Img={CustomerWorn18} alt="Customer Worn Dress 18" />
                    < ImagePopupComponent Img={CustomerWorn16} alt="Customer Worn Dress 16" />           
                </div>

                {/* <div className="text-center">
                    <span className="text-center landing_text"> Look And Feel Your Best With SLR Couture </span>
                </div> */}

                < ImagePopupComponent className='large-img'Img={CustomerWorn8} alt="Customer Worn Dress 8" />


                {/* < ImagePopupComponent className='large-img' Img={CustomerWorn12} alt="Customer Worn Dress 12" /> */}

                {/* <div className="text-center">
                    <span className="text-center landing_text"> Collaborate With Us To Create A Work Of Art </span>
                </div> */}

                <div className="dressdisplay">
                    
                    < ImagePopupComponent Img={CustomerWorn5} alt="Customer Worn Dress 5" />
                    < ImagePopupComponent Img={CustomerWorn6} alt="Customer Worn Dress 6" />
                    < ImagePopupComponent Img={CustomerWorn7} alt="Customer Worn Dress 7" />
                </div>

                {/* <div className="text-center">
                    <span className="text-center landing_text"> Make Your Special Occasion One To Remember </span>
                </div> */}

                < ImagePopupComponent className='large-img' Img={CustomerWorn12} alt="Customer Worn Dress 12" />
            

                {/* <div className="text-center">
                    <span className="text-center landing_text"> Custom Formalwear Fitted Just For You </span>
                </div> */}

                <div className="dressdisplay">
                    < ImagePopupComponent Img={CustomerWorn1} alt="Customer Worn Dress 1" />
                    < ImagePopupComponent Img={CustomerWorn3} alt="Customer Worn Dress 3" />
                    < ImagePopupComponent Img={CustomerWorn2} alt="Customer Worn Dress 2" />
                </div>
                
                {/* <div className="text-center">
                    <span className="text-center landing_text"> Become A Part Of The SLR Couture Family </span>
                </div> */}

                {/* <img className="wing wing-reverse" src={wing} alt="" /> */}
                {/* <img className="wing" src={wing} alt=""/> */}

                <div className="dressdisplay dressdisplay-last">
                    < ImagePopupComponent Img={CustomerWorn10} alt="Customer Worn Dress 10" />
                    < ImagePopupComponent Img={CustomerWorn20} alt="Customer Worn Dress 15" />  
                </div>
            </div>

        </div>
    )
}

export default LandingPane
