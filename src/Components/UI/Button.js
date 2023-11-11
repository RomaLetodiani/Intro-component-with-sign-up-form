import React from 'react';

const Button = ({ text }) => {
  return (
    <button className="bg-[#38cc8c] rounded-lg text-sm font-bold p-3 w-full">
      {text}
    </button>
  );
};

export default Button;
