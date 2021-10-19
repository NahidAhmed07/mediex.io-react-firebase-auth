import React from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
  const { serviceId } = useParams();
  
  return (
    <div className="my-5">
      <h1>services details {serviceId}</h1>
      <h3>ksdfhsdkf</h3>
      <h1>shfksdfskdfhsk</h1>
    </div>
  );
};

export default ServiceDetails;