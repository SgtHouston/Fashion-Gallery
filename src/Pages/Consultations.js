import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../componentcss/Consultations.css'
// import ConsultPic from '../images/silhouette.png'
// import ConsultPic from '../images/Process.png'

function Consultations() {


    return (
        <div className="consultations">
            <Header />
            <div className="consultations-body">
                <h2 className='consultations-title'> Consultation Services </h2>
                <br />
                <div className='consultations'>
                    <p className="consultations-header">EXPERIENCE A BESPOKE TRANSFORMATION</p>

                    <a className='consultations-link' href='/start-order'>Start your order</a> today by 
                    scheduling a consultation with us.  At SLR Couture, our bespoke service offers a fully tailored, luxury experience 
                    designed to bring your unique vision to life. Whether for a special occasion or your wedding day, each garment 
                    is created to reflect your personal style and elegance. Below, we outline our exclusive consultation process 
                    to help guide you through the SLR Couture journey.<br /><br />

                    <p className="consultations-header">THE BESPOKE PROCESS</p> 

                    1. In-Person and Virtual Sessions Personalized Consultation<br /><br />

                    Meet directly with our designer to discuss your ideas and requirements for a one-of-a-kind creation that truly represents you. During this session, you’ll have the opportunity to share inspirations, details, and preferences.<br /><br />

                    2. Custom Sketch Development <br /><br />

                    A personalized sketch of your design will be created, providing a visual representation to guide the production of your garment. 
                    A detailed sketch and invoice will be provided within 7 days post-consultation, dependent on the design's complexity.<br /><br />

                    3. Toile Service <br /><br />
                    Every bespoke order includes a Toile— a prototype of your dress made with calico fabric. This preliminary mock-up ensures that the final garment will have a flawless, tailored fit.<br /><br />

                    <p className="consultations-header">AFTER YOUR CONSULTATION</p>

                    Upon completing your consultation, you will receive:<br /><br />

                    &#x2022; Order Confirmation<br />
                    Once the deposit is received, you will receive a welcome email within 72 hours to confirm your order. Please contact us if you do not receive this confirmation.<br /><br />

                    &#x2022; Order Pack <br />
                    This includes a summary of your order, payment schedule, dress sketch (for bespoke orders), and all key dates.<br /><br />

                    &#x2022; Invoice & Payment Link <br />
                    A secure payment link to submit your deposit and review our Terms and Conditions. Note: Production will only begin upon receipt of the deposit.<br /><br />

                    &#x2022; Upon deposit payment, measurements will be taken to begin production.<br /><br />

                    &#x2022; Non-Refundable Consultation Fee<br />
                    If you decide to proceed, the consultation fee will be applied toward the dress. Payment is required within 24-48 hours after receiving the invoice.<br /><br />
                    
                    &#x2022; Appointments for Clients Under 18<br />
                    Bookings must be made by a parent or guardian.<br /><br />

                    &#x2022; Rebooking and Cancellation Fees<br />
                    Cancellations on the same day will incur a rebooking fee. In-person appointments are available on weekends only.<br /><br />


                    <p className="consultations-header">VIRTUAL CONSULTATIONS</p> 

                    For international clients or long distance clients opting for a virtual consultation, please ensure you have a measuring tape and ribbon on hand for accurate measurements. We recommend having someone available to assist you.<br /><br />

                    Virtual Fittings: <br /><br />
                    For those unable to visit in person, we offer virtual fitting services. A Toile will be shipped to you with a prepaid return label, and we’ll guide your local tailor with fitting videos. Shipping fees for the final order are not included in the initial quote and are the responsibility of the client.  For further details on our international fitting service, please contact us.<br /><br />


                    Need Further Assistance?<br /><br />

                    - Email Us: slrcouture@gmail.com<br />
                    - Call Us: 678-653-3725  <br />
                    - We aim to respond to all inquiries within 72 hours.<br />
                </div>
                <br />
                {/* <img src={ConsultPic} alt='' /> */}
                <br />
                <br />

            </div>
            {/* <img className='process' src={ConsultPic} alt='' /> */}
            <Footer />
        </div>
    );
}

export default Consultations;
