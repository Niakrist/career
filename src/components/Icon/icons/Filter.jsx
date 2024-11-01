import React from "react";

const Filter = ({ className }) => {
  return (
    <svg
      className={className}
      width="0"
      height="0"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0.121956 1.71562C0.328206 1.27813 0.765706 1 1.25008 1H14.7501C15.2345 1 15.672 1.27813 15.8782 1.71562C16.0845 2.15312 16.022 2.66875 15.7157 3.04375L10.0001 10.0281V14C10.0001 14.3781 9.78758 14.725 9.44695 14.8937C9.10633 15.0625 8.70321 15.0281 8.40008 14.8L6.40008 13.3C6.14696 13.1125 6.00008 12.8156 6.00008 12.5V10.0281L0.281331 3.04062C-0.0217942 2.66875 -0.0874192 2.15 0.121956 1.71562Z"
        fill="#5C89CE"
      />
    </svg>
  );
};

export default Filter;
