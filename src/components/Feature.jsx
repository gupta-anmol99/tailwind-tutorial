import React from "react";
import { features } from "../constants";

const Feature = () => {
  return (
    <div className="relative mt-20 border-neutral-800 min-h-[650px]">
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-5 text-md font-medium px-2 py-1 uppercase">
          Features
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl mt-8 lg:mt-14 tracking-wide uppercase">
          Easily build
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            {" "}
            your webapp
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-8 lg:mt-14">
        {features.map((feature, idx) => (
          <div key={idx} className="w-full sm:w-1/2 lg:w-1/3 p-6">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-r from-orange-500 to-orange-800 p-4 rounded-md">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-lg font-medium">{feature.text}</h3>
                <p className="text-gray-300/80">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
