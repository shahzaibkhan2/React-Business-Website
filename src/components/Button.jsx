import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-4 bg-blue-gradient px-6 outline-none text-primary font-medium font-poppins text-[18px] ${styles} rounded-xl hover:bg-transparent`}
    >
      let's Start a Project
    </button>
  );
};

export default Button;
