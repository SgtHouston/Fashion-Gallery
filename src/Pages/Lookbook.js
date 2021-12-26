import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../componentcss/Lookbook.css'
import { Carousel } from 'react-bootstrap'
import dress1 from '../images/DressLogo Pics/11.png'
import dress2 from '../images/DressLogo Pics/2.png'
import dress3 from '../images/DressLogo Pics/3.png'
import dress4 from '../images/DressLogo Pics/4.png'
import dress5 from '../images/DressLogo Pics/5.png'
import dress6 from '../images/DressLogo Pics/6.png'
import dress7 from '../images/DressLogo Pics/7.png'
import dress8 from '../images/DressLogo Pics/8.png'
import dress9 from '../images/DressLogo Pics/9.png'
import dress10 from '../images/DressLogo Pics/10.png'
import dress11 from '../images/DressLogo Pics/1.png'



function Lookbook() {
    return (
        <div className="Lookbook">
            < Header />
            <Carousel className="Carousel text-center" fade>


                <Carousel.Item>
                    <a href="/lookbook/greengold"><img
                        className="img-fluid carousel-img"
                        src={dress1}
                        alt="First slide"
                        
                    /></a>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="img-fluid carousel-img"
                        src={dress2}
                        alt="Second slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="img-fluid carousel-img"
                        src={dress3}
                        alt="Third slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="img-fluid carousel-img"
                        src={dress4}
                        alt="Fourth slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="img-fluid carousel-img"
                        src={dress5}
                        alt="Fifth slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="img-fluid carousel-img"
                        src={dress6}
                        alt="Sixth slide"
                    />

                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="img-fluid carousel-img"
                        src={dress7}
                        alt="Seventh slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="img-fluid carousel-img"
                        src={dress8}
                        alt="Eighth slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="w-66 img-fluid carousel-img"
                        src={dress9}
                        alt="Ninth slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="img-fluid carousel-img"
                        src={dress10}
                        alt="Tenth slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="img-fluid carousel-img"
                        src={dress11}
                        alt="Eleventh slide"
                    />
                </Carousel.Item>


            </Carousel>
            < Footer />
        </div>
    )
}

export default Lookbook
