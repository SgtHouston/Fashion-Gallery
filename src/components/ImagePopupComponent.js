import React, { useState }  from "react";
import '../componentcss/ImagePopupComponent.css'
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import Button from '@mui/material/Button';

function ImagePopupComponent({ Img }) {

    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });

    const [imgPopupLaunch, setImgPopupLaunch] = useState(false);

    const handleClick = () => {
        // Toggle ImgPopUp
        setImgPopupLaunch(!imgPopupLaunch)
    }

    let divClass = 'landing-img'
    // Turns off opacity of popup background when launched
    if (imgPopupLaunch === true) {
        divClass = 'landing-img-no-opacity'
    } else {
        divClass = 'landing__img'
    }

    return (  
        <div className={divClass}>
            <img className='img-fluid shadow' src={Img} onClick={handleClick} alt=""/>
            
            { imgPopupLaunch ? 
                (
                    // <div className="dialog-backdrop">
                    //     <dialog className="dialog center text-center" style={{ width: '30rem' }} open onClick={handleClick} >
                    //         <h5 className="dialog-message"> <CloseIcon className="dialog-icon"/> </h5>
                    //         <img className='responsive img-fluid client-image-component ' src={Img}  onClick={handleClick} alt="" />
                    //     </dialog>
                    // </div>

                    <Dialog
                        className="dialog-backdrop"
                        open={imgPopupLaunch}
                        TransitionComponent={Transition}
                        keepMounted
                        aria-describedby="alert-dialog-slide-description"
                    >
                        <DialogContent className='dialog-content'>
                            <Button className="dialog-icon-button dialog-icon-button2" onClick={handleClick}> <CloseIcon className="dialog-icon"/></Button>
                            <img className='responsive client-image-component' src={Img}  onClick={handleClick} alt="" />
                        </DialogContent>
                    </Dialog>
                ) 
                : 
                ''
            }
        </div>
    );
}

export default ImagePopupComponent;

