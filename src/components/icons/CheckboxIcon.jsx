import React from "react";

const CheckboxIcon = ({ className }) => {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <rect
        x="0.75"
        y="0.75"
        width="14.5"
        height="14.5"
        rx="3.25"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M10.6668 6L7.00016 10L5.3335 8.18182"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CheckboxIcon;
