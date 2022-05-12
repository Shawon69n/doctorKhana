import React from 'react';
import chariImg from '../../../assets/images/chair.png'
const Banner = () => {
    return (
        <div class="hero min-h-screen ">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img className='w-2/5' src={chariImg} alt="" />
          <div >
            <h1 class="text-5xl font-bold">Let's smile brightly</h1>
            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button class="btn button-bg">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;