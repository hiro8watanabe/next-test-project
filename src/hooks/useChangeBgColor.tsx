import { useEffect } from "react";

export const useChangeBgColor = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#c8c8c8";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
};
