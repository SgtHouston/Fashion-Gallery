import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../componentcss/Gallery.css'
import { Carousel } from 'react-bootstrap'
import dress1 from '../images/DressLogo Pics/1.JPG'
import dress2 from '../images/DressLogo Pics/2.JPG'
import dress3 from '../images/DressLogo Pics/3.JPG'
import dress4 from '../images/DressLogo Pics/4.JPG'
import dress5 from '../images/DressLogo Pics/5.JPG'
import dress6 from '../images/DressLogo Pics/6.JPG'
import dress7 from '../images/DressLogo Pics/7.JPG'
import dress8 from '../images/DressLogo Pics/8.JPG'
import dress9 from '../images/DressLogo Pics/9.JPG'
import dress10 from '../images/DressLogo Pics/10.JPG'



function Gallery() {
    return (
        <div className="Gallery">
            < Header />
            <Carousel className="Carousel text-center" fade>


                <Carousel.Item>
                    <a href="/gallery/greengold"><img
                        className="d-block w-100 img-fluid carousel-img"
                        src={dress1}
                        alt="First slide"
                        
                    /></a>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid carousel-img"
                        src={dress2}
                        alt="Second slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid carousel-img"
                        src={dress3}
                        alt="Third slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid carousel-img"
                        src={dress4}
                        alt="Fourth slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid carousel-img"
                        src={dress5}
                        alt="Fifth slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid carousel-img"
                        src={dress6}
                        alt="Sixth slide"
                    />

                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid carousel-img"
                        src={dress7}
                        alt="Seventh slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid carousel-img"
                        src={dress8}
                        alt="Eighth slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid carousel-img"
                        src={dress9}
                        alt="Ninth slide"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid carousel-img"
                        src={dress10}
                        alt="Tenth slide"
                    />
                </Carousel.Item>

            </Carousel>
            
            < Footer />
        </div>
    )
}

export default Gallery
