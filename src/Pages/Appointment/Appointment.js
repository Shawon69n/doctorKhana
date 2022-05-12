import React from 'react';
import Footer from '../Home/Footer/Footer';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointment from './AvailableAppointment';
     
        const Appointment = () => {
            return (
              <section>
                 <AppointmentBanner></AppointmentBanner>
                 <AvailableAppointment></AvailableAppointment>
                 <Footer></Footer>
              </section>
            );
        };
        
 export default Appointment;