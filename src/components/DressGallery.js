import React from 'react'
import '../componentcss/DressGallery.css'
import Formal from '../images/Dress.jpeg'
import Prom from '../images/BigDress.jpg'
import Wedding from '../images/Wedding.jpeg'

function DressGallery() {
    return (
        <div className="gallery">
            <br />

            <div className="gallery__img">
                <img src={Formal} alt="" ></img>
                <h4 className="img-caption">Formalwear fitted just for you.<br/>View our formal designs here.</h4>
            </div>
            <br />

            <div className="gallery__img">
                <h4 className="img-caption">Shut down prom with a dress like no other. <br/>View our prom designs here.</h4>
                <img className="alternate" src={Prom} alt="" ></img>
            </div>
            <br />

            <div className="gallery__img">
                <img src={Wedding} alt="" ></img>
                <h4 className="img-caption">A dress for the occasion of a lifetime. <br/>View our custom wedding designs here.</h4>
            </div>
        </div>
    )
}

export default DressGallery
