import React, { useState }  from "react";
import '../componentcss/ImagePopupClient.css'


function ImagePopupClient({ Img }) {

    const [imgPopupLaunch, setImgPopupLaunch] = useState(false);

    const handleClick = () => {
        // Toggle ImgPopUp
        setImgPopupLaunch(!imgPopupLaunch)
    }

    let divClass = 'pic-div'

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
                        {/* one style for mobile/one for desktop */}
                        <dialog className="dialog center" open style={{ width: '30rem' }} onClick={handleClick} >
                            <img className='img-fluid client-image' src={Img} style={{ minHeight: '100%' }} onClick={handleClick} alt="" />
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

