import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../componentcss/Faqs.css'
import Accordion from 'react-bootstrap/Accordion';



function Faqs() {
    return (
        <div className="faqs">
            <Header />
            <div className='faqs-body'>
                <h2 className='faqs-title text-center'> Frequently Asked Questions</h2>
                <br/>
                <div className='faqs-accordion'>
                    <Accordion flush>

                        <Accordion.Item eventKey="0" >
                            <Accordion.Header className='accordion-header'>DO YOU HAVE A STOREFRONT?</Accordion.Header>
                            <Accordion.Body>
                                We do not have a storefront at this time as we are an exclusively online company. We do have an office in Georgia, but this location is not set up for customer visits. Items can be picked up with pre-approval.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1" >
                            <Accordion.Header className='accordion-header'>WHERE IS SLR COUTURE LOCATED? </Accordion.Header>
                            <Accordion.Body>
                                SLR Couture is located in the United States in Atlanta, GA
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="2" className='accordion-item'>
                            <Accordion.Header className='accordion-header'>WHAT IS THE BEST WAY TO CONTACT YOU? </Accordion.Header>
                            <Accordion.Body>
                                The best way to reach us is via e-mail at slrcouture@gmail.com
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="3" className='accordion-item'>
                            <Accordion.Header className='accordion-header'>IS THERE A CONSULTATION A FEE?</Accordion.Header>
                            <Accordion.Body>
                                BRIDAL CONSULTATION $150 - 2hrs <br/>
                                PROM CONSULTATION $75 - 1hr <br/>
                                CUSTOM CONSULTATION $50 - 30min <br/>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="4" className='accordion-item'>
                            <Accordion.Header className='accordion-header'>HOW LONG DOES THE COUTURE PROCESS TAKE?</Accordion.Header>
                            <Accordion.Body>
                                BRIDAL TURNAROUND TIMEFRAME 24-48 WEEKS<br/>
                                PROM TURNAROUND TIMEFRAME 4-6 WEEKS<br/>
                                CUSTOM TURNAROUND TIMEFRAME 2-4 WEEKS<br/>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="5" className='accordion-item'>
                            <Accordion.Header className='accordion-header'>HOW SOON CAN I BEGIN THE COUTURE PROCESS FOR MY GOWN?</Accordion.Header>
                            <Accordion.Body>
                                We advise beginning the process at least 24 weeks to your wedding. We do offer express couture services. Please send an e-mail to slrcouture@gmail.com if you need a gown less than 24 weeks to your wedding.
                            </Accordion.Body>
                        </Accordion.Item>

                        

                        <Accordion.Item eventKey="6" >
                            <Accordion.Header className='accordion-header'>DO YOU OFFER RUSH ORDERS? </Accordion.Header>
                            <Accordion.Body>
                                We can provide rush orders with lead times under 12 weeks contingent upon on our production schedule. All rush orders must be requested prior to ordering. All orders are shipped via UPS Standard Ground (7-10 business days) unless otherwise requested. Rush orders are subject to prior approval. This option does not include shipping, which you will be billed separately. 
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="7" >
                            <Accordion.Header className='accordion-header'>DO YOU OFFER COUTURE TO BRIDES INTERNATIONALLY?</Accordion.Header>
                            <Accordion.Body>
                                Yes, we do extend our couture services to international brides. Consultations will be held virtually via a video call, during which we will walk you through the entire couture process in detail.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="8" >
                            <Accordion.Header className='accordion-header'>HOW SOON CAN I BEGIN THE COUTURE PROCESS FOR MY GOWN?</Accordion.Header>
                            <Accordion.Body>
                                We advise beginning the process at least 24 weeks to your wedding. We do offer express couture services. Please send an e-mail to slrcouture@gmail.com if you need a gown less than 24 weeks to your wedding.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="9" >
                            <Accordion.Header className='accordion-header'>HOW LONG DOES SHIPPING TAKE?</Accordion.Header>
                            <Accordion.Body>
                                Shipping usually takes between 5-7 business days for domestic shipping within the U.S.A. Express shipping is an option as well. <br/><br/>

                                International shipping usually takes anywhere from five business days to 10 business days, depending on the country. <br/><br/>

                                At SLR Couture, we work hard to make sure every package is delivered on time and in excellent condition. However, once your order leaves our showroom we have very little control over UPS or Canada Post and we are unable to make any changes to the package. We do not ship to a P.O Box. All orders are shipped via UPS Ground or Canada Post. Expedited shipping is available for an additional charge. <br/><br/>

                                We will send an email once your order has shipped, including a tracking number, so you can follow the package's journey until it arrives at your doorstep. Swatches do not have tracking at this time. <br/><br/>

                                For Atlanta Area Customers: Pick-ups are available for dresses at our showroom location or you can choose to have them shipped. Packages are signature required. We are not responsible for packages that are lost or stolen by the delivery carrier. Insurance options are available per request. <br/>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="10" >
                            <Accordion.Header className='accordion-header'>WHAT SHIPPING METHOD DO YOU USE?</Accordion.Header>
                            <Accordion.Body>
                                Should you choose to have your gown shipped, our preferred shipping partner for both domestic and international shipping is UPS. In the event UPS is not reliable, we will chose another major courier. 
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="11" >
                            <Accordion.Header className='accordion-header'>WHAT IS YOUR CANCELLATION / REFUND POLICY?</Accordion.Header>
                            <Accordion.Body>
                            If you need to cancel your order, you can only do so providing your gown hasn’t begun production. There is a cancellation fee to cover the cost of administration, fabric allocation, pre-production and pattern preparation associated with your order. You must contact us immediately at slrcouture@gmail.com to discuss the circumstances surrounding the cancellation well in advance of your production date.  <br/><br/>
                            
                            All custom made items are considered final sale and do not qualify for return, refund or store credits. 
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="12" >
                            <Accordion.Header className='accordion-header'> * COVID-19 DISCLAIMER *</Accordion.Header>
                            <Accordion.Body>
                                We are making every effort to dispatch all orders within our standard timeframe; due to COVID-19, please be aware that production and delivery delays may occur. 
                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Faqs;
