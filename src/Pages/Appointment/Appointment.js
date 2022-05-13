import React, { useState } from 'react';
import Footer from '../Home/Footer/Footer';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointment from './AvailableAppointment';
     
        const Appointment = () => {
          const [date,newDate] = useState(new Date())
            return (
              <section>
                 <AppointmentBanner date={date} newDate={newDate}></AppointmentBanner>
                 <AvailableAppointment  date={date} newDate={newDate}></AvailableAppointment>
                 <Footer></Footer>
              </section>
            );
        };
        
 export default Appointment;