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
                    <dialog className="dialog center" style={{ width: '30rem' }} open onClick={handleClick} closeButton>
                        <img className='img-fluid' src={Img} onClick={handleClick} alt="" />
                    </dialog>
                ) 
                : 
                ''
            }
        </div>
    );
}

export default ImagePopupComponent;

