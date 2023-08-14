import React from "react";

const Header = () => {
  return (
    <header className="py-4 bg-transparent w-full font-cartoonCookies absolute top-0 z-50">
      <nav className="container flex items-center justify-between">
        <a
          href=""
          className="text-white uppercase text-3xl font-cartoonCookies tracking-wide"
        >
          $COOKIE
        </a>

        <div className="hidden justify-between items-center gap-16 lg:flex">
          <a href="" className="text-white text-xl font-normal tracking-tight">
            Home
          </a>
          <a href="" className="text-white text-xl font-normal tracking-tight">
            About
          </a>
          <a href="" className="text-white text-xl font-normal tracking-tight">
            Tokenomics
          </a>
        </div>
        <a
          href=""
          className="w-[194px] h-[54px] px-8 py-4 bg-[#0098EE] rounded shadow justify-center items-center gap-2.5 inline-flex"
        >
          <div className="text-white text-base font-normal leading-snug tracking-tight">
            BUY ON UNISWAP
          </div>
        </a>
      </nav>
    </header>
  );
};

export default Header;
