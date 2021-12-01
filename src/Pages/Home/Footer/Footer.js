import React, { useState } from 'react';
import './Footer.css';
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
    return (
        <div className="footer text-center">
             <img src={img} alt="" style={{ width: '100px', height: '100px'}} className='mx-auto rounded-circle img-fluid' />
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
                <a href="https://drive.google.com/file/d/18C3AF2ALcV1Xyvz9SPLe7xwg3jyEjTtM/view?usp=sharing">
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