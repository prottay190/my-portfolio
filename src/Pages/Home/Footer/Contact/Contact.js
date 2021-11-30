import React, { useState } from 'react';
import Modal from "react-modal";
import emailjs from "emailjs-com";

const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "40%",
    },
  };

  Modal.setAppElement("#root");

  const Contact = ({ modalIsOpen, closeModal }) => {

    function sendEmail(e) {
      e.preventDefault();
  
      emailjs.sendForm('service_6dotg47', 'template_g1b8y0i', e.target, 'user_rIWn6YLpcNTX1OJDh6Q5I')
        .then(
          (result) => {
            alert("Mail send successfully");
            // e.target.value = " ";
            closeModal();
  
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }


    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

            <form
            onSubmit={sendEmail}
            >
            <div className="form-group">
            <input
            required
            type ="email"
            name="email"
            placeholder="Enter Your Email"
            className="form-control"
            id="email"
            />
            </div>
            <div className="form-group">
            <input
            required
            type ="text"
            name="name"
            placeholder="Enter Your Name"
            className="form-control"
            id="name"
            />
            </div>
            <div className="form-group">
            <input
            required
            type ="text"
            name="subject"
            placeholder="Enter Your Subject"
            className="form-control"
            id="subject"
            />
            </div>
            <div className="form-group">
            <textarea
            required
            className="form-control"
            name="message"
            id="textarea"
            cols="20"
            rows="6"
            ></textarea>
            </div>
            <button type ="submit" className="btn btn-info">
            Submit
            </button>
            </form>
            </Modal>
        </div>
    );
};

export default Contact;