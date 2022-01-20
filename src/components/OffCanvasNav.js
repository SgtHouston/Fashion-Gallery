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
    
    const [show, setShow] = useState(false);
    const [showLaunch, setShowLaunch] = useState(true);
    const handleClose = () => {
        setShow(false);
        setShowLaunch(true);
    }
    const handleShow = () => {
        setShow(true);
        setShowLaunch(false);
    }
    
    return (
        <div className='OffCanvasChannels'>
            
            { showLaunch ?  <MenuIcon className='LaunchBtn' display={showLaunch} variant='primary' onClick={handleShow}/> : <div className="MenuPlaceholder"></div>  }
            
            <Offcanvas className="OffCanvasMain" show={show} onHide={handleClose}>
                <Offcanvas.Header className="closeBtn" closeButton>
                    <Offcanvas.Title className="Offcanvas-Title"></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="Channels">

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
                                to={'/contact'}>
                                <p className="Channelname text-center" onClick={handleClose}> CONTACT US</p>
                        </Link>
                        {/* <div style={{ borderTop: "3px solid #D1E8E2", marginLeft: 3, marginRight: 3 }}></div>
                        <br/> */}

                    </div>
                </Offcanvas.Body>
            </Offcanvas>
            
        </div>
    )
}

export default OffCanvasNav