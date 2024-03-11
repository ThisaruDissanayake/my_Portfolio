import React from "react";
import { catogories } from "../data";
import parse from  'html-react-parser';


const Catogories = ()=> {
    return(
        <>
        {catogories.map(({no,title},index)=>{
            return(
                <div className="catagory__box" key={index}>
                    <h3 className="catagory__no">{no}</h3>
                    <p className="stats__title">{parse(title)}</p>
                </div>
            )
        })}
        </>
    )
}

export default Catogories