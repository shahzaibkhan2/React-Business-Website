import React from "react";
import { features } from "../consts";
import Button from "./Button";
import styles, { layout } from "../style";

const FeatureCard = ({ icon, title, content, index }) => {
  return (
    <div
      className={`p-6 flex-row flex rounded-[20px] ${
        index !== features.length - 1 ? "mb-6" : "mb-0"
      } feature-card`}
    >
      <div
        className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
      >
        <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
      </div>

      <div className="flex flex-1 flex-col ml-3 ">
        <h4 className="font-semibold font-poppins text-white leading-[23px] text-[18px] mb-1">
          {title}
        </h4>
        <p className="font-normal font-poppins text-dimWhite leading-[24px] text-[16px] mb-1">
          {content}
        </p>
      </div>
    </div>
  );
};

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Your projects, <br className="sm:block hidden" /> is our
          responsibility.
        </h2>
        <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
          Choosing a right company for your projects makes your life a way more
          easier and flexible and can have a better quality of work. Connect
          with us and explore one of our best developers in the{" "}
          <span className="text-gradient">ARWiC</span> team.
        </p>

        <Button styles="mt-10" />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
