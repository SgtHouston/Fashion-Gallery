import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../componentcss/Faqs.css'
import Accordion from 'react-bootstrap/Accordion';
import FaqsDB from "../db/FaqsDB";



function Faqs() {
    return (
        <div className="faqs">
            <Header />
            <div className='faqs-body'>
                <h2 className='faqs-title text-center'> Frequently Asked Questions</h2>
                <br />
                <div className='faqs-accordion'>
                    <Accordion flush>
                        {/* Map FAQs db onto page */}
                        {FaqsDB.map((Faqs, index) => {
                            return (
                                <Accordion.Item eventKey={index} >
                                    <Accordion.Header className='accordion-header'>{Faqs.Question}</Accordion.Header>
                                    <Accordion.Body className='accordion-body'>{Faqs.Answer}</Accordion.Body>
                                </Accordion.Item>
                            );
                        })}

                    </Accordion>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Faqs;
