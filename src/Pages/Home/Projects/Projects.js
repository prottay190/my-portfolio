import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import img1 from '../../../Images/projects/car-sales.png';
import img2 from '../../../Images/projects/tourism.png';
import img3 from '../../../Images/projects/doctors-services.png';
import img4 from '../../../Images/projects/Screenshot (91).png';
import { Card, Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Projects = () => {
    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 1000,
            easing: 'ease'
        });
    })
    return (
        <div id="projects" className="Projects container py-3">
            <div>
                <div className="header text-center">
                    <h2 style={{ color: '#4863A0' }}>MY PROJECTS</h2>
                </div>
                <div className="wrapper">
                    <div className="divider div-transparent div-dot"></div>
                </div>
            </div>

            <Row xs={1} md={2} lg={3} className="g-4">
                <Col data-aos="fade-right" data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                    <Card>
                        <Card.Img variant="top" src={img1} />
                        <Card.Body>
                            <h4 className="card-title">Car Sales House Website</h4>
                            <Card.Text>
                                <p className="card-text">Single page web application with the dashboard. A customer can order and review for service. An admin can see orders, add a new service,  from the dashboard.</p>
                            </Card.Text>
                            <div className="technology mb-2"><span>React</span> <span>Material UI</span> <span>React Router</span> <span>Node.js</span> <span>Express.js</span> <span>MongoDB</span>  <span>Firebase</span> <span>Heroku</span></div>

                            <a href='https://github.com/prottay190/car-sales-website-client' target="_blank" >
                                <button type="button" className="btn btn-secondary btn-block p-button">
                                    <FaGithub className="icon" />
                                    GitHub Link</button>
                            </a>

                            <a href='https://car-sales-website.web.app/' target="_blank">
                                <button type="button" className="btn btn-primary btn-block p-button">
                                    <FaExternalLinkAlt className="icon" />
                                    Live site</button>
                            </a>
                            <Link to="/project1"><Button style={{ padding: '10px 100px', background: '#FA8072' }}>Details</Button></Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col data-aos="fade-up" data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                    <Card>
                        <Card.Img variant="top" src={img2} />
                        <Card.Body>
                            <h4 className="card-title">Tourism Website</h4>
                            <Card.Text>
                                <p className="card-text">Single page web application. A customer can order and review for service. LogIn Customer can see orders, add Service, contact us.</p>
                            </Card.Text>
                            <div className="technology mb-2"><span>React</span> <span>React Bootstrap</span> <span>React Router</span> <span>Node.js</span> <span>Express.js</span> <span>MongoDB</span>  <span>Firebase</span> <span>Heroku</span></div>

                            <a href='https://github.com/prottay190/tourism-website-client' target="_blank" >
                                <button type="button" className="btn btn-secondary btn-block p-button">
                                    <FaGithub className="icon" />
                                    GitHub Link</button>
                            </a>

                            <a href='https://tourism-website-ab239.web.app/' target="_blank">
                                <button type="button" className="btn btn-primary btn-block p-button">
                                    <FaExternalLinkAlt className="icon" />
                                    Live site</button>
                            </a>
                            <Link to="/project2"><Button style={{ padding: '10px 100px', background: '#FA8072' }}>Details</Button></Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col data-aos="fade-left" data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                    <Card>
                        <Card.Img variant="top" src={img3} />
                        <Card.Body>
                            <h4 className="card-title">AR Health Care website</h4>
                            <Card.Text>
                                <p className="card-text">A static healthcare website with responsive layouts for every kind of device. The banner section builds with a carousel slider.</p>
                            </Card.Text>
                            <div className="technology mb-2"><span>React</span> <span>React Bootstrap</span> <span>React Router</span> <span>Node.js</span> <span>Express.js</span> <span>MongoDB</span>  <span>Firebase</span> <span>Heroku</span></div>

                            <a href='https://github.com/prottay190/ar-healthcare-center' target="_blank" >
                                <button type="button" className="btn btn-secondary btn-block p-button">
                                    <FaGithub className="icon" />
                                    GitHub Link</button>
                            </a>

                            <a href='https://ar-healthcare-website.web.app/' target="_blank">
                                <button type="button" className="btn btn-primary btn-block p-button">
                                    <FaExternalLinkAlt className="icon" />
                                    Live site</button>
                            </a>
                            <Link to="/project3"><Button style={{ padding: '10px 100px', background: '#FA8072' }}>Details</Button></Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col data-aos="fade-right" data-aos-offset="300"
                    data-aos-easing="ease-in-sine">
                    <Card>
                        <Card.Img variant="top" src={img4} />
                        <Card.Body>
                            <h4 className="card-title">Solotrip Website</h4>
                            <Card.Text>
                                <p className="card-text"><span style={{fontSize: '17px', fontWeight: 'bold', color: '#696969'}}>This is a team project.</span> Single page web application with the dashboard. A customer can order and review for service. An admin can see orders, add a new service,  from the dashboard.</p>
                            </Card.Text>
                            <div className="technology mb-2"><span>React</span> <span>React Bootstrap</span> <span>React Router</span> <span>Node.js</span> <span>Express.js</span> <span>MongoDB</span>  <span>Firebase</span> <span>Heroku</span></div>

                            <a href='https://github.com/prottay190/solotrip-client' target="_blank" >
                                <button type="button" className="btn btn-secondary btn-block p-button">
                                    <FaGithub className="icon" />
                                    GitHub Link</button>
                            </a>

                            <a href='https://solo-trip.web.app/' target="_blank">
                                <button type="button" className="btn btn-primary btn-block p-button">
                                    <FaExternalLinkAlt className="icon" />
                                    Live site</button>
                            </a>
                            <Link to="/project4"><Button style={{ padding: '10px 100px', background: '#FA8072' }}>Details</Button></Link>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>


        </div>
    );
};

export default Projects;