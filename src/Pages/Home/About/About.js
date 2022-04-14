import React from 'react';
import { Col, ProgressBar, Row } from 'react-bootstrap';
import img1 from '../../../Images/banner/banner-img.jpg';
import Typical from 'react-typical';
import './About.css';
import resume from '../../../File/PROTTAY ROY ARNOB.pdf'
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaBootstrap } from 'react-icons/fa';

const About = () => {
    return (
        <div className='p-5 mt-4' style={{ backgroundColor: '#13131f' }}>
            <Row xs={1} md={2} lg={2} className="g-4">
                <Col className='about-details'>
                    <h2>About Me</h2>
                    <div>
                        <hr className="hr-a" />
                        <hr className="hr-a" />
                    </div>
                    <h4>I'm Prottay Roy Arnob</h4>
                    <h1>
                        <Typical
                            loop={Infinity}
                            steps={['Web Developer', 1000, 'Full Stack Developer', 1000, 'MERN Stack Developer', 1000, 'React Developer', 1000]}
                            wrapper="p"
                        />
                    </h1>
                    <p>I'm passionate at web Development. I'm hard working and efficient web developer. My goal is to create the best website which comply with latest design and technologies. I'm doing my work honestly. I like to learn different things and want to build a foundation of my knowledge.</p>
                    <div>
                        <Row xs={1} md={2} lg={2}  className="g-2">
                           <Col> 
                              <h6>Email: prottayroyarnob@gmail.com</h6>
                           </Col>
                           <Col> 
                             <h6>Phone: 01763515898</h6>
                           </Col>
                           <Col> 
                              <h6>Address: Mymensingh, Bangladesh</h6>
                           </Col>
                           <Col> 
                           <button className="btn btn-outline-info m-2"> 
                            <a className="text-decoration-none text-light" href={resume} download="Prottay.pdf">Download Resume</a>
                           </button> 
                           </Col>
                        </Row>
                    </div>
                    <div>
                        <h5>My Skills</h5>
                        <div>
                            <Row xs={1} md={3} lg={3} className="g-2">
                                <Col>
                                    <p><FaHtml5 /></p>
                                    <span>HTML 95%<ProgressBar animated now={95} /></span>
                                </Col>

                                <Col>
                                    <p><FaCss3Alt /></p>
                                    <span>CSS3 95%<ProgressBar animated now={95} /></span>
                                </Col>

                                <Col>
                                    <p><FaJs /></p>
                                    <span>Javascript 95%<ProgressBar animated now={95} /></span>
                                </Col>

                                <Col>
                                    <p><FaReact /></p>
                                    <span>react 95%<ProgressBar animated now={95} /></span>
                                </Col>

                                <Col>
                                    <p><FaNodeJs /></p>
                                    <span>Nodejs 95%<ProgressBar animated now={95} /></span>
                                </Col>

                                  <Col>
                                    <p><FaBootstrap /></p>
                                    <span>Bootstrap 95%<ProgressBar animated now={95} /></span>
                                </Col>

                                <Col> 
                                <p><FaCss3Alt /></p>
                                    <span>MongoDB 95%<ProgressBar animated now={95} /></span>
                                </Col>

                                <Col> 
                                <p><FaCss3Alt /></p>
                                    <span>Firebase 95%<ProgressBar animated now={95} /></span>
                                </Col>

                                <Col>
                                <p><FaCss3Alt /></p>
                                    <span>MaterialUi 95%<ProgressBar animated now={95} /></span>
                                </Col>

                            </Row>
                        </div>
                    </div>
                </Col>
                <Col>
                    <img src={img1} alt="" style={{}} className='rounded img-fluid' />
                </Col>
            </Row>
        </div>
    );
};

export default About;