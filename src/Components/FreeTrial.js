import React from 'react';
import Form from './Form';

const FreeTrial = () => {
  return (
    <div className="max-w-7xl m-4 text-white flex items-center justify-between gap-10">
      <div className="max-w-lg ">
        <h1 className="text-5xl font-bold leading-tight">
          Learn to code by watching others
        </h1>
        <p className="opacity-75 mt-5">
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>
      <div>
        <div className="bg-[#5f54a6] shadow-xl mb-5 py-5 px-16 rounded-xl">
          <p>Try it free 7 days then $20/mo. thereafter</p>
        </div>
        <Form />
      </div>
    </div>
  );
};

export default FreeTrial;
