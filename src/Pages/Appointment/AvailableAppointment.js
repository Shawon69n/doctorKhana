import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointment = ({date}) => {
    const [services,setServices] = useState([]);
    const [treatment,setTreatment] = useState(null);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className='mb-10'>
             <h4 className='text-xl text-center our-service-txt my-16'>Appointment available on:  {format(date, 'PP')}</h4>
             <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5'>
                 {services.map(service =><Service service={service} setTreatment={setTreatment} key={service._id}></Service>)}
             </div>
             {treatment && <BookingModal date={date} treatment={treatment} setTreatment={setTreatment}></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;