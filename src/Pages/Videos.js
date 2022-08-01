import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../componentcss/Videos.css'
import VideoDB from "../db/VideoDB";

function Videos (){

    return (
        <div className="Videos">
            <Header />
                <div className="videos-body">
                <h2 className="videos-title">Video Gallery</h2>
                <div className="videos-vids">
                    {/* Maps videos into players onto page */}
                    { VideoDB.map((video, index) => {
                        return (
                            <video className='videoTag2' id={`Video ${index +1}`} key={index + 1}  muted playsinline controls controlsList='nodownload'>
                                <source src={video}  type="video/mp4" />
                                Your browser does not support the video tag.
                                
                            </video>
                            
                        );
                    })}
                </div>
                
                </div>
            <Footer />
        </div>
    )
}

export default Videos