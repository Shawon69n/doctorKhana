import React from 'react';
import doctor from '../../assets/images/doctor.png'
        import docBg from '../../assets/images/appointment.png'
const MakeAppointment = () => {
    return (
        <section style={{background: `url(${docBg})`}} className='flex justify-center items-center px-44 mt-44'>
        <div className='flex-1'>
          <img className='mt-[-170px]' src={doctor} alt="" />
        </div>
        <div className='flex-1 text-white '>
          <h3 className='text-xl our-service-txt'>Appointment  .</h3>
          <h2 className='text-3xl'>Make a Appointment right now</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda asperiores reprehenderit debitis quia sit libero ut, iure repellat facilis autem tenetur molestiae ipsa numquam consectetur dolore ex blanditiis voluptatem. Ipsam!</p>
          <button className="btn button-bg mt-5">Get Started</button>
        </div>
    </section>
    );
};

export default MakeAppointment;