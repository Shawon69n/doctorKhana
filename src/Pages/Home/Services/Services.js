import React from 'react';
import ServicesCard from './ServicesCard';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import treamtment from '../../../assets/images/treatment.png'
const Services = () => {
    const fl = 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the';
    const ca = 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the';
    const whit = 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the';
    return (
       <div>
           <h3 className='our-service-txt text-center mt-16 ml-8'>OUR SERVICES</h3>
           <h1 className='text-4xl text-center font-sans ml-10 mb-5'>Services We Provide</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-40 px-20'>
            <ServicesCard title={fl} img={fluoride}></ServicesCard>
            <ServicesCard title={ca} img={cavity}></ServicesCard>
            <ServicesCard title={whit} img={whitening}></ServicesCard>

        {/* special service  */}

        </div>
       </div>
    );
};

export default Services;