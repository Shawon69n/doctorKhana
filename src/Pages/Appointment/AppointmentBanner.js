
import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
const AppointmentBanner = ({date,newDate}) => {
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
          
          </div>
        </div>
      </div>
    );
};

export default AppointmentBanner;