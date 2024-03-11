import React from "react";
import parse from 'html-react-parser'



const Resume = ({icon,year,title,desc})=> {

    
    return(
       <div className="resume__item"style={{ animation: 'fadeIn 0.5s ease-in-out' }}>
        <div className="resume__icon">{icon}</div>
            <span className="resume__date">{year}</span>
            <h3 className="resume__subtitle">{parse(title)}</h3>
            <p className="resume__description">{desc}</p>
        
       </div>
    )
}

export default Resume