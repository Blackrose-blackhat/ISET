import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      <img
        className="absolute inset-0 object-cover w-full h-full"
        src="/assets/images/hero-bg.jpg"
        alt="Background"
      />
      <div className="absolute inset-0 bg-black  opacity-80" />
      <div className="relative p-24">
        <section className="h-screen flex flex-col items-center justify-center w-full">
          <div className="w-1/2 flex flex-col gap-3">
            <h1 className="text-white text-6xl font-bold uppercase">
              ISET CVRGU
            </h1>
            <p className="text-white text-2xl font-bold uppercase">
              Incubation Student's Executing Team  <br />
              <span className=" text-yellow-500">C.V Raman Global University, Odisha</span>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
