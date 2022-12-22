import { useCallback, useState } from "react";


export const useCounter = () => {
  const [count, setCount] = useState(1);
  const [isShow, setIsShow] = useState(true);

  const handleClick = useCallback(() => {
    if (count < 10) {
      setCount((prevCount) => prevCount + 1);
    }
  }, [count]);

  const handleFlag = useCallback(() => {
    // setIsShow((isShow) => {
    //   //▼最短の記述
    //   return !isShow;

    //   //▼以下と同じ意味になる
    //   // return isShow ? false : true;
    // });

    //▼更にリファクタリング
    setIsShow((prevIsShow) => !prevIsShow);
  }, []);

  return { count, isShow, handleClick, handleFlag };
};
