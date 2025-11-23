import React, { useState, useTransition, startTransition }  from "react";
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
    const [isPending, startTransitionHook] = useTransition();

    const handleClick = () => {
        startTransition(() => {
            setImgPopupLaunch(!imgPopupLaunch);
        });
    }

    let divClass = 'landing-img'
    // Turns off opacity of popup background when launched
    if (imgPopupLaunch === true) {
        divClass = 'landing-img-no-opacity'
    } else {
        divClass = 'landing-img'
    }

    return (  
        <div className={divClass}>
            <img 
                className='img-fluid shadow' 
                src={Img} 
                onClick={handleClick} 
                onKeyDown={(e) => e.key === 'Enter' && handleClick(e)}
                tabIndex={0}
                role="button"
                alt="Fashion gallery item - click to view larger"
                style={{ opacity: isPending ? 0.7 : 1 }}
            />
            
            { imgPopupLaunch ? 
                (
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

