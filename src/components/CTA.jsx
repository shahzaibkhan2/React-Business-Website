import React from "react";
import Button from "./Button";
import styles from "../style";

const CTA = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
    >
      <div className="flex-1 flex flex-col">
        <h2 className={`${styles.heading2}`}>Let's start together now!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Start with us and experience highly skilled developers of the{" "}
          <span className="text-gradient">The Business</span> team.
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button />
      </div>
    </section>
  );
};

export default CTA;
