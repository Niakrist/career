import { useEffect, useState } from "react";
// Хук для скрытия раскрытого списка фильтра при клике не по нему

export const useClickOutside = (listRef) => {
  const [isOpen, setIsOpen] = useState(false);
  const isShowFilter = (event) => {
    if (listRef.current && !listRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", isShowFilter);
    () => window.removeEventListener("click", isShowFilter);
  }, [listRef.current, isOpen]);
  return { isOpen, setIsOpen };
};
