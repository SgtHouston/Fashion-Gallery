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
    // const channels = useSelector(state => state.channels)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className='OffCanvasChannels'>

            <MenuIcon className='LaunchBtn' variant='primary' onClick={handleShow}/>
    
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
                        <div style={{ borderTop: "3px solid black", marginLeft: 3, marginRight: 3 }}></div>
                        <br/>

                        <Link className="Channel"
                                to={'/about'}>
                                <p className="Channelname text-center"  onClick={handleClose}> ABOUT</p>
                        </Link>
                        <div style={{ borderTop: "3px solid black", marginLeft: 3, marginRight: 3 }}></div>
                        <br/>

                        <Link className="Channel"
                                to={'/lookbook'}>
                                <p className="Channelname text-center" onClick={handleClose}> LOOKBOOK</p>
                        </Link>
                        <div style={{ borderTop: "3px solid black", marginLeft: 3, marginRight: 3 }}></div>
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