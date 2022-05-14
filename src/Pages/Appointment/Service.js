import React from 'react';

const Service = ({service,setTreatment}) => {
    const {name,slots} = service;
    return (
        <div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                    <div className="card-body text-center">
                        <h2 className="our-service-txt text-center text-xl font-bold">{name}</h2>
                        <p>
                            {
                                slots.length > 0 ?
                                 <span>{slots[0]}</span> : <span className='text-red-500'>Try another date</span>
                            }
                        </p>
                        <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'}</p>
                        <div className="card-actions justify-center">

                        <label 
                        for="booking-modal-6" onClick={() => setTreatment(service) } 
                        disabled={slots.length === 0}
                         className="btn btn-sm button-bg mt-5">
                         Book Appointmnet</label>
                       
                        </div>
                    </div>
                    </div>  
        </div>
    );
};

export default Service;