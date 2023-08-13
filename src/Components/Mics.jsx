import React from "react";
import mics from "../assets/mics.svg";

const Mics = () => {
  return (
    <section className="py-24 w-full" id="mics">
      <div className="container flex gap-24 justify-center items-center flex-col">
        <h1 className="font-bold bord text-center text-orange-600 text-5xl leading-[1.4] lg:text-7xl font-cartoonCookies lg:leading-[86.40px] tracking-wider">
          Tokenomics
        </h1>

        <article className="grid grid-cols-1 lg:grid-cols-2 w-full font-cartoonCookies gap-16 items-center justify-between">
          <div className="flex-col order-2 lg:order-1 justify-start items-start gap-8 inline-flex">
            <div className="justify-center items-center gap-5 inline-flex">
              <div className="w-12 h-12 relative">
                <svg
                  width="48"
                  height="49"
                  viewBox="0 0 48 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 44.5002C21.2333 44.5002 18.6333 43.9749 16.2 42.9242C13.7667 41.8735 11.65 40.4489 9.85 38.6502C8.05 36.8502 6.62533 34.7335 5.576 32.3002C4.52667 29.8669 4.00133 27.2669 4 24.5002C4 22.0002 4.48333 19.5502 5.45 17.1502C6.41667 14.7502 7.76667 12.6082 9.5 10.7242C11.2333 8.84153 13.3167 7.32486 15.75 6.1742C18.1833 5.02353 20.85 4.44886 23.75 4.4502C24.45 4.4502 25.1667 4.48353 25.9 4.5502C26.6333 4.61686 27.3833 4.73353 28.15 4.9002C27.85 6.4002 27.95 7.81686 28.45 9.1502C28.95 10.4835 29.7 11.5915 30.7 12.4742C31.7 13.3582 32.892 13.9669 34.276 14.3002C35.66 14.6335 37.0847 14.5502 38.55 14.0502C37.6833 16.0169 37.8087 17.9002 38.926 19.7002C40.0433 21.5002 41.7013 22.4335 43.9 22.5002C43.9333 22.8669 43.9587 23.2082 43.976 23.5242C43.9933 23.8402 44.0013 24.1822 44 24.5502C44 27.2835 43.4747 29.8582 42.424 32.2742C41.3733 34.6902 39.9487 36.8069 38.15 38.6242C36.35 40.4415 34.2333 41.8749 31.8 42.9242C29.3667 43.9735 26.7667 44.4989 24 44.5002ZM21 20.5002C21.8333 20.5002 22.542 20.2082 23.126 19.6242C23.71 19.0402 24.0013 18.3322 24 17.5002C24 16.6669 23.708 15.9582 23.124 15.3742C22.54 14.7902 21.832 14.4989 21 14.5002C20.1667 14.5002 19.458 14.7922 18.874 15.3762C18.29 15.9602 17.9987 16.6682 18 17.5002C18 18.3335 18.292 19.0422 18.876 19.6262C19.46 20.2102 20.168 20.5015 21 20.5002ZM17 30.5002C17.8333 30.5002 18.542 30.2082 19.126 29.6242C19.71 29.0402 20.0013 28.3322 20 27.5002C20 26.6669 19.708 25.9582 19.124 25.3742C18.54 24.7902 17.832 24.4989 17 24.5002C16.1667 24.5002 15.458 24.7922 14.874 25.3762C14.29 25.9602 13.9987 26.6682 14 27.5002C14 28.3335 14.292 29.0422 14.876 29.6262C15.46 30.2102 16.168 30.5015 17 30.5002ZM30 32.5002C30.5667 32.5002 31.042 32.3082 31.426 31.9242C31.81 31.5402 32.0013 31.0655 32 30.5002C32 29.9335 31.808 29.4582 31.424 29.0742C31.04 28.6902 30.5653 28.4989 30 28.5002C29.4333 28.5002 28.958 28.6922 28.574 29.0762C28.19 29.4602 27.9987 29.9349 28 30.5002C28 31.0669 28.192 31.5422 28.576 31.9262C28.96 32.3102 29.4347 32.5015 30 32.5002Z"
                    fill="#FFC727"
                  />
                </svg>
              </div>
              <div className="text-white text-[32px] font-normal tracking-wide">
                LIQUIDITY
              </div>
            </div>
            <div className="justify-center items-center gap-5 inline-flex">
              <div className="w-12 h-12 relative">
                <svg
                  width="48"
                  height="49"
                  viewBox="0 0 48 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 44.5002C21.2333 44.5002 18.6333 43.9749 16.2 42.9242C13.7667 41.8735 11.65 40.4489 9.85 38.6502C8.05 36.8502 6.62533 34.7335 5.576 32.3002C4.52667 29.8669 4.00133 27.2669 4 24.5002C4 22.0002 4.48333 19.5502 5.45 17.1502C6.41667 14.7502 7.76667 12.6082 9.5 10.7242C11.2333 8.84153 13.3167 7.32486 15.75 6.1742C18.1833 5.02353 20.85 4.44886 23.75 4.4502C24.45 4.4502 25.1667 4.48353 25.9 4.5502C26.6333 4.61686 27.3833 4.73353 28.15 4.9002C27.85 6.4002 27.95 7.81686 28.45 9.1502C28.95 10.4835 29.7 11.5915 30.7 12.4742C31.7 13.3582 32.892 13.9669 34.276 14.3002C35.66 14.6335 37.0847 14.5502 38.55 14.0502C37.6833 16.0169 37.8087 17.9002 38.926 19.7002C40.0433 21.5002 41.7013 22.4335 43.9 22.5002C43.9333 22.8669 43.9587 23.2082 43.976 23.5242C43.9933 23.8402 44.0013 24.1822 44 24.5502C44 27.2835 43.4747 29.8582 42.424 32.2742C41.3733 34.6902 39.9487 36.8069 38.15 38.6242C36.35 40.4415 34.2333 41.8749 31.8 42.9242C29.3667 43.9735 26.7667 44.4989 24 44.5002ZM21 20.5002C21.8333 20.5002 22.542 20.2082 23.126 19.6242C23.71 19.0402 24.0013 18.3322 24 17.5002C24 16.6669 23.708 15.9582 23.124 15.3742C22.54 14.7902 21.832 14.4989 21 14.5002C20.1667 14.5002 19.458 14.7922 18.874 15.3762C18.29 15.9602 17.9987 16.6682 18 17.5002C18 18.3335 18.292 19.0422 18.876 19.6262C19.46 20.2102 20.168 20.5015 21 20.5002ZM17 30.5002C17.8333 30.5002 18.542 30.2082 19.126 29.6242C19.71 29.0402 20.0013 28.3322 20 27.5002C20 26.6669 19.708 25.9582 19.124 25.3742C18.54 24.7902 17.832 24.4989 17 24.5002C16.1667 24.5002 15.458 24.7922 14.874 25.3762C14.29 25.9602 13.9987 26.6682 14 27.5002C14 28.3335 14.292 29.0422 14.876 29.6262C15.46 30.2102 16.168 30.5015 17 30.5002ZM30 32.5002C30.5667 32.5002 31.042 32.3082 31.426 31.9242C31.81 31.5402 32.0013 31.0655 32 30.5002C32 29.9335 31.808 29.4582 31.424 29.0742C31.04 28.6902 30.5653 28.4989 30 28.5002C29.4333 28.5002 28.958 28.6922 28.574 29.0762C28.19 29.4602 27.9987 29.9349 28 30.5002C28 31.0669 28.192 31.5422 28.576 31.9262C28.96 32.3102 29.4347 32.5015 30 32.5002Z"
                    fill="#D91F30"
                  />
                </svg>
              </div>
              <div className="text-white text-[32px] font-normal tracking-wide">
                LIQUIDITY
              </div>
            </div>
            <div className="justify-center items-center gap-5 inline-flex">
              <div className="w-12 h-12 relative">
                <svg
                  width="48"
                  height="49"
                  viewBox="0 0 48 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 44.5002C21.2333 44.5002 18.6333 43.9749 16.2 42.9242C13.7667 41.8735 11.65 40.4489 9.85 38.6502C8.05 36.8502 6.62533 34.7335 5.576 32.3002C4.52667 29.8669 4.00133 27.2669 4 24.5002C4 22.0002 4.48333 19.5502 5.45 17.1502C6.41667 14.7502 7.76667 12.6082 9.5 10.7242C11.2333 8.84153 13.3167 7.32486 15.75 6.1742C18.1833 5.02353 20.85 4.44886 23.75 4.4502C24.45 4.4502 25.1667 4.48353 25.9 4.5502C26.6333 4.61686 27.3833 4.73353 28.15 4.9002C27.85 6.4002 27.95 7.81686 28.45 9.1502C28.95 10.4835 29.7 11.5915 30.7 12.4742C31.7 13.3582 32.892 13.9669 34.276 14.3002C35.66 14.6335 37.0847 14.5502 38.55 14.0502C37.6833 16.0169 37.8087 17.9002 38.926 19.7002C40.0433 21.5002 41.7013 22.4335 43.9 22.5002C43.9333 22.8669 43.9587 23.2082 43.976 23.5242C43.9933 23.8402 44.0013 24.1822 44 24.5502C44 27.2835 43.4747 29.8582 42.424 32.2742C41.3733 34.6902 39.9487 36.8069 38.15 38.6242C36.35 40.4415 34.2333 41.8749 31.8 42.9242C29.3667 43.9735 26.7667 44.4989 24 44.5002ZM21 20.5002C21.8333 20.5002 22.542 20.2082 23.126 19.6242C23.71 19.0402 24.0013 18.3322 24 17.5002C24 16.6669 23.708 15.9582 23.124 15.3742C22.54 14.7902 21.832 14.4989 21 14.5002C20.1667 14.5002 19.458 14.7922 18.874 15.3762C18.29 15.9602 17.9987 16.6682 18 17.5002C18 18.3335 18.292 19.0422 18.876 19.6262C19.46 20.2102 20.168 20.5015 21 20.5002ZM17 30.5002C17.8333 30.5002 18.542 30.2082 19.126 29.6242C19.71 29.0402 20.0013 28.3322 20 27.5002C20 26.6669 19.708 25.9582 19.124 25.3742C18.54 24.7902 17.832 24.4989 17 24.5002C16.1667 24.5002 15.458 24.7922 14.874 25.3762C14.29 25.9602 13.9987 26.6682 14 27.5002C14 28.3335 14.292 29.0422 14.876 29.6262C15.46 30.2102 16.168 30.5015 17 30.5002ZM30 32.5002C30.5667 32.5002 31.042 32.3082 31.426 31.9242C31.81 31.5402 32.0013 31.0655 32 30.5002C32 29.9335 31.808 29.4582 31.424 29.0742C31.04 28.6902 30.5653 28.4989 30 28.5002C29.4333 28.5002 28.958 28.6922 28.574 29.0762C28.19 29.4602 27.9987 29.9349 28 30.5002C28 31.0669 28.192 31.5422 28.576 31.9262C28.96 32.3102 29.4347 32.5015 30 32.5002Z"
                    fill="#56E6CC"
                  />
                </svg>
              </div>
              <div className="text-white text-[32px] font-normal tracking-wide">
                LIQUIDITY
              </div>
            </div>
            <div className="justify-center items-center gap-5 inline-flex">
              <div className="w-12 h-12 relative">
                <svg
                  width="48"
                  height="49"
                  viewBox="0 0 48 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 44.5002C21.2333 44.5002 18.6333 43.9749 16.2 42.9242C13.7667 41.8735 11.65 40.4489 9.85 38.6502C8.05 36.8502 6.62533 34.7335 5.576 32.3002C4.52667 29.8669 4.00133 27.2669 4 24.5002C4 22.0002 4.48333 19.5502 5.45 17.1502C6.41667 14.7502 7.76667 12.6082 9.5 10.7242C11.2333 8.84153 13.3167 7.32486 15.75 6.1742C18.1833 5.02353 20.85 4.44886 23.75 4.4502C24.45 4.4502 25.1667 4.48353 25.9 4.5502C26.6333 4.61686 27.3833 4.73353 28.15 4.9002C27.85 6.4002 27.95 7.81686 28.45 9.1502C28.95 10.4835 29.7 11.5915 30.7 12.4742C31.7 13.3582 32.892 13.9669 34.276 14.3002C35.66 14.6335 37.0847 14.5502 38.55 14.0502C37.6833 16.0169 37.8087 17.9002 38.926 19.7002C40.0433 21.5002 41.7013 22.4335 43.9 22.5002C43.9333 22.8669 43.9587 23.2082 43.976 23.5242C43.9933 23.8402 44.0013 24.1822 44 24.5502C44 27.2835 43.4747 29.8582 42.424 32.2742C41.3733 34.6902 39.9487 36.8069 38.15 38.6242C36.35 40.4415 34.2333 41.8749 31.8 42.9242C29.3667 43.9735 26.7667 44.4989 24 44.5002ZM21 20.5002C21.8333 20.5002 22.542 20.2082 23.126 19.6242C23.71 19.0402 24.0013 18.3322 24 17.5002C24 16.6669 23.708 15.9582 23.124 15.3742C22.54 14.7902 21.832 14.4989 21 14.5002C20.1667 14.5002 19.458 14.7922 18.874 15.3762C18.29 15.9602 17.9987 16.6682 18 17.5002C18 18.3335 18.292 19.0422 18.876 19.6262C19.46 20.2102 20.168 20.5015 21 20.5002ZM17 30.5002C17.8333 30.5002 18.542 30.2082 19.126 29.6242C19.71 29.0402 20.0013 28.3322 20 27.5002C20 26.6669 19.708 25.9582 19.124 25.3742C18.54 24.7902 17.832 24.4989 17 24.5002C16.1667 24.5002 15.458 24.7922 14.874 25.3762C14.29 25.9602 13.9987 26.6682 14 27.5002C14 28.3335 14.292 29.0422 14.876 29.6262C15.46 30.2102 16.168 30.5015 17 30.5002ZM30 32.5002C30.5667 32.5002 31.042 32.3082 31.426 31.9242C31.81 31.5402 32.0013 31.0655 32 30.5002C32 29.9335 31.808 29.4582 31.424 29.0742C31.04 28.6902 30.5653 28.4989 30 28.5002C29.4333 28.5002 28.958 28.6922 28.574 29.0762C28.19 29.4602 27.9987 29.9349 28 30.5002C28 31.0669 28.192 31.5422 28.576 31.9262C28.96 32.3102 29.4347 32.5015 30 32.5002Z"
                    fill="#03FF68"
                  />
                </svg>
              </div>
              <div className="text-white text-[32px] font-normal tracking-wide">
                LIQUIDITY
              </div>
            </div>
          </div>

          <img src={mics} alt="" className="lg:order-2" />
        </article>

        <iframe
          width="560"
          className="max-w-full"
          height="315"
          src="https://www.youtube.com/embed/lsWVDh-WUtg"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  );
};

export default Mics;
