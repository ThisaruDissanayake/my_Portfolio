import React from "react";
import { stats } from "../data";
import parse from  'html-react-parser';


const Stats = ()=> {
    return(
        <>
        {stats.map(({no,title,title2},index)=>{
            return(
                <div className="stats__box" key={index}>
                    <h3 className="stats__no">{no}</h3>
                    <p className="stats__title">{parse(title)}</p>
                    <p className="stats__title1">{title2}</p>
                </div>
            )
        })}
        </>
    )
}

export default Stats