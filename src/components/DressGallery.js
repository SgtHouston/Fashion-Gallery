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
                <h4 className="img-caption">Formalwear fitted just for you.</h4>
            </div>
            <br />

            <div className="gallery__img">
                <img src={Wedding} alt="" ></img>
                <h4 className="alternate">A dress for the occasion of a lifetime.</h4>
            </div>
            <br />

            <div className="gallery__img">
                <h4 className="img-caption"> prom with a dress like no other. </h4>
                <img className="img-caption" src={Prom} alt=""></img>
            </div>
            <br />
        </div>
    )
}

export default DressGallery
