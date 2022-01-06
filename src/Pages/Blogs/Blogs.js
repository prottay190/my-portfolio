import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Footer from '../Home/Footer/Footer';
import Headers from '../Share/Headers/Headers';
import './Blogs.css'

const Blogs = () => {
    return (
        <>
            <Headers></Headers>
            <Container className='p-5'>
            <h2 style={{ color: '#60607a', textAlign: 'center', marginBottom: '40px' }}>Blogs</h2>

                <Row>
                    <Col lg={4} md={6} sm={12} xs={12}>
                        <div className='blog-container'>
                            <h2>Blog-1</h2>
                            <a href='https://l.facebook.com/l.php?u=https%3A%2F%2Fmedium.com%2F%40prottayroyarnob%2Fwhat-is-jsx-bf6325c3a17d%3Ffbclid%3DIwAR0Lr8DNBFAtKb4hGPKvKjvlhn3XGEo4Vwz35g2EMMFELztnE7H-SuSMIqc&h=AT0KFjxNsCYLJyhStF8Scda8NvLk9p4zINmI_Scyo5rNC_AbPrWABF8H6NAHNar1V8UEqBx0AAViQq3zaPHzTdJFgNrFtL2TnEWk3xDbGzUNMELhum8QOwgzXb3Lfk0py9Au38ypgRGMzAWDysgtvQ'><Button>Click Here</Button></a>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12} xs={12}>
                        <div className='blog-container'>
                            <h2>Blog-2</h2>
                            <a href='https://l.facebook.com/l.php?u=https%3A%2F%2Fmedium.com%2F%40prottayroyarnob%2Fwhat-is-jsx-bf6325c3a17d%3Ffbclid%3DIwAR0Lr8DNBFAtKb4hGPKvKjvlhn3XGEo4Vwz35g2EMMFELztnE7H-SuSMIqc&h=AT0KFjxNsCYLJyhStF8Scda8NvLk9p4zINmI_Scyo5rNC_AbPrWABF8H6NAHNar1V8UEqBx0AAViQq3zaPHzTdJFgNrFtL2TnEWk3xDbGzUNMELhum8QOwgzXb3Lfk0py9Au38ypgRGMzAWDysgtvQ'><Button>Click Here</Button></a>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12} xs={12}>
                        <div className='blog-container'>
                            <h2>Blog-3</h2>
                            <a href='https://www.linkedin.com/posts/prottay-roy-arnob-791181213_javascript-concat-concat-is-a-javascript-activity-6878662464116940800-Y4R7'><Button>Click Here</Button></a>
                        </div>
                    </Col>

                </Row>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default Blogs;