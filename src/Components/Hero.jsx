import React from "react";
import logo from "../assets/logo.webp";
import cookie1 from "../assets/cookie1.png";
import cookie2 from "../assets/cookie2.png";
import img3 from "../assets/img3.png";

const Hero = () => {
  return (
    <section className="py-32 w-full" id="hero">
      <div className="container flex flex-col justify-center gap-8 items-center">
        {/* <img src={logo} alt="" /> */}

        <img src={cookie1} alt="" className="md:w-[40rem]" />

        <h1 className="max-w-[817px] break-all font-bold bord text-center  rainbow-text text-5xl leading-[1.4] lg:text-7xl font-cartoonCookies lg:leading-[86.40px] tracking-wider">
          COOOOOOOOOKIES
        </h1>
        <img src={cookie2} alt="" className="md:w-[40rem]" />
        <p className="max-w-[585px] text-center text-white text-2xl font-cartoonCookies leading-loose tracking-wide">
          We know your mother has told you to keep those hands out of the cookie
          jar now Arnold Schwarzenegger steps in to scream “PUT THOSE COOKIES
          DOWN”!
        </p>

        <div className="flex flex-wrap justify-center items-center gap-8">
          <a
            href=""
            className="w-[194px] h-[54px] px-8 py-4 bg-[#0098EE] rounded shadow justify-center items-center gap-2.5 inline-flex"
          >
            <div className="text-white text-base font-normal leading-snug tracking-tight">
              TELEGRAM
            </div>
          </a>
          <a
            href=""
            className="w-[194px] h-[54px] px-8 py-4 bg-[#0098EE] rounded shadow justify-center items-center gap-2.5 inline-flex"
          >
            <div className="text-white text-base font-normal leading-snug tracking-tight">
              TWITTER
            </div>
          </a>
        </div>
        <img src={img3} alt="" className="md:w-[40rem]" />
      </div>
    </section>
  );
};

export default Hero;
