import React from "react";
import { behance } from "../../data";
import BehanceItem from "../../components/BehanceItem";
import "./behance.css"
import { FaArrowRight } from "react-icons/fa";

const Behance = ()=> {
    return(
        <section className="behance section">
            <h2 className="section__title">My <span>Behance</span></h2>
            {/* <Link to='/about' className="button">
                        More About me{'  '}
                        <span className="button__icon"><FaArrowRight/></span>
                    </Link> */}
            <a href='https://www.behance.net/thisarudissanayake'><button  className="button1" >See my Behance for More Details{" "}<span className="button1__icon"><FaArrowRight/></span></button></a>
            {/*  */}
            <div className="behance__container grid">
                {behance.map((item)=>{
                    return <BehanceItem key={item.id}{...item}/>
                })}
            </div>
        </section>
    )
}

export default Behance