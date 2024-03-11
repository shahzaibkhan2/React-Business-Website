import React from "react";
import { layout } from "../style";
import { bill, apple, google } from "../assets";
import styles from "../style";

const Billing = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          src={bill}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"></div>
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient"></div>
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2}`}>
          We have secure <br className="sm:block hidden" /> payment methods
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          After the project completion, we provide save payment methods to
          clients to have safe transactions and payments. These methods are
          accepted worldwide.
        </p>
      </div>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img
          src={google}
          alt="google_play"
          className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
        />
        <img
          src={apple}
          alt="apple_play"
          className="w-[128px] h-[42px] object-contain cursor-pointer"
        />
      </div>
    </section>
  );
};

export default Billing;
