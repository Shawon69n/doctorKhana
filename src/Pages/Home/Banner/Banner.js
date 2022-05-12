import React from 'react';
import chariImg from '../../../assets/images/chair.png'
const Banner = () => {
    return (
        <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img className='w-2/5' src={chariImg} alt="" />
          <div >
            <h1 className="text-5xl font-bold">Let's smile brightly</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn button-bg">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;