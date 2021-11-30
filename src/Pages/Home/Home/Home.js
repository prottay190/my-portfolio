import React from 'react';
import Headers from '../../Share/Headers/Headers';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <Headers></Headers>
            <Banner></Banner>
            <Projects></Projects>
            <Footer></Footer>
        </div>
    );
};

export default Home;