import React from 'react';
import Form from './Form';

const FreeTrial = () => {
  return (
    <div className="max-w-7xl m-4 text-white flex flex-col md:flex-row items-center justify-between gap-10">
      <div className="text-center md:text-left max-w-md md:max-w-lg ">
        <h1 className="text-xl md:text-5xl font-bold leading-tight">
          Learn to code by watching others
        </h1>
        <p className="opacity-75 mt-5 text-xs md:text-base">
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>
      <div>
        <div className="bg-[#5f54a6] shadow-xl text-center mb-5 p-5 md:px-16 rounded-xl">
          <p>
            <span className="font-bold">Try it free 7 days</span> then $20/mo.
            thereafter
          </p>
        </div>
        <Form />
      </div>
    </div>
  );
};

export default FreeTrial;
