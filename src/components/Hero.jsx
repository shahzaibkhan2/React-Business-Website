import React from "react";
import styles from "../style";
import { FcCollaboration } from "react-icons/fc";
import GetStarted from "./GetStarted";
import { robo_hand } from "../assets";

const Hero = () => {
  return (
    <section
      id="hero"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div
          className={`flex flex-row items-center py-[6px] px-4 bg-collaborate-gradient rounded-[10px] mb-2 text-[30px]`}
        >
          <FcCollaboration />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white"> Collaborate </span> with our{" "}
            <span className="text-white"> Team </span> with best{" "}
            <span className="text-white"> Tech Experience </span>
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[71.99px] text-[51.99px] text-white ss:leading-[99.99px] leading-[74.99px]">
            The Advanced <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span>
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
        <h1 className="font-poppins font-semibold ss:text-[67.99px] text-[51.99px] text-white ss:leading-[99.99px] leading-[74.99px] w-full">
          Business Team.
        </h1>
        <p className={`mt-5 ${styles.paragraph} max-w-[469.99px]`}>
          Our team uses advanced concepts to build a project as needed by the
          client.
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={robo_hand}
          alt="robo-pic"
          className="z-[5] relative w-[100%] h-[100%]"
        />

        <div className="absolute z-[0] w-[39.99%] h-[34.99%] top-0 pink__gradient"></div>
        <div className="absolute z-[1] w-[79.99%] h-[79.99%] top-0 white__gradient rounded-full bottom-40"></div>
        <div className="absolute z-[0] w-[49.99%] h-[49.99%] top-0 blue__gradient right-20 bottom-20"></div>
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
