import React from "react";
import { feedback } from "../consts";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonial = () => {
  return (
    <section
      id="clients"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      {/*Todo*/}
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] blue__gradient rounded-full" />

      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h1 className={styles.heading2}>
          What people say <br className="sm:block hidden" /> about us
        </h1>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} max-w-[450px] text-left`}>
            Whatever you need is provided like accepting all kind of card
            payments and growing your business anywhere on the planet. We warmly
            welcome you to our company The{" "}
            <span className="text-gradient">The Business</span>
          </p>
        </div>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {feedback.map((item) => (
          <FeedbackCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
