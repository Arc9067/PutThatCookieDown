import React from "react";
import logo from "../assets/logo.webp";

const Hero = () => {
  return (
    <section className="py-32 w-full" id="hero">
      <div className="container flex flex-col justify-center gap-8 items-center">
        <h1 className="max-w-[817px] break-all font-bold bord text-center  rainbow-text text-5xl leading-[1.4] lg:text-7xl font-cartoonCookies lg:leading-[86.40px] tracking-wider">
          COOOOOOOOOKIES
        </h1>
        <p className="max-w-[585px] text-center text-white text-2xl font-cartoonCookies leading-loose tracking-wide">
          Floki, Meet DeFido! This brand new token was born merely moments after
          Coinbase tweeted their dog named “DeFido” at Elon Musk.{" "}
        </p>

        <div className="flex flex-wrap justify-center items-center gap-8">
          <a
            href=""
            className="w-[194px] h-[54px] px-8 py-4 bg-orange-600 rounded shadow justify-center items-center gap-2.5 inline-flex"
          >
            <div className="text-white text-base font-normal leading-snug tracking-tight">
              TELEGRAM
            </div>
          </a>
          <a
            href=""
            className="w-[194px] h-[54px] px-8 py-4 bg-orange-600 rounded shadow justify-center items-center gap-2.5 inline-flex"
          >
            <div className="text-white text-base font-normal leading-snug tracking-tight">
              TWITTER
            </div>
          </a>
        </div>

        <img src={logo} alt="" />
      </div>
    </section>
  );
};

export default Hero;
