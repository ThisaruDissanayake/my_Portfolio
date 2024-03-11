import React, {useState} from "react";
import Close from "../assets/close.svg"



const PortfolioItem = ({img,title,details,desc1})=> {
    const [modal,setModal]=useState(false);

    const toggleModal =()=> {
        setModal(! modal);
    };
    return(
        
        <div className="portfolio__item">
            <img src={img} alt='' className="portfolio__img"/>

            <div className="portfolio__hover" onClick={toggleModal}>
                <h3 className="portfolio__title">{title}</h3>
            </div>

            {modal && (
                <div className="portfolio__modal">
                <div className="portfolio__modal-content">
                    <img src={Close} alt='' className="modal__close" onClick={toggleModal}></img>

                    <h3 className="modal__title">{title}</h3>

                    <ul className="modal__list grid">
                        {details.map(({icon,title,desc,desc1},index) =>{
                            return(
                                <li className="modal__item" key={index}>
                                    <span className="item_icon">{icon}</span>

                                    <div>
                                        <span className="item__title">{title}</span>
                                        <span className="item__details">{desc}</span>
                                    </div>
                                    {/* <p className="item__details">{desc1}</p> */}
                                </li>
                            )
                        })}
                    </ul>
                    <ul className="modal__list1 grid">
                        {details.map(({desc1},index) =>{
                            return(
                                <p className="item__details">{desc1}</p>
                                
                            )
                        })}
                    </ul>
                    <p className="item__detail">{desc1}</p>
                    <img src={img} alt='' className="modal__img"></img>
                    
                </div>
               
            </div>
            
            )}
            
        </div>
    )
}

export default PortfolioItem