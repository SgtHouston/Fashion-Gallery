import React from 'react'
import Header from './Header'
import LandingPane from './LandingPane'
import DressGallery from './DressGallery'

function Home() {
    return (
        <div className="homepage">
            <Header />

            <LandingPane />

            <DressGallery />
        </div>
    )
}

export default Home
