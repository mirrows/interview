import { useRef } from "react";

export const useDebounce = (func: Function, delay = 300, immediate = false) => {
  let timeoutId = useRef<NodeJS.Timeout>(null);
  let wait = useRef(false);
  return function (this: any, ...args: any[]) {
    timeoutId.current && clearTimeout(timeoutId.current);
    if (immediate && !wait.current) {
      wait.current = true;
      func.apply(this, args);
    }
    timeoutId.current = setTimeout(() => {
    if (immediate) {
        wait.current = false;
      } else {
        func.apply(this, args);
      }
    }, delay);
  };
};