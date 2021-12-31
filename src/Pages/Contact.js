import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../componentcss/Contact.css'
// import Twins from '../images/Twins.png'
import CustomerWorn8 from '../images/Pageant copy.jpeg'
// npm install @mui/icons-material
// npm install @mui/material
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { actionAddClient } from '../redux/actions/client'


function Contact() {
    const dispatch = useDispatch()
    const [fname, setFName] = useState('');
    const [age, setAge] = useState('');
    const [lname, setLName] = useState('');
    const [consultation, setConsultation] = useState('');
    const [size, setSize] = useState(99);
    const [email, setEmail] = useState('');
    const [existingnew, setExistingnew] = useState('');
    const [fitting, setFitting] = useState('');
    const [phone, setPhone] = useState('');
    const [shipping, setShipping] = useState('');
    const [purpose, setPurpose] = useState({
        Birthday: false,
        WeddingGuest: false,
        Prom: false, 
        Wedding: false,
        Reception: false, 
        Anniversary: false,
        RedCarpet: false,
        Graduation: false,
        SisofBride: false,
        MotherofBride: false,
        EveningWear: false, 
        Other: false
    });

    const client = useSelector (state => state.client)
    

    const handleSubmit = e => {
        e.preventDefault();
        // Capture Info from Contact State 
        client.FName = fname
        client.LName = lname
        client.Age = age
        client.Consultation = consultation
        client.Size = size
        client.EMail = email
        client.Existingnew = existingnew
        client.Fitting = fitting
        client.Phone = phone
        client.Shipping = shipping
        client.Purpose = purpose
        // console.log(client)

        // Submit info as client and dispatch to redux for global state
        dispatch(actionAddClient(client))

        // deploy "Sumbit Successful Modal"
        // Refresh page on close or redirect to other
    }



    return (
        <div className="contact">
            < Header />
            <div className="contact-body">
                <div className='contact-form text-center'>
                    
                    <div className='contact-image'>
                        <img className='img-fluid' src={CustomerWorn8 } alt=''></img>
                        <h4 className='contact-text'>Please Fill Out The Form Below <br/>To Start Your Order</h4>
                        < KeyboardDoubleArrowDownIcon />
                    </div>
                    <form className="contact-form-inputs" onSubmit={handleSubmit}>
                        <fieldset>
                            <br/>
                        <label htmlFor="contact-names" className="form-check">Name </label>
                            <div className="contact-names">
                                <div className="form-check">
                                    <input type="text" name="name" id="fnameinput" value={fname} onChange={e => setFName(e.target.value)} required />
                                    <p className='field-label'>First</p>
                                </div>
                                <div className="form-check">
                                    <input type="text" name="name" id="lnameinput" value={lname} onChange={e => setLName(e.target.value)} required />
                                    <p className='field-label'>Last</p>
                                </div>
                            </div>
                        </fieldset>

                        <fieldset>
                            <label htmlFor="contact-details" className="form-check">Contact Details </label>
                            <div className="contact-details">
                                <div className="form-check">
                                    <input type="tel" name="phone" id="phoneinput" value={phone} onChange={e => setPhone(e.target.value)} required />
                                    <p className='field-label'>Phone</p>
                                </div>
                            
                                <div className="form-check">
                                    <input type="email" name="email" id="emailinput" value={email} onChange={e => setEmail(e.target.value)} required />
                                    <p className='field-label'>E-Mail</p>
                                </div>
                            </div>
                        </fieldset>
                        <br/>
                        <br/>  
                        <fieldset >
                            <div className="contact-dropdown">
                                <div className="selector form-check">
                                    <label htmlFor="size-selector" className="form-check">Size </label> 
                                    <select className="form-check form-check-black" name="Select Your Dress Size" id="size-selector" value={size} onChange={e => setSize(e.target.value)}>
                                        <option value='no size selection' disabled selected> Select Dress Size </option>
                                        <option value='0' > 0</option>
                                        <option value='2' > 2</option>
                                        <option value='4' > 4</option>
                                        <option value='6' > 6 </option>
                                        <option value='8' > 8 </option>
                                        <option value='10' > 10 </option>
                                        <option value='12' > 12 </option>
                                        <option value='14' > 14 </option>
                                        <option value='16' > 16 </option>
                                    </select>
                                </div>
                                <br/>
                                <br/>
                                <div className="selector form-check">
                                    <label htmlFor="age-selector" className="form-check">Age Range </label>
                                    <select className="form-check form-check-black" name="Select Your Age Range" id="age-selector" value={age} onChange={e => setAge(e.target.value)}>
                                        <option value='no range selection' disabled selected> Select Age Range </option>
                                        <option value='0 - 15' > 0 - 15 </option>
                                        <option value='16 - 21' > 16 - 21 </option>
                                        <option value='22 - 27' > 22 - 27 </option>
                                        <option value='28 - 34' > 28 - 34 </option>
                                        <option value='35 - 40' > 35 - 40 </option>
                                        <option value='41 - 49' > 41 - 49 </option>
                                        <option value='50+' > 50+ </option>
                                    </select>
                                </div>
                            </div>
                        </fieldset>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <fieldset>
                            <label htmlFor="outfit-selector" id="outfit-selector">Purpose of Outfit <br/> (You Can Choose More Than One Option) </label>
                            <br/>
                            <p className="form-check form-check-inline">
                                <input type="checkbox" onChange={e => setPurpose({...purpose, Birthday: (!purpose.Birthday)})} className="form-check-input" />
                                <label className="form-check-label">Birthday</label>
                            </p>
                            <p className="form-check form-check-inline">
                                <input type="checkbox" onChange={e => setPurpose({...purpose, WeddingGuest: (!purpose.WeddingGuest)})} className="form-check-input" /> 
                                <label className="form-check-label"> Wedding Guest</label>
                            </p>
                            <p className="form-check form-check-inline">
                                <input type="checkbox" onChange={e => setPurpose({...purpose, Prom: (!purpose.Prom)})} className="form-check-input" /> 
                                <label className="form-check-label"> Prom</label>
                            </p>
                            <p className="form-check form-check-inline">
                                <input type="checkbox" onChange={e => setPurpose({...purpose, Wedding: (!purpose.Wedding)})} className="form-check-input" /> 
                                <label className="form-check-label"> Wedding</label>
                            </p>
                            <p className="form-check form-check-inline">
                                <input type="checkbox" onChange={e => setPurpose({...purpose, Reception: (!purpose.Reception)})} className="form-check-input" /> 
                                <label className="form-check-label"> Reception Dress</label>
                            </p>
                            <p className="form-check form-check-inline">
                                <input type="checkbox" onChange={e => setPurpose({...purpose, Anniversary: (!purpose.Anniversary)})} className="form-check-input" /> 
                                <label className="form-check-label"> Anniversary Dress</label>
                            </p>
                            <p className="form-check form-check-inline">
                                <input type="checkbox" onChange={e => setPurpose({...purpose, RedCarpet: (!purpose.RedCarpet)})} className="form-check-input" />
                                <label className="form-check-label"> Red Carpet</label>
                            </p>
                            <p className="form-check form-check-inline">
                                <input type="checkbox" onChange={e => setPurpose({...purpose, Graduation: (!purpose.Graduation)})} className="form-check-input" />
                                <label className="form-check-label">  Graduation</label>
                            </p>
                            <p className="form-check form-check-inline">
                                <input type="checkbox" onChange={e => setPurpose({...purpose, SisofBride: (!purpose.SisofBride)})} className="form-check-input" />
                                <label className="form-check-label">  Sister Of Bride/Groom</label>
                            </p>
                            <p className="form-check form-check-inline">
                                <input type="checkbox" onChange={e => setPurpose({...purpose, MotherofBride: (!purpose.MotherofBride)})} className="form-check-input" /> 
                                <label className="form-check-label">Mother of Bride/Groom</label>
                            </p>
                            <p className="form-check form-check-inline">
                                <input type="checkbox" onChange={e => setPurpose({...purpose, EveningWear: (!purpose.EveningWear)})} className="form-check-input" />
                                <label className="form-check-label">  Evening Wear</label>
                            </p>
                            <p className="form-check form-check-inline">
                                <input type="checkbox" onChange={e => setPurpose({...purpose, Other: (!purpose.Other)})} className="form-check-input" />
                                <label className="form-check-label">  Other</label>
                            </p>
                        </fieldset>

                        <br/>
                        <fieldset>
                            <label htmlFor="design-selector" id="design-selector">Existing or New Design? </label>
                            <br/>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="design-selector" id="NewDesign" value={existingnew} onChange={e => setExistingnew("New Design")} />
                                <label  htmlFor="NewDesign">
                                    New Design
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="design-selector" id="ExistingDesign" value={existingnew} onChange={e => setExistingnew("Existing Design")} />
                                <label  htmlFor="ExistingDesign">
                                    Existing Design
                                </label>
                            </div>
                        </fieldset>

                        <br/>
                        <fieldset>
                            <label htmlFor="fitting-selector" id="fitting-selector">Available For A Fitting In Our Atlanta Studio?</label>
                            <br/>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="fitting-selector" value={fitting} onChange={e => setFitting("Atlanta Fitting")} id="Yes" />
                                <label  htmlFor="Yes">
                                    Yes
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="fitting-selector" value={fitting} onChange={e => setFitting("No Fitting")} id="No"  />
                                <label  htmlFor="No">
                                    No
                                </label>
                            </div>
                        </fieldset>


                        <br/>
                        <fieldset>
                            <label htmlFor="shipping-selector" id="shipping-selector">Shipping Information</label>
                            <br/>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="shipping-selector" id="Local" value={shipping} onChange={e => setShipping("Local Shipping")} />
                                <label  htmlFor="Local">
                                    Local
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="shipping-selector" id="International" value={shipping} onChange={e => setShipping("International Shipping")} />
                                <label  htmlFor="International">
                                    International
                                </label>
                            </div>
                        </fieldset>


                        <br/>
                        <fieldset>
                            <label htmlFor="consultation-selector" id="consultation-selector">Consultation Preference</label>
                            <br/>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="consultation-selector" id="inPerson" value={consultation} onChange={e => setConsultation("In-Person Consultation")} />
                                <label  htmlFor="inPerson">
                                    In Person
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="consultation-selector" id="Remote" value={consultation} onChange={e => setConsultation("Remote Consultation")}  />
                                <label  htmlFor="Remote">
                                    Remote
                                </label>
                            </div>
                        </fieldset>

                        <button type="submit" onClick={handleSubmit}>Submit</button>
                    </form>
                </div>
            </div>
            < Footer />
        </div>
            
    )
}

export default Contact
