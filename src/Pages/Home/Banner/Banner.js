import React, { useEffect } from 'react';
import './Banner.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Banner = () => {
    useEffect (() => {
        AOS.init({
            offset: 100,
            duration: 1000,
            easing: 'ease'
        });
    })
    return (
        <div className="banner-container" data-aos="fade-right" data-aos-offset="400"
        data-aos-easing="ease-in-sine">
            <div className="text-center banner-text">
                <h2>Hello, I  am <span style={{ color: '#00FFFF' }}>Prottay</span> </h2>
                <p>I am a junior web developer.<br /> A self-motivated, energetic and active person,<br />
                I want to a perfect aiding-hand of your organization <br />
                    according to my qualifications during my job.</p>
            </div>
            <div className="text-center social" style={{marginBottom: '180px'}}>
            <a href="https://www.linkedin.com/in/prottay-roy-arnob-791181213/" target="_blank"> <FaLinkedin /></a>  
            <a href="https://github.com/prottay190" target="_blank"><FaGithub /></a>  
           <a href="https://www.facebook.com/aume.roy" target="_blank"><FaFacebook /></a>  
            </div>
        </div>
    );
};

export default Banner;