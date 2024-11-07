const clsx = (...classNames) => {
  return classNames.filter((className) => className).join(" ");
};

export default clsx;
