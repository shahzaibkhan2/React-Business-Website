import React from "react";
import styles from "../style";
import { stats } from "../consts";

const Stats = () => {
  return (
    <section
      className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}
    >
      {stats.map((stat) => (
        <div
          key={stat.id}
          className={`flex-1 flex items-center justify-start m-3 flex-row`}
        >
          <h1 className="font-poppins font-semibold xs:text-[39.99px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
            {stat.value}
          </h1>
          <p className="font-poppins font-normal  xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] uppercase ml-3 text-gradient">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
