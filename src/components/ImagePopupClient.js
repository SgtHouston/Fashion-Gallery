import React, { useState }  from "react";
import '../componentcss/ImagePopupClient.css'
import CloseIcon from '@mui/icons-material/Close';


function ImagePopupClient({ Img }) {

    const [imgPopupLaunch, setImgPopupLaunch] = useState(false);

    const handleClick = () => {
        // Toggle ImgPopUp
        setImgPopupLaunch(!imgPopupLaunch)
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
            <img className ='client-pic' src={Img} onClick={handleClick} alt=""/>
            { imgPopupLaunch ? 
                (
                    <div className="dialog-backdrop">
                        <dialog className="dialog center" open style={{ width: '30rem' }} onClick={handleClick} >
                            <h5 className="dialog-message"><CloseIcon className="dialog-icon"/> </h5>
                            <img className='responsive img-fluid client-image-client' src={Img}  onClick={handleClick} alt="" />
                        </dialog>
                    </div>
                ) 
                : 
                ''
            }
        </div>
    );
}

export default ImagePopupClient;

