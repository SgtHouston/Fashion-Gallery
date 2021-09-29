import React from 'react'
import Header from '../components/Header'
import LandingPane from '../components/LandingPane'
import DressGallery from '../components/DressGallery'
import Footer from '../components/Footer'

function Home() {
    return (
        <div className="homepage">
            <Header />
            <LandingPane />
            <DressGallery />
            <Footer/>
        </div>
    )
}

export default Home
