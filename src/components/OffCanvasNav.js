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

            <MenuIcon className='LaunchBtn'   style={{ backgroundColor: 'rgba(255, 255, 255, 0.357)'}} variant='primary' onClick={handleShow}/>
    
            <Offcanvas className="OffCanvasMain" show={show} onHide={handleClose}>
                <Offcanvas.Header className="closeBtn" closeButton>
                    <Offcanvas.Title className="Offcanvas-Title"></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="Channels">

                        <Link className="Channel"
                                to={'/'}>
                                <p className="Channelname text-center" onClick={handleClose}> Home</p>
                        </Link>
                        <div style={{ borderTop: "3px solid #e9baba", marginLeft: 3, marginRight: 3 }}></div>
                        <br/>

                        <Link className="Channel"
                                to={'/about'}>
                                <p className="Channelname text-center"  onClick={handleClose}> About</p>
                        </Link>
                        <div style={{ borderTop: "3px solid #e9baba", marginLeft: 3, marginRight: 3 }}></div>
                        <br/>

                        <Link className="Channel"
                                to={'/gallery'}>
                                <p className="Channelname text-center" onClick={handleClose}> Gallery</p>
                        </Link>
                        <div style={{ borderTop: "3px solid #e9baba", marginLeft: 3, marginRight: 3 }}></div>
                        <br/>

                        <Link className="Channel"
                                to={'/contact'}>
                                <p className="Channelname text-center" onClick={handleClose}> Contact Us</p>
                        </Link>
                        {/* <div style={{ borderTop: "3px solid #e9baba", marginLeft: 3, marginRight: 3 }}></div>
                        <br/> */}

                    </div>
                </Offcanvas.Body>
            </Offcanvas>
            
        </div>
    )
}

export default OffCanvasNav