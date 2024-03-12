import React, { useState, useEffect } from "react";
import Profile from "../../assets/home.png"
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";

import "./home.css";

const Home = () => {

    const roles = ["Full Stack Developer", "UI/UX Designer",];
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }, 2000); // Change role every 2 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="home section grid">
            <img src={Profile} alt='' className="home__img" />

            <div className="home__content">
                <div className="home__data">
                    <h1 className="home__title"><span>I'm Thisaru Dissanayake.</span>    {roles[roleIndex]
                                .split("")
                                .map((letter, index) => (
                                    <sp
                                        key={index}
                                        style={{
                                            animationDelay: `${index * 0.1}s`,
                                            color: "var(--title-color)",
                                        }}
                                    >
                                        {letter}
                                    </sp>
                                ))}</h1>
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