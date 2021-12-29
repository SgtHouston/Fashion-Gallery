import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../componentcss/Contact.css'
// import Twins from '../images/Twins.png'
import CustomerWorn8 from '../images/Pageant copy.jpeg'
// npm install @mui/icons-material
// npm install @mui/material
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';


function Contact() {
    return (
        <div className="contact">
            {/* < Header /> */}
            <div className="contact-body">
                <div className='contact-form text-center'>
                    
                    <div className='contact-image'>
                        <img className='img-fluid' src={CustomerWorn8 } alt=''></img>
                        <h4 className='contact-text'>Please Fill Out The Form Below <br/>To Start Your Order</h4>
                        < KeyboardDoubleArrowDownIcon />
                    </div>
                    <form className="contact-form-inputs">
                        <fieldset>
                            <br/>
                        <label for="contact-names" class="form-check">Name </label>
                            <div class="contact-names">
                                <div class="form-check">
                                    <input type="text" name="name" id="fnameinput" required />
                                    <p class='field-label'>First</p>
                                </div>
                                <div class="form-check">
                                    <input type="text" name="name" id="lnameinput" required />
                                    <p class='field-label'>Last</p>
                                </div>
                            </div>
                        </fieldset>

                        <fieldset>
                            <label for="contact-details" class="form-check">Contact Details </label>
                            <div class="contact-details">
                                <div class="form-check">
                                    <input type="tel" name="phone" id="phoneinput" required />
                                    <p class='field-label'>Phone</p>
                                </div>
                            
                                <div class="form-check">
                                    <input type="email" name="email" id="emailinput" required />
                                    <p class='field-label'>E-Mail</p>
                                </div>
                            </div>
                        </fieldset>
                        <br/>
                        <br/>  
                        <fieldset >
                            <div class="contact-dropdown">
                                <div class="selector form-check">
                                    <label for="size-selector" class="form-check">Size </label> 
                                    <select class="form-check form-check-black" name="Select Your Dress Size" id="size-selector">
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
                                <div class="selector form-check">
                                    <label for="age-selector" class="form-check">Age Range </label>
                                    <select class="form-check form-check-black" name="Select Your Age Range" id="age-selector">
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
                            <label for="outfit-selector" id="outfit-selector">Purpose of Outfit <br/> (You Can Choose More Than One Option) </label>
                            <br/>
                            <p class="form-check form-check-inline">
                                <input type="checkbox" value='Birthday' class="form-check-input" />
                                <label class="form-check-label">Birthday</label>
                            </p>
                            <p class="form-check form-check-inline">
                                <input type="checkbox" value='Wedding Guest' class="form-check-input" /> 
                                <label class="form-check-label"> Wedding Guest</label>
                            </p>
                            <p class="form-check form-check-inline">
                                <label class="form-check-label"> Prom</label>
                                <input type="checkbox" value='Prom' class="form-check-input" /> 
                            </p>
                            <p class="form-check form-check-inline">
                                <label class="form-check-label"> Wedding</label>
                                <input type="checkbox" value=' Wedding' class="form-check-input" /> 
                            </p>
                            <p class="form-check form-check-inline">
                                <label class="form-check-label"> Reception Dress</label>
                                <input type="checkbox" value='Reception Dress' class="form-check-input" /> 
                            </p>
                            <p class="form-check form-check-inline">
                                <label class="form-check-label"> Anniversary Dress</label>
                                <input type="checkbox" value='Anniversary Dress' class="form-check-input" /> 
                            </p>
                            <p class="form-check form-check-inline">
                                <label class="form-check-label"> Red Carpet</label>
                                <input type="checkbox" value='Red Carpet' class="form-check-input" />
                            </p>
                            <p class="form-check form-check-inline">
                                <label class="form-check-label">  Graduation</label>
                                <input type="checkbox" value='Graduation' class="form-check-input" />
                            </p>
                            <p class="form-check form-check-inline">
                                <label class="form-check-label">  Sister Of Bride/Groom</label>
                                <input type="checkbox" value='Sister Of Bride/Groom' class="form-check-input" />
                            </p>
                            <p class="form-check form-check-inline">
                                <label class="form-check-label">Mother of Bride/Groom</label>
                                <input type="checkbox" value='Mother of Bride/Groom' class="form-check-input" /> 
                            </p>
                            <p class="form-check form-check-inline">
                                <label class="form-check-label">  Evening Wear</label>
                                <input type="checkbox" value='Evening Wear' class="form-check-input" />
                            </p>
                            <p class="form-check form-check-inline">
                                <label class="form-check-label">  Other</label>
                                <input type="checkbox" value='Other' class="form-check-input" />
                            </p>
                        </fieldset>

                        <br/>
                        <fieldset>
                            <label for="design-selector" id="design-selector">Existing or New Design? </label>
                            <br/>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="design-selector" id="NewDesign" value="New Design"/>
                                <label  for="NewDesign">
                                    New Design
                                </label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="design-selector" id="ExistingDesign" value="Existing Design" />
                                <label  for="ExistingDesign">
                                    Existing Design
                                </label>
                            </div>
                        </fieldset>

                        <br/>
                        <fieldset>
                            <label for="fitting-selector" id="fitting-selector">Available For A Fitting In Our Atlanta Studio?</label>
                            <br/>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="fitting-selector" id="Yes" value="Yes"/>
                                <label  for="Yes">
                                    Yes
                                </label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="fitting-selector" id="No" value="No" />
                                <label  for="No">
                                    No
                                </label>
                            </div>
                        </fieldset>


                        <br/>
                        <fieldset>
                            <label for="shipping-selector" id="shipping-selector">Shipping Information</label>
                            <br/>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="shipping-selector" id="Local" value="Local"/>
                                <label  for="Local">
                                    Local
                                </label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="shipping-selector" id="International" value="International" />
                                <label  for="International">
                                    International
                                </label>
                            </div>
                        </fieldset>


                        <br/>
                        <fieldset>
                            <label for="consultation-selector" id="consultation-selector">Consultation Preference</label>
                            <br/>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="consultation-selector" id="inPerson" value="In Person"/>
                                <label  for="inPerson">
                                    In Person
                                </label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="consultation-selector" id="Remote" value="Remote" />
                                <label  for="Remote">
                                    Remote
                                </label>
                            </div>
                        </fieldset>


                    </form>
                </div>
            </div>
            < Footer />
        </div>
            
    )
}

export default Contact
