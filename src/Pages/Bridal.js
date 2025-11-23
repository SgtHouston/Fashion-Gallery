import React from  'react' 
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Carousel } from 'react-bootstrap'
import BridalDB from "../db/BridalDB";
import '../componentcss/Bridal.css'

function Bridal () {
    
    return (

        <div className="Bridal">
            <Header />
            <div className="bridal-body">
                <div className="clients-pics">
                    <Carousel className="Carousel text-center" fade interval={2000}>
                        {/* Map Bridal DB onto page */}
                        { BridalDB.map((Img, index) => {
                                return (
                                    < Carousel.Item key={index + 1}>
                                        <img src={Img} className="img-fluid carousel-img" alt={`Slide ${index + 1}`} loading="lazy" key={index + 1} />
                                    </Carousel.Item>
                                );
                            })}
                    </Carousel>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Bridal
