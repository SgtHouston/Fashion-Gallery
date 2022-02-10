import React, { useState }  from "react";
import '../componentcss/ImagePopupComponent.css'



function ImagePopupComponent({ Img }) {

    const [imgPopupLaunch, setImgPopupLaunch] = useState(false);

    const handleClick = () => {
        // Toggle ImgPopUp
        setImgPopupLaunch(!imgPopupLaunch)
    }

    let divClass = 'landing__img'

    if (imgPopupLaunch === true) {
        divClass = 'landing__img_no-opacity'
    } else {
        divClass = 'landing__img'
    }

    return (  
        <div className={divClass}>
            <img className='img-fluid' src={Img} onClick={handleClick} alt=""/>
            
            { imgPopupLaunch ? 
                    (
                    <div className="dialog-backdrop">
                        <dialog className="dialog center text-center" style={{ width: '30rem' }} open onClick={handleClick} >
                            <h5 className="dialog-message">Click Picture To Close</h5>
                            <img className='img-fluid client-image ' src={Img} style={{ maxHeight: '90vh' }} onClick={handleClick} alt="" />
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

