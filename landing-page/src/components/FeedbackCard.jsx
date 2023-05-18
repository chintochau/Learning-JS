import React from "react";
import { quotes } from "../assets";

const FeedbackCard = ({ id, content, name, title, img }) => {
  return (
    <section className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
        <div className=" absolute z-[0] w-[60%] h-[60%] -right-[60%] rounded-full blue__gradient"/>
      <img
        src={quotes}
        alt="double_quotes"
        className="w-[420px] h-[27px] object-contain "
      />
      <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10">
        {content}
      </p>
      <div className="flex flex-row">
        <img
          src={img}
          alt={name}
          className="w-[48px] h-[48px] rounded-full object-contain"
        />
        <div className="flex flex-col ml-5">
          <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
            {name}
          </h4>
          <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
            {title}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeedbackCard;
