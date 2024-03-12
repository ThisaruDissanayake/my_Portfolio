import React, {useState} from "react";




const BehanceItem
 = ({img,title,details,desc1})=> {
    const [modal,setModal]=useState(false);

    const toggleModal =()=> {
        setModal(! modal);
    };
    return(
        
        <div className="behance__item">
            <img src={img} alt='' className="behance__img"/>

            <div className="behance__hover" >
                <h3 className="behance__title">{title}</h3>
            </div>

            
            
        </div>
    )
}

export default BehanceItem
