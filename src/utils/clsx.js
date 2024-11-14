const clsx = (...classNames) => {
  return classNames.filter(Boolean).join(" ");
};

export default clsx;
