import React from 'react'
import '../componentcss/DressGallery.css'
import CustomerWorn4 from '../images/IMG_2463.jpg'
import CustomerWorn5 from '../images/IMG_6969.png'
import CustomerWorn6 from '../images/Silver Prom.jpg'


function DressGallery() {
    return (
        <div className="gallery">
            <br />

            <div className="gallery__img">
                <img src={CustomerWorn4} alt="" ></img>
                <h4 className="img-caption">Look and feel your best with SLR Couture.</h4>
            </div>
            <br />

            <div className="gallery__img">
                <h4 className="img-caption">Custom formalwear fitted just for you. </h4>
                <img className="alternate" src={CustomerWorn5} alt="" ></img>
            </div>
            <br />

            <div className="gallery__img">
                <img src={CustomerWorn6} alt="" ></img>
                <h4 className="img-caption">A dress for the occasion of a lifetime.</h4>
            </div>
        </div>
    )
}

export default DressGallery
