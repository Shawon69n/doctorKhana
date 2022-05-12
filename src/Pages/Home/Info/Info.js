import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 ml-24'>
            <div style={{background:'linear-gradient(90deg, #19D3AE -22.5%, #0FCFEC 120.83%)'}} className="card lg:card-side text-white  shadow-xl px-5 ">
                <figure className='pl-5'><img src={clock} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Opening hours</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                </div>
             </div>
            <div style={{background: "#3A4256"}} className="card lg:card-side text-white  shadow-xl px-5">
                <figure><img src={marker} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Our location</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                </div>
             </div>
            <div className="card lg:card-side text-white  shadow-xl bg-accent px-5">
                <figure><img src={phone} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Contact us</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                </div>
             </div>
        </div>
    );
};

export default Info;