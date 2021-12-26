import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'


function Contact() {
    return (
        <div>
            < Header/>
            <div className="contact">
                <form >
                    <fieldset>Client Contact Form</fieldset>
                    Name:<input type="text" name="name" />



                </form>
            </div>
            < Footer/>
        </div>
    )
}

export default Contact
