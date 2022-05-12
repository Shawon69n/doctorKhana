import React from 'react';

const ServicesCard = ({img,title}) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Shoes!</h2>
    <p>{title}</p>
  </div>
</div>
    );
};

export default ServicesCard;