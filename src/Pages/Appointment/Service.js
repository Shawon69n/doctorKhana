import React from 'react';

const Service = ({service,setTreatment}) => {
    const {name,slots} = service;
    return (
        <div>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 class="card-title">{name}</h2>
                        <p>
                            {
                                slots.length > 0 ?
                                 <span>{slots[0]}</span> : <span className='text-red-500'>Try another date</span>
                            }
                        </p>
                        <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'}</p>
                        <div class="card-actions justify-center">

                        <label 
                        for="booking-modal-6" onClick={() => setTreatment(service) } 
                        disabled={slots.length === 0}
                         className="btn button-bg mt-5">
                         Book Appointmnet</label>
                       
                        </div>
                    </div>
                    </div>  
        </div>
    );
};

export default Service;