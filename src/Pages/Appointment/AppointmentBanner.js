import React, { useState } from 'react';
import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
const AppointmentBanner = () => {
    const [date,newDate] = useState(new Date())
    return (
        <div class="hero min-h-screen ">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img className='w-5/12' src={chair} alt=''/>
          <div>
           <DayPicker
           mode='single'
           selected={date}
           onSelect={newDate}
           />
           <p>You have selected :  {format(date, 'PP')}</p>
          </div>
        </div>
      </div>
    );
};

export default AppointmentBanner;