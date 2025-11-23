import React, { useState, useTransition, startTransition }  from "react";
import '../componentcss/ImagePopupClient.css'
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import Button from '@mui/material/Button';


function ImagePopupClient({ Img }) {

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

    let divClass = 'pic-div'

    // Turns off opacity of background when popup launched
    if (imgPopupLaunch === true) {
        divClass = 'pic-div_no-opacity'
    } else {
        divClass = 'pic-div'
    }


    return (  
        <div className ={divClass}>
            <img 
                className='client-pic' 
                src={Img} 
                onClick={handleClick} 
                onKeyDown={(e) => e.key === 'Enter' && handleClick(e)}
                tabIndex={0}
                role="button"
                alt="Client work - click to view larger"
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
                            <img className='responsive img-fluid client-image-client' src={Img}  onClick={handleClick} alt="" />
                        </DialogContent>
                    </Dialog>
                ) 
                : 
                ''
            }
        </div>
    );
}

export default ImagePopupClient;

