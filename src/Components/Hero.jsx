import React from "react";
import logo from "../assets/logo.webp";
import cookie1 from "../assets/cookie1.webp";
import cookie2 from "../assets/cookie2.png";
import img3 from "../assets/img3.png";
import pattern from "../assets/pattern.png";

const Hero = () => {
  return (
    <section className="py-32 w-full" id="hero">
      <div className="container flex flex-col justify-center gap-8 items-center">
        {/* <img src={logo} alt="" /> */}

        <img src={cookie1} alt="" className="md:w-[40rem]" />

        <h1 className="max-w-[817px] break-all font-bold bord text-center  rainbow-text text-3xl leading-[1.4] lg:text-7xl font-cartoonCookies lg:leading-[86.40px] tracking-wider">
          COOOOOOOOOKIES
        </h1>
        <div className="relative">
          <img src={cookie2} alt="" className="md:w-[40rem]" />
          <img
            src={pattern}
            alt=""
            className="w-[5rem] absolute right-0 top-0 lg:hidden"
          />
        </div>
        <p className="max-w-[585px] text-center text-white text-2xl font-cartoonCookies leading-loose tracking-wide">
          "Me Love to Eat Cookies. Sometimes eat whole, sometimes me chew it."
        </p>

        <div className="flex flex-wrap justify-center font-cartoonCookies items-center gap-8">
          <a
            href="https://t.me/PutThatCookieDownETH"
            className="w-[194px] h-[54px] px-8 py-4 bg-[#0098EE] rounded shadow justify-center items-center gap-2.5 inline-flex"
          >
            <div className="text-white text-base font-normal leading-snug tracking-tight">
              TELEGRAM
            </div>
          </a>
          <a
            href="https://twitter.com/PTCDeth"
            className="w-[194px] h-[54px] px-8 py-4 bg-[#0098EE] rounded shadow justify-center items-center gap-2.5 inline-flex"
          >
            <div className="text-white text-base font-normal leading-snug tracking-tight">
              TWITTER
            </div>
          </a>
        </div>

        <audio controls autoPlay loop src="/sound.mp3" id="audio"></audio>
        <img src={img3} alt="" className="md:w-[40rem]" />

        <h1 className="max-w-[817px] break-all uppercase font-bold bord text-center  rainbow-text text-5xl mt-10 leading-[1.4] lg:text-7xl font-cartoonCookies lg:leading-[86.40px] tracking-wider">
          Tokenomics
        </h1>

        <ul className="flex flex-col justify-center items-center gap-6">
          <li className="text-3xl">100,000,000 $COOKIE</li>
          <li className="text-3xl">3% Buy Tax / 3% Sell Tax</li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
