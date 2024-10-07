import React from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const Hero = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        VirtualR builds SaaS tools
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          {" "}
          for developers
        </span>
      </h1>
      <p className="mt-10 text-center text-gray-300/80 text-lg max-w-4xl">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </p>
      <div className="flex justify-center gap-10 my-10">
        <a href="#" className="border-2 py-4 px-4 rounded-md">Documentation</a>
        <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-4 px-4 rounded-md">Start for Free!</a>
      </div>
      <div className="flex mt-10 justify-center gap-2">
        <video className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4" autoPlay loop muted src={video1}></video>
        <video className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4" autoPlay loop muted src={video2}></video>
      </div>
    </div>
  );
};

export default Hero;
