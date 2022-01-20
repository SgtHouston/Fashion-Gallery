import React from 'react'
import Header from '../components/Header'
import LandingPane from '../components/LandingPane'
import Footer from '../components/Footer'


function Home() {

    
    console.log('%c Welcome To SLR Couture!  Website made by GitHub: @SgtHouston', 'background: #545B5A; color: #fff; padding: 3px; border-radius:8px')
    return (
        <div className="homepage">
            < Header />
            < LandingPane />
            < Footer />
        </div>
    )
}

export default Home
