import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../componentcss/Lookbook.css'
import { Carousel } from 'react-bootstrap'
import LookBookDB from "../db/LookbookDB";



function Lookbook() {
    return (
        <div className="Lookbook">
            < Header />

            <Carousel className="Carousel text-center" fade interval={2000}>
                {/* Map Lookbook DB onto page */}
                { LookBookDB.map((Img, index) => {
                        return (
                            < Carousel.Item >
                                <img src={Img} className="img-fluid carousel-img" alt={`Slide ${index + 1}`} key={index + 1} />
                            </Carousel.Item>
                        );
                    })}
            </Carousel>

            < Footer />
        </div>
    )
}

export default Lookbook
