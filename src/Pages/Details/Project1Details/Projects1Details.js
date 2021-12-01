import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import img1a from '../../../Images/ProjectsDetails/resized-image-Promo.jpeg'
import img1b from '../../../Images/ProjectsDetails/resized-image-P.jpeg'
import img1c from '../../../Images/ProjectsDetails/resized-image-.jpeg'
import Headers from '../../Share/Headers/Headers';

const Projects1Details = () => {
    return (
        <div>
            <Headers></Headers>
            <h3 style={{textAlign: 'center', color: 'LightCoral', marginTop: '30px'}}>Car Sales Website Details</h3>
            <div className="p-5">
              <Row xs={1} md={2} lg={3} className="g-4">
                  <Col>
                    <Card>
                     <Card.Img variant="top" src={img1a} />
                    </Card>
                  </Col>
                  <Col>
                    <Card>
                     <Card.Img variant="top" src={img1b} />
                    </Card>
                  </Col>
                  <Col>
                    <Card>
                     <Card.Img variant="top" src={img1c} />
                    </Card>
                  </Col>
              </Row>
            </div>
            <div className="p-5">
                <h2>It is a car sales Reletade Website</h2>
                <ul>
                    <li>Single page web application with the dashboard</li>
                    <li>Created full-stack application with dynamic products,Client and server side,deployment etc.</li>
                    <li>Responsive application, Material ui , Firebase login , Private Route etc.</li>
                    <li>React, React router v6, Axios, React hooks form etc.</li>
                    <li>You must LogIn to use This WebSite Properly.</li>
                    <li>1 Way to To LogIn.</li>
                    <li>Email and password register and SingIn here.</li>
                    <li>An admin can see orders, add a new service, from the dashboard.</li>
                </ul>
            </div>
        </div>
    );
};

export default Projects1Details;