import { Link } from 'react-router-dom';
import React, { useState } from 'react';
// npm install react-bootstrap@next bootstrap@5.1.1
import { Offcanvas } from 'react-bootstrap';
// import { useSelector } from 'react-redux';
// npm install @mui/material
// import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import MenuIcon from '@mui/icons-material/Menu';

import '../componentcss/OffCanvasNav.css';


function OffCanvasNav() {
    
    // Deploys OffCanvas Nav
    const [show, setShow] = useState(false);

    // Removes OffCanvasNav Launch button from 
    // behind nav when deployed so video can be seen,
    const [showLaunch, setShowLaunch] = useState(true);

    const handleClose = () => {
        // Close Nav
        setShow(false);
        // Re-display launch button
        setShowLaunch(true);
    }
    const handleShow = () => {
        // Open Nav
        setShow(true);
        // Remove Launch Button
        setShowLaunch(false); 
    }
    
    return (
        <div className='OffCanvasChannels'>
            {/* If True, display launch button, if false replace with placeholder div.   */}
            { showLaunch ? <MenuIcon className='LaunchBtn' show={{showLaunch}} variant='primary' onClick={handleShow}/> : <div className="MenuPlaceholder"></div>  }
            <Offcanvas className="OffCanvasMain" show={show} onHide={handleClose}>
                <Offcanvas.Header className="closeBtn" closeButton>
                    <Offcanvas.Title className="Offcanvas-Title"></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="Channels">
                        {/*  */}
                        <Link className="Channel"
                                to={'/'}>
                                <p className="Channelname text-center" onClick={handleClose}> HOME</p>
                        </Link>
                        <div style={{ borderTop: "3px solid #545B5A", marginLeft: 30, marginRight: 30 }}></div>
                        <br/>

                        <Link className="Channel"
                                to={'/about'}>
                                <p className="Channelname text-center"  onClick={handleClose}> ABOUT</p>
                        </Link>
                        <div style={{ borderTop: "3px solid #545B5A", marginLeft: 30, marginRight: 30 }}></div>
                        <br/>

                        <Link className="Channel"
                                to={'/lookbook'}>
                                <p className="Channelname text-center" onClick={handleClose}> LOOKBOOK</p>
                        </Link>
                        <div style={{ borderTop: "3px solid #545B5A", marginLeft: 30, marginRight: 30 }}></div>
                        <br/>

                        <Link className="Channel"
                                to={'/clients'}>
                                <p className="Channelname text-center" onClick={handleClose}> CLIENT GALLERY </p>
                        </Link>
                        <div style={{ borderTop: "3px solid #545B5A", marginLeft: 30, marginRight: 30 }}></div>
                        <br/>

                        <Link className="Channel"
                                to={'/consultations'}>
                                <p className="Channelname text-center" onClick={handleClose}> CONSULTATIONS </p>
                        </Link>
                        <div style={{ borderTop: "3px solid #545B5A", marginLeft: 30, marginRight: 30 }}></div>
                        <br/>

                        <Link className="Channel"
                                to={'/contact'}>
                                <p className="Channelname text-center" onClick={handleClose}> START ORDER </p>
                        </Link>
                        <div style={{ borderTop: "3px solid #545B5A", marginLeft: 30, marginRight: 30 }}></div>
                        <br/>

                        <Link className="Channel"
                                to={'/faqs'}>
                                <p className="Channelname text-center" onClick={handleClose}> FAQs</p>
                        </Link>
                        

                        

                    </div>
                </Offcanvas.Body>
            </Offcanvas>
            
        </div>
    )
}

export default OffCanvasNav;
