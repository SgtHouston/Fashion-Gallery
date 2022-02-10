import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../componentcss/Lookbook.css'
import { Carousel } from 'react-bootstrap'
import dress1 from '../images/DressLogo Pics/11.png'
import dress1a from '../images/DressLogo Pics/11a.png'
import dress2 from '../images/DressLogo Pics/2.png'
import dress2a from '../images/DressLogo Pics/2a.png'
import dress3 from '../images/DressLogo Pics/3.png'
import dress3a from '../images/DressLogo Pics/3a.png'
import dress4 from '../images/DressLogo Pics/4.png'
import dress4a from '../images/DressLogo Pics/4a.png'
import dress5 from '../images/DressLogo Pics/5.png'
import dress5a from '../images/DressLogo Pics/5a.png'
import dress6 from '../images/DressLogo Pics/6.png'
import dress6a from '../images/DressLogo Pics/6a.png'
import dress7 from '../images/DressLogo Pics/7.png'
import dress7a from '../images/DressLogo Pics/7a.png'
import dress8 from '../images/DressLogo Pics/8.png'
import dress8a from '../images/DressLogo Pics/8a.png'
import dress9 from '../images/DressLogo Pics/9.png'
import dress9a from '../images/DressLogo Pics/9a.png'
import dress10 from '../images/DressLogo Pics/10.png'
import dress10a from '../images/DressLogo Pics/10a.png'
import dress11 from '../images/DressLogo Pics/1.png'
import dress11a from '../images/DressLogo Pics/1a.png'



function Lookbook() {
    return (
        <div className="Lookbook">
            < Header />
            <Carousel className="Carousel text-center" fade>


                <Carousel.Item>
                    <img
                        className="img-fluid carousel-img"
                        src={dress1}
                        alt="First slide"
                        
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="img-fluid carousel-img"
                        src={dress1a}
                        alt="Second slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="img-fluid carousel-img"
                        src={dress2}
                        alt="Third slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="img-fluid carousel-img"
                        src={dress2a}
                        alt="Fourth slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="img-fluid carousel-img"
                        src={dress3}
                        alt="Fifth slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="img-fluid carousel-img"
                        src={dress3a}
                        alt="Sixth slide"
                    />

                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="img-fluid carousel-img"
                        src={dress4}
                        alt="Seventh slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="img-fluid carousel-img"
                        src={dress4a}
                        alt="Eighth slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="w-66 img-fluid carousel-img"
                        src={dress5}
                        alt="Ninth slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="img-fluid carousel-img"
                        src={dress5a}
                        alt="Tenth slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="img-fluid carousel-img"
                        src={dress6}
                        alt="11th slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="img-fluid carousel-img"
                        src={dress6a}
                        alt="12th slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="img-fluid carousel-img"
                        src={dress7}
                        alt="13th slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="img-fluid carousel-img"
                        src={dress7a}
                        alt="14th slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="img-fluid carousel-img"
                        src={dress8}
                        alt="15th slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="img-fluid carousel-img"
                        src={dress8a}
                        alt="16th slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="img-fluid carousel-img"
                        src={dress9}
                        alt="17th slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="img-fluid carousel-img"
                        src={dress9a}
                        alt="18th slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="img-fluid carousel-img"
                        src={dress10}
                        alt="19th slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="img-fluid carousel-img"
                        src={dress10a}
                        alt="20th slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="img-fluid carousel-img"
                        src={dress11}
                        alt="21st slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="img-fluid carousel-img"
                        src={dress11a}
                        alt="22nd slide"
                    />
                </Carousel.Item>


            </Carousel>
            <div className="spacer"></div>
            < Footer />
        </div>
    )
}

export default Lookbook
