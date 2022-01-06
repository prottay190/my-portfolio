import React, { useEffect, useState } from 'react';
import './Footer.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img from'../../../Images/footer/20211127_230649.jpg';
import Contact from './Contact/Contact';


const Footer = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        console.log("object");
        setIsOpen(true);
      }
    
      function closeModal() {
        setIsOpen(false);
      }
      useEffect (() => {
        AOS.init({
            offset: 100,
            duration: 1000,
            easing: 'ease'
        });
    })
    return (
        <div className="footer text-center">
            <div data-aos="zoom-in">
            <img src={img} alt="" style={{ width: '100px', height: '100px'}} className='mx-auto rounded-circle img-fluid' />
            </div>
            <p className="lead font-weight-bold ml-5 mt-2">Web Developer</p>  
            <div className="d-flex justify-content-center">
              <div>
                <button
                  onClick={openModal}
                  className="btn btn-outline-info m-2"
                >
                  Send Massage
                </button>
                <Contact 
                    modalIsOpen={modalIsOpen}
                    closeModal={closeModal}
                />
                
              </div>
              <div>
                <a href="https://drive.google.com/file/d/1f8psTzX0fwH1cEtlbkz-GSPgc5zHTjQ6/view?usp=sharing">
                  <button className="btn btn-info m-2">
                    <strong>Download Resume</strong>
                  </button>
                </a>
              </div>
            </div>
            <div className="p-3">
                <p>© Copyright 2021 - All Rights Reserved By Prottay Roy Arnob</p>
            </div>
        </div>
    );
};

export default Footer;