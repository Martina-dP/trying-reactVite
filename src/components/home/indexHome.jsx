//import React from 'react';
import IndexHeader from '../header/indexHeader';
import AboutUs from '../us/indexUs';
import Sports from '../items/sports/sports';
import Footer from '../footer/indexFooter';
import './home.css';

const Home = () => {
    return (
        <div className='home'>
            <div className='home-nav' >
                <IndexHeader  />
            </div>
            <div className='home-AboutUs'>
                <AboutUs />
            </div>
            <div className='home-Sports'>
                <Sports />
            </div>
            <div className='home-footer'>
                <Footer />
            </div>
        </div>
    );
};
export default Home;