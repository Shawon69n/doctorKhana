import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({treatment,date,setTreatment}) => {
    const {_id,name,slots} = treatment;

    const handleBooking = event =>{
        event.preventDefault()
        const slot = event.target.slot.value;
        const pname = event.target.name.value;
        const email = event.target.email.value;
        const number = event.target.number.value;
        console.log(slot,pname,email,number,name,_id);
        setTreatment(null)
    }
    return (
        <div>
             <input type="checkbox" id="booking-modal-6" className="modal-toggle" />
         <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                <label for="booking-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold our-service-txt text-lg">Booking for : {name}</h3>

                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-5 mb-5' action="">
                    <input type="text" readOnly value={format(date,'PP')} className="input input-bordered w-full max-w-xs" />
                    <select name='slot' className="select select-bordered w-full max-w-xs">
                       {slots.map(slot =>  <option value={slot}>{slot}</option>)}
                    </select>
                    <input name='name' type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" />
                    <input name='email' type="email" placeholder="email" className="input input-bordered w-full max-w-xs" />
                    <input name='number' type="text" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                    <input type="submit" value='Confirm booking'  className="btn w-full max-w-xs" />
                   
                    </form>

                </div>
        </div>
    </div>
    );
};

export default BookingModal;