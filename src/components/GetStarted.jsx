import React from "react";
import { arrowUp } from "../assets";
import styles from "../style";
import { MdOutlineArrowOutward } from "react-icons/md";
import style from "./GetStarted.module.css";

const GetStarted = () => {
  return (
    <div
      className={`${styles.flexCenter} w-[139.99px] h-[139.99px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full hover:border-4`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[17.99px] leading-[22.99px] mr-3">
            <span className="text-gradient">Get</span>{" "}
          </p>
          <span className="text-white text-[25px]">
            <MdOutlineArrowOutward />
          </span>
        </div>
        <p className="font-poppins font-medium text-[17.99px] leading-[22.99px]">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
