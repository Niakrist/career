import React from "react";

const ChevronDown = ({ className }) => {
  return (
    <svg
      className={className}
      width="0"
      height="0"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_2011_2549)">
        <path
          d="M9.52974 6.52988C9.82271 6.23691 9.82271 5.76113 9.52974 5.46816L5.02974 0.968163C4.73677 0.675195 4.26099 0.675195 3.96802 0.968163C3.67505 1.26113 3.67505 1.73691 3.96802 2.02988L7.93833 6.0002L3.97036 9.97051C3.67739 10.2635 3.67739 10.7393 3.97036 11.0322C4.26333 11.3252 4.73911 11.3252 5.03208 11.0322L9.53208 6.53223L9.52974 6.52988Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_2011_2549">
          <rect
            width="12"
            height="12"
            fill="white"
            transform="translate(0 12) rotate(-90)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ChevronDown;
