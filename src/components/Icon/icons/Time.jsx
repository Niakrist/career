import React from "react";

const Time = ({ className }) => {
  return (
    <svg
      className={className}
      width="0"
      height="0"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.992 0C3.576 0 0 3.584 0 8C0 12.416 3.576 16 7.992 16C12.416 16 16 12.416 16 8C16 3.584 12.416 0 7.992 0ZM11.2 11.2C11.126 11.2742 11.0381 11.333 10.9413 11.3731C10.8445 11.4133 10.7408 11.434 10.636 11.434C10.5312 11.434 10.4275 11.4133 10.3307 11.3731C10.2339 11.333 10.146 11.2742 10.072 11.2L7.44 8.568C7.36441 8.49391 7.30427 8.40555 7.26308 8.30805C7.22188 8.21055 7.20044 8.10585 7.2 8V4.8C7.2 4.36 7.56 4 8 4C8.44 4 8.8 4.36 8.8 4.8V7.672L11.2 10.072C11.512 10.384 11.512 10.888 11.2 11.2Z"
        fill="#5C89CE"
      />
    </svg>
  );
};

export default Time;