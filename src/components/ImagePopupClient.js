import React, { useState }  from "react";
// import '../componentcss/ImagePopupClient.css'



function ImagePopupClient({ Img }) {

    const [imgPopupLaunch, setImgPopupLaunch] = useState(false);

    const handleClick = () => {
        // Toggle ImgPopUp
        setImgPopupLaunch(!imgPopupLaunch)
    }


    return (  
        <div className ='client-pic'>
            <img src={Img} onClick={handleClick} alt=""/>
            
            { imgPopupLaunch ? 
                (
                    <dialog className="dialog" style={{ position: "absolute", width: '30rem'}} open onClick={handleClick} >
                        <img className='img-fluid' src={Img} onClick={handleClick} alt="" />
                    </dialog>
                ) 
                : 
                ''
            }
        </div>
    );
}

export default ImagePopupClient;
