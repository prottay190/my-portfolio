import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Headers from '../../Share/Headers/Headers';
import img3a from '../../../Images/ProjectsDetails/resized-image-Promo (4).jpeg'
import img3b from '../../../Images/ProjectsDetails/resized-image-Promo (5).jpeg'
import img3c from '../../../Images/ProjectsDetails/resized-image-Promo (6).jpeg'

const Projects3Details = () => {
    return (
        <div>
            <Headers></Headers>
            <h3 style={{ textAlign: 'center', color: 'LightCoral', marginTop: '30px' }}>Health Care website Details</h3>
            <div className="p-5">
                <Row xs={1} md={2} lg={3} className="g-4">
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={img3a} />
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={img3b} />
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={img3c} />
                        </Card>
                    </Col>
                </Row>
            </div>
            <div className="p-5">
                <h2>It is a healthcare website </h2>
                <ul>
                    <li>Static healthcare website</li>
                    <li>Creat a static application with dynamic products deployment etc.</li>
                    <li>Responsive application, Rezct bootstrap, Firebase login , Private Route etc.</li>
                    <li>Created font-end application with dynamic products, Client side deployment etc.</li>
                    <li>You must LogIn to use This WebSite Properly.</li>
                    <li>2 Way to To Log in.</li>
                    <li>Google SingIn is easy.</li>
                    <li>There are a Private Route . You have to log in to go there.</li>
                </ul>
            </div>
        </div>
    );
};

export default Projects3Details;