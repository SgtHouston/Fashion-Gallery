import React, { useState }  from "react";
import '../componentcss/ImagePopupComponent.css'



function ImagePopupComponent({ Img }) {

    const [imgPopupLaunch, setImgPopupLaunch] = useState(false);

    const handleClick = () => {
        // Toggle ImgPopUp
        setImgPopupLaunch(!imgPopupLaunch)
    }


    return (  
        <div className="landing__img">
            <img className='img-fluid' src={Img} onClick={handleClick} alt=""/>
            
            { imgPopupLaunch ? 
                    (
                    <div className="dialog-backdrop">
                        <dialog className="dialog center" style={{ width: '30rem' }} open onClick={handleClick} >
                            <img className='img-fluid client-image' src={Img} onClick={handleClick} alt="" />
                        </dialog>
                    </div>
                ) 
                : 
                ''
            }
        </div>
    );
}

export default ImagePopupComponent;

