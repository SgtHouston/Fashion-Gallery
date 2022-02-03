import React, { useState }  from "react";
import '../componentcss/ImagePopupClient.css'


function ImagePopupClient({ Img }) {

    const [imgPopupLaunch, setImgPopupLaunch] = useState(false);

    const handleClick = () => {
        // Toggle ImgPopUp
        setImgPopupLaunch(!imgPopupLaunch)
    }


    return (  
        <div className ='pic-div'>
            <img className ='client-pic' src={Img} onClick={handleClick} alt=""/>
            { imgPopupLaunch ? 
                    (
                    <div className="dialog-backdrop">
                        <dialog className="dialog center" open style={{ maxHeight: '100vh' }} onClick={handleClick} >
                            <img className='img-fluid' src={Img} style={{ maxHeight: '100vh' }} onClick={handleClick} alt="" />
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

