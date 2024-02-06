import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../componentcss/Consultations.css'
import ConsultPic from '../images/silhouette.png'

function Consultations() {


    return (
        <div className="consultations">
            <Header />
            <div className="consultations-body">
                <h2 className='consultations-title'> Consultations </h2>
                <br />
                <div className='consultations'>
                    <p className="consultations-header">LET US BRING YOUR VISION TO LIFE</p>

                    <a className='consultations-link' href='/start-order'>Start your order</a> today by scheduling a consultation with us. Consultations are only booked during our business hours. Payment is non-refundable and paid via invoice where you may pay online prior to your appointment. <br /><br />
                    Our consultation fee does not go towards the balance of your garment. Payment is required within 24-48 hours after the invoice has been sent.

                    Once your consultation is booked, please provide 48 hours notice if you need to reschedule. <br /><br /> 
                    If you're under the age of 18, consultations MUST be booked by a parent/guardian. <br /><br />
                    During the consultation, the designer will discuss everything in detail. All designs must be approved prior to moving forward. Same day cancellations of consultation are not able to reschedule, or will be charged a rebooking fee.  <br /><br />
                    Make your dream come true by designing it and let us sew it for you.<br /><br /><br /><br />

                    <p className="consultations-header">DESCRIPTION</p>

                    Consultation fee is non-refundable and is charged at the time of booking.<br /><br />
                    Appointments are booked on Saturday and Sunday only.<br /><br />
                    We offer in-person, Zoom, Skype, FaceTime and phone consultations.<br /><br />
                    Kindly include what sort of meeting you would prefer in the inquiry notes.
                    We ask that you come with all ideas & photos ready for the consultation.<br /><br />
                    The total price is calculated based on the amount of labor & details that are put into the design agreed upon at the consultation.<br /><br /><br /><br />

                    <p className="consultations-header">FEES</p> 

                    BRIDAL CONSULTATION $200 - 2hrs<br /><br />
                    PROM CONSULTATION $100 - 1hrs<br /><br />
                    CUSTOM CONSULTATION $100 - 1hrs<br /><br />
                </div>
                <br />
                <img src={ConsultPic} alt='' />
                <br />
                <br />

            </div>
            <Footer />
        </div>
    );
}

export default Consultations;
