import React from 'react';
import Headers from '../../Share/Headers/Headers';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div style={{backgroundColor: "#02022962", color: "white", overflow: "hidden",}}>
            <Headers></Headers>
            <Banner></Banner>
            <About></About>
            <Projects></Projects>
            <Footer></Footer>
        </div>
    );
};

export default Home;