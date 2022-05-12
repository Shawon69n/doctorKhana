import React from 'react';
import Appointment from '../Appointment/Appointment';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';
import Info from './Info/Info';
import Services from './Services/Services';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div className='px-12'>
                <Banner></Banner>
                <Info></Info>
                <Services></Services>
                <Appointment></Appointment>
                <Testimonials></Testimonials>
                <Footer></Footer>
        </div>
    );
};

export default Home;