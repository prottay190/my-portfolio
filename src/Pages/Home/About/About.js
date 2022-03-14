import React from 'react';
import { Col, Row } from 'react-bootstrap';
import img1 from '../../../Images/banner/IMG_20210627_210454.jpg';
import Typical from 'react-typical';
import './About.css';
import { FaUserAlt } from 'react-icons/fa';

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
                            steps={[ 'Web Developer', 1000, 'Full Stack Developer', 1000, 'MERN Stack Developer', 1000, 'React Developer', 1000]}
                            wrapper="p"
                        />
                    </h1>
                </Col>
                <Col>
                    <img src={img1} alt="" style={{}} className='rounded img-fluid' />
                </Col>
            </Row>
        </div>
    );
};

export default About;