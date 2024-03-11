import React from "react";
import { quotes } from "../assets";

const FeedbackCard = ({ name, content, img, title }) => {
  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
      <img
        src={quotes}
        alt="double_quote"
        className="w-[42.6px] h-[27.6px] object-contain"
      />
      <p className="font-normal font-poppins leading-[32.4px] text-[18px] text-white my-10">
        {content}
      </p>

      <div className="flex flex-row">
        <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />

        <div className="flex flex-col ml-4">
          <h4 className="font-semibold font-poppins leading-[32px] text-[20px] text-white">
            {name}
          </h4>
          <p className="font-normal font-poppins leading-[24px] text-[16px] text-dimWhite">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
