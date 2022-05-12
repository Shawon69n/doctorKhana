import React from 'react';

import MakeAppointment from '../MakeAppointment/Makeappointment';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';
import Info from './Info/Info';
import Services from './Services/Services';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
                <Banner></Banner>
                <Info></Info>
                <Services></Services>
                <MakeAppointment></MakeAppointment>
                <Testimonials></Testimonials>
                <Footer></Footer>
        </div>
    );
};

export default Home;