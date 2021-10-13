import React from 'react'
import '../componentcss/DressGallery.css'


function DressGallery() {
    return (
        <div className="gallery">
            <br />

            <div className="gallery__img">
                <img src='' alt="" ></img>
                <h4 className="img-caption">Formalwear fitted just for you.</h4>
            </div>
            <br />

            <div className="gallery__img">
                <h4 className="img-caption">Shut down prom with a dress like no other. </h4>
                <img className="alternate" src='' alt="" ></img>
            </div>
            <br />

            <div className="gallery__img">
                <img src='' alt="" ></img>
                <h4 className="img-caption">A dress for the occasion of a lifetime.</h4>
            </div>
        </div>
    )
}

export default DressGallery
