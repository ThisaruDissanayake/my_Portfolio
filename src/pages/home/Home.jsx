import React from "react";
import Profile from "../../assets/home.png"
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";

import "./home.css";

const Home = () => {
    return (
        <section className="home section grid">
            <img src={Profile} alt='' className="home__img" />

            <div className="home__content">
                <div className="home__data">
                    <h1 className="home__title"><span>I'm Maleesha Dissanayake.</span>   Full stack devoloper</h1>
                    <p className="home__discription">Hello there! I'm Maleesha Dissanayake, a passionate third-year Computer Engineering undergraduate at the Faculty of Engineering, University of Ruhuna. I'm happy to share a bit about my academic journey with you.
                        I'm interested in computer programming, web development, ML and AI application development, mobile app development, networking , software development and UI/UX Design. And also I'm interested The Cybersecurity  side as well as.
                    </p>

                    <Link to='/about' className="button">
                        More About me{'  '}
                        <span className="button__icon"><FaArrowRight/></span>
                    </Link>

                </div>
            </div>

            <div className="color__block"></div>
        </section>
    )
}

export default Home