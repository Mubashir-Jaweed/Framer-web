import React from "react";

const Marquee: React.FC = () => {
  return (
    <div className="w-full overflow-hidden whitespace-nowrap relative">
      <span className="bg-red-500 text-white p-4 inline-block animate-marquee">
        The Best Digital Marketing Agency The Best Digital Marketing Agency The
        Best Digital Marketing Agency The Best Digital Marketing Agency The Best
        Digital Marketing Agency The Best Digital Marketing Agency The Best
        Digital Marketing Agency The Best Digital Marketing Agency
      </span>
    </div>
  );
};

export default Marquee;
