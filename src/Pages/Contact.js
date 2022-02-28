import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../componentcss/Contact.css'
// npm install @mui/icons-material
// npm install @mui/material
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { actionAddClient } from '../redux/actions/client'
import { Modal, Button } from 'react-bootstrap'
import DressVid from '../video/DressVid.mov'
import { FormHelperText, InputLabel, MenuItem } from '@mui/material';
import CSSTextField from '../components/CSSTextField'
import CSSSelect from '../components/CSSSelect'
// npm install -g npm (new npm version install)
import { storage } from '../firebase'
import { ref, uploadBytesResumable } from 'firebase/storage'
import { getDownloadURL } from 'firebase/storage';
// npm install react-date-picker
import DatePicker from 'react-date-picker'

function Contact() {
    // Redirect function for after form submission
    function redirect_Main() {
        var tID = setTimeout(function () {
            window.location.href = "/";
            window.clearTimeout(tID);
            // clear time out.
        }, 2000);
    }
    // Dispatch for Redux 
    const dispatch = useDispatch()

    // useState Hooks to Capture Client Input
    const [show, setShow] = useState(false);
    const [fname, setFName] = useState('');
    const [age, setAge] = useState('0 - 15');
    const [lname, setLName] = useState('');
    const [consultation, setConsultation] = useState('');
    const [size, setSize] = useState(0);
    const [eventDate, setEventDate] = useState('');
    const [email, setEmail] = useState('');
    const [existingnew, setExistingnew] = useState('');
    const [fitting, setFitting] = useState('');
    const [phone, setPhone] = useState('');
    const [shipping, setShipping] = useState('');
    const [comments, setComments] = useState('');
    const [budget, setBudget] = useState('');
    const [height, setHeight] = useState('');
    const [color, setColor] = useState('#000000');
    const [fabric, setFabric] = useState('');
    const [upload1, setUpload1] = useState('')
    const [upload2, setUpload2] = useState('')
    const [upload3, setUpload3] = useState('')
    const [upload4, setUpload4] = useState('')
    const [upload5, setUpload5] = useState('')
    const [upload6, setUpload6] = useState('')
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

    // Get client from global state
    const client = useSelector(state => state.client)

    // Deploys "Submit Successful" Modal, triggered by form submission via handleSubmit function
    const handleShow = () => setShow(true);

    // Close Modal and redirect to Home page
    const handleClose = () => {
        setShow(false)
        redirect_Main()
    };

    // Capture Client Info and Post To Redux & Firebase
    const handleSubmit = e => {
        e.preventDefault();

        // Capture Info from Contact Local State 
        client.FName = fname;
        client.LName = lname;
        client.Age = age;
        client.Consultation = consultation;
        client.Size = size;
        client.EMail = email;
        client.Existingnew = existingnew;
        client.Fitting = fitting;
        client.Phone = phone;
        client.Shipping = shipping;
        client.Purpose = purpose;
        client.Comments = comments;
        client.Budget = budget;
        client.Height = height;
        client.Color = color;
        client.Fabric = fabric;
        client.EventDate = eventDate
        // Turnery Statements
        // If pictures have been uploaded, use the name of the file for the New Client Form in the Firestore DB
        client.Upload1 = upload1.name ? upload1.name : null;
        client.Upload2 = upload2.name ? upload2.name : null;
        client.Upload3 = upload3.name ? upload3.name : null;
        client.Upload4 = upload4.name ? upload4.name : null;
        client.Upload5 = upload5.name ? upload5.name : null;
        client.ClientPic = upload6.name ? upload6.name : null;

        // Create Storage references for each photo in Firebase Storage with file path for organization.
        const storageRef1 = ref(storage, (`images/${lname}-${fname}/InspirationPhoto/${upload1.name}`));
        const storageRef2 = ref(storage, (`images/${lname}-${fname}/InspirationPhoto/${upload2.name}`));
        const storageRef3 = ref(storage, (`images/${lname}-${fname}/InspirationPhoto/${upload3.name}`));
        const storageRef4 = ref(storage, (`images/${lname}-${fname}/InspirationPhoto/${upload4.name}`));
        const storageRef5 = ref(storage, (`images/${lname}-${fname}/InspirationPhoto/${upload5.name}`));
        const storageRef6 = ref(storage, (`images/${lname}-${fname}/ClientPhoto/${upload6.name}`));

        // Send each uploaded photo to Firebase
        const uploadTask1 = uploadBytesResumable(storageRef1, upload1);
        uploadTask1.on(
            "state_changed",
            (snapshot) => { },
            (err) => console.log(err),
            () => {
                getDownloadURL(uploadTask1.snapshot.ref)
            }
        );

        const uploadTask2 = uploadBytesResumable(storageRef2, upload2);
        uploadTask2.on(
            "state_changed",
            (snapshot) => { },
            (err) => console.log(err),
            () => {
                getDownloadURL(uploadTask2.snapshot.ref)
            }
        );

        const uploadTask3 = uploadBytesResumable(storageRef3, upload3);
        uploadTask3.on(
            "state_changed",
            (snapshot) => { },
            (err) => console.log(err),
            () => {
                getDownloadURL(uploadTask3.snapshot.ref)
            }
        );

        const uploadTask4 = uploadBytesResumable(storageRef4, upload4);
        uploadTask4.on(
            "state_changed",
            (snapshot) => { },
            (err) => console.log(err),
            () => {
                getDownloadURL(uploadTask4.snapshot.ref)
            }
        );

        const uploadTask5 = uploadBytesResumable(storageRef5, upload5);
        uploadTask5.on(
            "state_changed",
            (snapshot) => { },
            (err) => console.log(err),
            () => {
                getDownloadURL(uploadTask5.snapshot.ref)
            }
        );

        const uploadTask6 = uploadBytesResumable(storageRef6, upload6);
        uploadTask6.on(
            "state_changed",
            (snapshot) => { },
            (err) => console.log(err),
            () => {
                getDownloadURL(uploadTask6.snapshot.ref)
            }
        );


        // Submit info as "client" and dispatch to redux for global state
        dispatch(actionAddClient(client))


        // deploy "Sumbit Successful" Modal
        handleShow()
        // Redirect to Home page on close

    }

    return (
        <div className="contact">
            < Header />
            <div className="contact-body">
                <div className='contact-form text-center'>

                    <div className='contact-video'>

                        <video className='videoTagContact' id='video2' muted autoPlay loop playsInline>
                            <source src={DressVid} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        <h4 className='contact-text'>Please Fill Out The Form Below <br />To Start Your Order</h4>
                        < KeyboardDoubleArrowDownIcon />
                    </div>
                    <form className="contact-form-inputs" name="Contact" onSubmit={handleSubmit}>
                        <fieldset>
                            <br />
                            <label htmlFor="contact-names" className="form-check">Name </label>
                            <div className="contact-names">
                                <div className="form-check">
                                    <CSSTextField id="fnameinput" label="First" variant="outlined" type="text" placeholder="Your First Name" value={fname} onChange={e => setFName(e.target.value)} required />
                                </div>
                                <div className="form-check">
                                    <CSSTextField id="lnameinput" label="Last" variant="outlined" type="text" placeholder="Your Last Name" value={lname} onChange={e => setLName(e.target.value)} required />
                                </div>
                            </div>
                        </fieldset>
                        <br />
                        <fieldset>
                            <label htmlFor="contact-details" className="form-check">Contact Details </label>
                            <div className="contact-details">
                                <div className="form-check">
                                    <CSSTextField id="phoneinput" label="Phone" variant="outlined" type="tel" placeholder="Your Phone Number" value={phone} onChange={e => setPhone(e.target.value)} required />
                                </div>

                                <div className="form-check">
                                    <CSSTextField label="E-Mail" variant="outlined" type="email" id="emailinput" placeholder="Your E-Mail Address" value={email} onChange={e => setEmail(e.target.value)} required />
                                </div>
                            </div>
                        </fieldset>

                        <fieldset >
                            <div className="contact-dropdown">
                                <div className="selector form-check">
                                    <InputLabel className="form-check">Size *</InputLabel>
                                    <CSSSelect
                                        className="form-check"
                                        name="Select Your Dress Size"
                                        id="size-selector"
                                        value={size}
                                        onChange={e => setSize(e.target.value)}
                                        label="Size"

                                    >
                                        <MenuItem value={0} > 0 </MenuItem>
                                        <MenuItem value={2} > 2 </MenuItem>
                                        <MenuItem value={4} > 4 </MenuItem>
                                        <MenuItem value={6} > 6 </MenuItem>
                                        <MenuItem value={8} > 8 </MenuItem>
                                        <MenuItem value={10} > 10 </MenuItem>
                                        <MenuItem value={12} > 12 </MenuItem>
                                        <MenuItem value={14} > 14 </MenuItem>
                                        <MenuItem value={16} > 16 </MenuItem>
                                    </CSSSelect>
                                    <FormHelperText className="text-center"> Select Your Dress Size </FormHelperText>
                                </div>

                                <div className="selector form-check">
                                    <InputLabel className="form-check"> Age Range * </InputLabel>
                                    <CSSSelect
                                        className="form-check"
                                        name="Select Your Age Range"
                                        id="age-selector"
                                        label="Age *"
                                        value={age}
                                        onChange={e => setAge(e.target.value)}
                                    >
                                        <MenuItem value='0 - 15'> 0 - 15 </MenuItem>
                                        <MenuItem value='16 - 21' > 16 - 21 </MenuItem>
                                        <MenuItem value='22 - 27' > 22 - 27 </MenuItem>
                                        <MenuItem value='28 - 34' > 28 - 34 </MenuItem>
                                        <MenuItem value='35 - 40' > 35 - 40 </MenuItem>
                                        <MenuItem value='41 - 49' > 41 - 49 </MenuItem>
                                        <MenuItem value='50 +' > 50 + </MenuItem>
                                    </CSSSelect>
                                    <FormHelperText className="text-center"> Select Your Age Range </FormHelperText>

                                </div>

                                <div className="selector form-check">
                                    <InputLabel className="form-check">Budget *</InputLabel>
                                    <CSSSelect
                                        className="form-check"
                                        name="Select Your Budget"
                                        id="budget-selector"
                                        label="Budget *"
                                        value={budget}
                                        onChange={e => setBudget(e.target.value)}
                                    >
                                        <MenuItem value='$0 - $499'> $0 - $499 </MenuItem>
                                        <MenuItem value='$500 - $999' > $500 - $999 </MenuItem>
                                        <MenuItem value='$1,000 - $1,499' > $1,000 - $1,499 </MenuItem>
                                        <MenuItem value='$1,500 - $1,999' > $1,500 - $1,999 </MenuItem>
                                        <MenuItem value='$2,000 - $2,999' > $2,000 - $2,999 </MenuItem>
                                        <MenuItem value='$3,000 - $3,999' > $3,000 - $3,999 </MenuItem>
                                        <MenuItem value='$4,000 - $4,999' > $4,000 - $4,999 </MenuItem>
                                        <MenuItem value='$5,000 +' > $5,000 + </MenuItem>
                                    </CSSSelect>
                                    <FormHelperText className="text-center">Select Dress Budget </FormHelperText>

                                </div>

                                <div className="selector form-check">
                                    <InputLabel className="form-check">Height *</InputLabel>
                                    <CSSSelect
                                        className="form-check"
                                        name="Select Your Budget"
                                        id="height-selector"
                                        label="Height *"
                                        value={height}
                                        onChange={e => setHeight(e.target.value)}
                                    >

                                        <MenuItem value={' 4\' 10" & Below'}> 4'10" & Below </MenuItem>
                                        <MenuItem value={' 4\' 11" '}> 4'11" </MenuItem>
                                        <MenuItem value={' 5\' 0" '}> 5' 0" </MenuItem>
                                        <MenuItem value={' 5\' 1" '}> 5' 1" </MenuItem>
                                        <MenuItem value={' 5\' 2" '}> 5' 2" </MenuItem>
                                        <MenuItem value={' 5\' 3" '}> 5' 3" </MenuItem>
                                        <MenuItem value={' 5\' 4" '}> 5' 4" </MenuItem>
                                        <MenuItem value={' 5\' 5" '}> 5' 5" </MenuItem>
                                        <MenuItem value={' 5\' 6" '}> 5' 6" </MenuItem>
                                        <MenuItem value={' 5\' 7" '}> 5' 7" </MenuItem>
                                        <MenuItem value={' 5\' 8" '}> 5' 8" </MenuItem>
                                        <MenuItem value={' 5\' 9" '}> 5' 9" </MenuItem>
                                        <MenuItem value={' 5\' 10" '}> 5' 10" </MenuItem>
                                        <MenuItem value={' 5\' 11" '}> 5' 11" </MenuItem>
                                        <MenuItem value={' 6\' 0" '}> 6' 0" </MenuItem>
                                        <MenuItem value={' 6\' 1" '}> 6' 1" </MenuItem>
                                        <MenuItem value={' 6\' 2" '}> 6' 2" </MenuItem>
                                        <MenuItem value={' 6\' 3" '}> 6' 3" </MenuItem>
                                        <MenuItem value={' 6\' 4" '}> 6' 4" </MenuItem>
                                        <MenuItem value={' 6\' 5" & Above'}> 6' 5" & Above </MenuItem>
                                    </CSSSelect>
                                    <FormHelperText className="text-center">Select Your Height</FormHelperText>

                                </div>

                            </div>
                        </fieldset>

                        <fieldset>

                            <label htmlFor="outfit-selector" id="outfit-selector">Purpose of Outfit <br /> (You Can Choose More Than One Option) </label>
                            <br />
                            <p className="form-check form-check-inline">
                                <input type="checkbox" className="form-check-input" onChange={e => setPurpose({ ...purpose, Birthday: (!purpose.Birthday) })} />
                                <label className="form-check-label label-input">Birthday</label>
                            </p>
                            <p className="form-check form-check-inline">
                                <input type="checkbox" className="form-check-input" onChange={e => setPurpose({ ...purpose, WeddingGuest: (!purpose.WeddingGuest) })} />
                                <label className="form-check-label label-input"> Wedding Guest</label>
                            </p>
                            <p className="form-check form-check-inline">
                                <input type="checkbox" className="form-check-input" onChange={e => setPurpose({ ...purpose, Prom: (!purpose.Prom) })} />
                                <label className="form-check-label label-input"> Prom</label>
                            </p>
                            <p className="form-check form-check-inline">
                                <input type="checkbox" className="form-check-input" onChange={e => setPurpose({ ...purpose, Wedding: (!purpose.Wedding) })} />
                                <label className="form-check-label label-input"> Wedding</label>
                            </p>
                            <p className="form-check form-check-inline">
                                <input type="checkbox" className="form-check-input" onChange={e => setPurpose({ ...purpose, Reception: (!purpose.Reception) })} />
                                <label className="form-check-label label-input"> Reception Dress</label>
                            </p>
                            <p className="form-check form-check-inline">
                                <input type="checkbox" className="form-check-input" onChange={e => setPurpose({ ...purpose, Anniversary: (!purpose.Anniversary) })} />
                                <label className="form-check-label label-input"> Anniversary Dress</label>
                            </p>
                            <p className="form-check form-check-inline">
                                <input type="checkbox" className="form-check-input" onChange={e => setPurpose({ ...purpose, RedCarpet: (!purpose.RedCarpet) })} />
                                <label className="form-check-label label-input"> Red Carpet</label>
                            </p>
                            <p className="form-check form-check-inline">
                                <input type="checkbox" className="form-check-input" onChange={e => setPurpose({ ...purpose, Graduation: (!purpose.Graduation) })} />
                                <label className="form-check-label label-input">  Graduation</label>
                            </p>
                            <p className="form-check form-check-inline">
                                <input type="checkbox" className="form-check-input" onChange={e => setPurpose({ ...purpose, SisofBride: (!purpose.SisofBride) })} />
                                <label className="form-check-label label-input">  Sister Of Bride/Groom</label>
                            </p>
                            <p className="form-check form-check-inline">
                                <input type="checkbox" className="form-check-input" onChange={e => setPurpose({ ...purpose, MotherofBride: (!purpose.MotherofBride) })} />
                                <label className="form-check-label label-input">Mother of Bride/Groom</label>
                            </p>
                            <p className="form-check form-check-inline">
                                <input type="checkbox" className="form-check-input" onChange={e => setPurpose({ ...purpose, EveningWear: (!purpose.EveningWear) })} />
                                <label className="form-check-label label-input">  Evening Wear</label>
                            </p>
                            <p className="form-check form-check-inline">
                                <input type="checkbox" className="form-check-input" onChange={e => setPurpose({ ...purpose, Other: (!purpose.Other) })} />
                                <label className="form-check-label label-input">  Other</label>
                            </p>

                        </fieldset>

                        <fieldset>
                            <label htmlFor="event-date" id="event-date">Event Date </label>
                            <br/>
                            <DatePicker value={eventDate} className="form-check date-picker" onChange={setEventDate}/>
                        </fieldset>

                        <fieldset>
                            <label htmlFor="design-selector" id="design-selector">Existing or New Design? </label>
                            <br />
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="design-selector" id="NewDesign" value={existingnew} onChange={e => setExistingnew("New Design")} />
                                <label htmlFor="NewDesign" className="label-input">
                                    New Design
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="design-selector" id="ExistingDesign" value={existingnew} onChange={e => setExistingnew("Existing Design")} />
                                <label htmlFor="ExistingDesign" className="label-input">
                                    Existing Design
                                </label>
                            </div>

                        </fieldset>

                        <fieldset>
                            <label htmlFor="ColorSelector" id="ColorSelector">Select Dress Color & Fabric <br /> (Please Be As Accurate As Possible)</label>
                            <br />
                            <span>Color</span>
                            <div className="form-check">

                                <input type="color" name="color-selector" id="ColorSelector" value={color} onChange={e => setColor(e.target.value)} />
                            </div>

                            <div className="selector form-check">
                                <InputLabel className="form-check">Fabric </InputLabel>
                                <CSSSelect
                                    className="form-check"
                                    name="Select Your Fabric"
                                    id="Fabric-selector"
                                    label="Fabric *"
                                    value={fabric}
                                    onChange={e => setFabric(e.target.value)}
                                >
                                    <MenuItem value='Ankara' > Ankara </MenuItem>
                                    <MenuItem value='Beaded Rhinestone Lace'> Beaded Rhinestone Lace </MenuItem>
                                    <MenuItem value='Charmeuse' > Charmeuse </MenuItem>
                                    <MenuItem value='Chiffon' > Chiffon </MenuItem>
                                    <MenuItem value='Crepe' > Crepe </MenuItem>
                                    <MenuItem value='Embroidered Lace' > Embroidered Lace </MenuItem>
                                    <MenuItem value='Illusion Mesh' > Illusion Mesh </MenuItem>
                                    <MenuItem value='Mikado' > Mikado </MenuItem>
                                    <MenuItem value='Organza' > Organza </MenuItem>
                                    <MenuItem value='Satin' > Satin </MenuItem>
                                    <MenuItem value='Sequin' > Sequin </MenuItem>
                                    <MenuItem value='Stretch Crepe' > Stretch Crepe </MenuItem>
                                    <MenuItem value='Stretch Velvet' > Stretch Velvet </MenuItem>
                                    <MenuItem value='Tulle' > Tulle </MenuItem>
                                </CSSSelect>
                                <FormHelperText className="text-center">Select Dress Fabric </FormHelperText>

                            </div>
                        </fieldset>

                        <fieldset>
                            <label htmlFor="fitting-selector" id="fitting-selector">Available For A Fitting In Our Atlanta Studio?</label>
                            <br />
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="fitting-selector" value={fitting} onChange={e => setFitting("Atlanta Fitting")} id="Yes" />
                                <label htmlFor="Yes" className="label-input">
                                    Yes
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="fitting-selector" value={fitting} onChange={e => setFitting("No Fitting")} id="No" />
                                <label htmlFor="No" className="label-input">
                                    No
                                </label>
                            </div>
                        </fieldset>

                        <fieldset>
                            <label htmlFor="shipping-selector" id="shipping-selector">Shipping Information</label>
                            <br />
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="shipping-selector" id="Local" value={shipping} onChange={e => setShipping("Local Shipping")} />
                                <label htmlFor="Local" className="label-input">
                                    Local (U.S.)
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="shipping-selector" id="International" value={shipping} onChange={e => setShipping("International Shipping")} />
                                <label htmlFor="International" className="label-input">
                                    International
                                </label>
                            </div>
                        </fieldset>

                        <fieldset>
                            <label htmlFor="consultation-selector" id="consultation-selector">Consultation Preference</label>
                            <p>(Consultation Fee Due Upon Scheduling)</p>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="consultation-selector" id="inPerson" value={consultation} onChange={e => setConsultation("In-Person Consultation")} />
                                <label htmlFor="inPerson" className="label-input">
                                    In Person
                                </label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="consultation-selector" id="Remote" value={consultation} onChange={e => setConsultation("Remote Consultation")} />
                                <label htmlFor="Remote" className="label-input">
                                    Remote
                                </label>
                            </div>

                        </fieldset>

                        <fieldset>
                            <label>Upload 1 Full-Body Photo:</label>
                            <p>(Max Size: 2 MB)</p>
                            <div className="inspiration">
                                <input className="pic-input"
                                    id="fileinput6"
                                    type="file"
                                    alt=''
                                    onChange={e => {
                                        if (e.target.files[0].size > 2097152) {
                                            alert('Chosen Image File Is Too Large.  Please Select A Different File Or Modify File To Meet 2 MB Size Requirement Before Upload.');
                                            setUpload6(null);
                                            document.getElementById('fileinput6').value = ''
                                        } else {
                                            setUpload6(e.target.files[0]);
                                        }
                                    }} />

                            </div>

                        </fieldset>
                        <br />
                        
                        <fieldset>
                            <label>Upload Up To 5 Garment Inspiration Photos:</label>
                            <p>(Max Size: 2 MB)</p>
                            <div className="inspiration">
                                <input className="pic-input"
                                    id="fileinput1"
                                    type="file"
                                    alt=''
                                    onChange={e => {
                                        if (e.target.files[0].size > 2097152) {
                                            alert('Chosen Image File Is Too Large.  Please Select A Different File Or Modify File To Meet 2 MB Size Requirement Before Upload.');
                                            setUpload1(null);
                                            document.getElementById('fileinput1').value = ''
                                        } else {
                                            setUpload1(e.target.files[0]);
                                        }
                                    }} />

                                <input className="pic-input"
                                    id="fileinput2"
                                    type="file"
                                    alt=''
                                    onChange={e => {
                                        if (e.target.files[0].size > 2097152) {
                                            alert('Chosen Image File Is Too Large.  Please Select A Different File Or Modify File To Meet 2 MB Size Requirement Before Upload.');
                                            setUpload2(null);
                                            document.getElementById('fileinput2').value = ''
                                        } else {
                                            setUpload2(e.target.files[0]);
                                        }
                                    }} />
                                <input className="pic-input"
                                    id="fileinput3"
                                    type="file"
                                    alt=''
                                    onChange={e => {
                                        if (e.target.files[0].size > 2097152) {
                                            alert('Chosen Image File Is Too Large.  Please Select A Different File Or Modify File To Meet 2 MB Size Requirement Before Upload.');
                                            setUpload3(null);
                                            document.getElementById('fileinput3').value = ''
                                        } else {
                                            setUpload3(e.target.files[0]);

                                        }
                                    }} />
                                <input className="pic-input"
                                    id="fileinput4"
                                    type="file"
                                    alt=''
                                    onChange={e => {
                                        if (e.target.files[0].size > 2097152) {
                                            alert('Chosen Image File Is Too Large.  Please Select A Different File Or Modify File To Meet 2 MB Size Requirement Before Upload.');
                                            setUpload4(null);
                                            document.getElementById('fileinput4').value = ''
                                        } else {
                                            setUpload4(e.target.files[0]);
                                        }
                                    }} />
                                <input className="pic-input"
                                    id="fileinput5"
                                    type="file"
                                    alt=''
                                    onChange={e => {
                                        if (e.target.files[0].size > 2097152) {
                                            alert('Chosen Image File Is Too Large.  Please Select A Different File Or Modify File To Meet 2 MB Max Size Requirement Before Upload.');
                                            setUpload5(null);
                                            document.getElementById('fileinput5').value = ''
                                        } else {
                                            setUpload5(e.target.files[0]);
                                        }
                                    }} />
                            </div>
                        </fieldset>
                        <br />

                        
                        <div className="col-md-6 comment_box">
                            <textarea name="comments" cols="50" rows="10" placeholder="Inquiry/Comments/Notes"
                                required minLength={5} maxLength={500}
                                className="form-check comments" onChange={e => setComments(e.target.value)} />
                        </div>
                        <br />

                        <div>
                            <button type="submit" className="contact-button" onSubmit={handleSubmit}>Submit</button>
                        </div>
                        <br />

                        <Modal size="md" show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Submission Successful!</Modal.Title>
                            </Modal.Header>
                            <Modal.Body >
                                Thank you for choosing SLR Couture!  We have received your information and will be in touch with you soon! <br /><br /> Upon closing this window, you will be redirected to our home page.
                            </Modal.Body>

                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Exit
                                </Button>
                            </Modal.Footer>
                        </Modal>

                    </form>
                </div>
            </div>
            < Footer />
        </div>

    )
}

export default Contact
