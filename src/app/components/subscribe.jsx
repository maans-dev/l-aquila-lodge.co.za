import React from 'react';

const TextImageComponent = ({ text, image }) => {
  return (
    <div className="flex justify-center">
      <div className="text-left text-black">
        <h1 className="text-5xl mb-10 ml-6">Why Subscribe?</h1>
        <div className="pl-8">
          <p className="mb-4">
            <span className="text-2xl text-lg">Exclusive Discounts:</span> <br></br>Enjoy special discounts on all arrangements.
          </p>
          <p className="mb-4 text-lg">
            <span className="text-2xl">Flexibility:</span> <br></br>No contracts! Cancel or modify your subscription anytime.
          </p>
          <p className="mb-4 text-lg">
            <span className="text-2xl">Personalized Service:</span> <br></br>Dedicated florist support for a tailored experience.
          </p>
        </div>
      </div>
      <div className="flex items-center ml-[400px]">
        {image}
      </div>
    </div>
  );
};

export default TextImageComponent;
