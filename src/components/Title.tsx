import React from 'react'

const Title = ({ text = "ALGORITHM VISUALIZER" }) => {
  return (
    <div className="flex w-fit px-2 sm:p-0 sm:w-full items-center h-10 bg-lime-500">
      <h1 className="sm:text-2xl w-full font-extrabold text-[#535bf2]">
        {text}
      </h1>
    </div>
  );
};

export default Title