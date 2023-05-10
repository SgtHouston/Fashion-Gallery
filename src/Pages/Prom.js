import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../componentcss/Prom.css'
import { Carousel } from 'react-bootstrap'
import PromDB from "../db/PromDB";



function Prom() {
    return (
        <div className="Prom">
            < Header />

            <Carousel className="Carousel text-center" fade interval={2000}>
                {/* Map Prom DB onto page */}
                { PromDB.map((Img, index) => {
                        return (
                            < Carousel.Item key={index + 1}>
                                <img src={Img} className="img-fluid carousel-img" alt={`Slide ${index + 1}`} key={index + 1} />
                            </Carousel.Item>
                        );
                    })}
            </Carousel>

            < Footer />
        </div>
    )
}

export default Prom
