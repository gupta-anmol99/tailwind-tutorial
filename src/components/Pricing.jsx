import React from "react";
import { pricingOptions } from "../constants";
import { CircleCheck } from "lucide-react";

const Pricing = () => {
  return (
    <>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-wide uppercase text-center mb-8">
        Pricing
      </h2>
      <div className="flex justify-center gap-4 px-4">
        {pricingOptions.map((option, idx) => (
          <div
            key={idx}
            className="flex flex-col w-1/4 gap-8 border border-neutral-600 rounded-lg p-6"
          >
            <h2 className="text-5xl sm:text-2xl lg:text-3xl font-thin ">
              {option.title}
            </h2>
            <div className="flex items-center">
              <p className="text-4xl font-medium">{option.price}</p>
              <span className="text-neutral-500 text-md mt-4"> /Month</span>
            </div>
            <ul className="list-inside flex flex-col gap-2">
              {option.features.map((feature, idx) => (
                <li key={idx} className="text-neutral-500">
                  <CircleCheck size={18} className="inline mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              className="border border-orange-800 text-center rounded-lg p-2 mt-8 hover: bg-gradient-to-r hover: bg-clip-text hover:text-transparent hover:from-orange-500 hover:to-orange-800"
              href="#"
            >
              Get Started
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Pricing;
