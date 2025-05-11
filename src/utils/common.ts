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

export const eventBus = {
  events: {
    showRegistorOrLoginModal: undefined as Function | undefined,
  },
  on(eventName: keyof typeof this.events, callback: Function) {
    this.events[eventName] = callback;
  },
  emit(eventName: keyof typeof this.events, data: any) {
    this.events[eventName]?.(data);
  },
  off(eventName: keyof typeof this.events) {
    delete this.events[eventName];
  }
}