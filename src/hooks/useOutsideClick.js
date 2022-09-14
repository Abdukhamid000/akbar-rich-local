import { useEffect } from "react";

const useOutsideClick = (ref, callback, depend) =>  {
  const handleClick = e => {
    if (ref.current && !ref.current.contains(e.target) && depend === true) {
      callback();
    }
  };

  useEffect(() => {
    if (depend) {
      document.addEventListener("click", handleClick);

      return () => {
        document.removeEventListener("click", handleClick);
      };
    }
  }, [depend]);
};

export default useOutsideClick;