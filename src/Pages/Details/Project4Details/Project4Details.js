import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Headers from '../../Share/Headers/Headers';
import img2a from '../../../Images/ProjectsDetails/Image_19_250x400.png'


const Projects4Details = () => {
    return (
        <div>
            <Headers></Headers>
            <h3 style={{textAlign: 'center', color: 'LightCoral', marginTop: '30px'}}> Traveling World Details</h3>
            <div className="p-5">
              <Row xs={1} md={2} lg={3} className="g-4">
                  <Col>
                    <Card>
                     <Card.Img variant="top" src={img2a} />
                    </Card>
                  </Col>
                  
              </Row>
            </div>
            <div className="p-5">
                <h2>It is a Travel agency & hotal Reletade Website</h2>
                <ul>
                    <li>Single page web application with the dashboard</li>
                    <li>Created full-stack application with dynamic products,Client and server side,deployment etc.</li>
                    <li>Responsive application, React Bootstrap , Firebase login , Private Route etc.</li>
                    <li>React, React router v6, Axios, React hooks form etc.</li>
                    <li>You must LogIn to use This WebSite Properly.</li>
                    <li>1 Way to To LogIn.</li>
                    
                </ul>
            </div>
        </div>
    );
};

export default Projects4Details;