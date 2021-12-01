import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Headers from '../../Share/Headers/Headers';
import img2a from '../../../Images/ProjectsDetails/resized-image-Promo (1).jpeg'
import img2b from '../../../Images/ProjectsDetails/resized-image-Promo (2).jpeg'
import img2c from '../../../Images/ProjectsDetails/resized-image-Promo (3).jpeg'

const Projects2Details = () => {
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
                  <Col>
                    <Card>
                     <Card.Img variant="top" src={img2b} />
                    </Card>
                  </Col>
                  <Col>
                    <Card>
                     <Card.Img variant="top" src={img2c} />
                    </Card>
                  </Col>
              </Row>
            </div>
            <div className="p-5">
                <h2>It is a Travel Reletade Website</h2>
                <ul>
                    <li>Single page web application with the dashboard</li>
                    <li>Created full-stack application with dynamic products,Client and server side,deployment etc.</li>
                    <li>Responsive application, React Bootstrap , Firebase login , Private Route etc.</li>
                    <li>React, React router v6, Axios, React hooks form etc.</li>
                    <li>You must LogIn to use This WebSite Properly.</li>
                    <li>1 Way to To LogIn.</li>
                    <li>Google SingIn is Easy</li>
                </ul>
            </div>
        </div>
    );
};

export default Projects2Details;