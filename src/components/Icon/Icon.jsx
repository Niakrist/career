import React from "react";
import Briefcase from "../icons/Briefcase";
import Calendar from "./icons/Calendar";
import Experience from "./icons/Experience";
import Filter from "../icons/Filter";
import Graduation from "./icons/Graduation";
import Location from "./icons/Location";
import MoreFilters from "./icons/MoreFilters";
import Salary from "./icons/Salary";
import Stack from "./icons/Stack";
import Time from "./icons/Time";
import TomeJob from "./icons/TomeJob";
import ChevronDown from "./icons/ChevronDown";
import Close from "./icons/Close";
import Hidden from "./icons/Hidden";
import Check from "./icons/Check";
import Radio from "./icons/Radio";

const Icon = ({ className, name }) => {
  const icons = {
    briefcase: <Briefcase className={className} />,
    calendar: <Calendar className={className} />,
    experience: <Experience className={className} />,
    filter: <Filter className={className} />,
    graduation: <Graduation className={className} />,
    location: <Location className={className} />,
    moreFilters: <MoreFilters className={className} />,
    salary: <Salary className={className} />,
    stack: <Stack className={className} />,
    time: <Time className={className} />,
    tomeJob: <TomeJob className={className} />,
    chevronDown: <ChevronDown className={className} />,
    close: <Close className={className} />,
    hidden: <Hidden className={className} />,
    check: <Check className={className} />,
    radio: <Radio className={className} />,
  };

  return icons[name];
};

export default Icon;
