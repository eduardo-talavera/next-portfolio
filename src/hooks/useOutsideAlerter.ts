import { useEffect } from "react";

export const useOutsideAlerter = (ref: React.RefObject<HTMLDivElement | null>, callback: () => void) => {
  useEffect(() => {
  
      function handleClickOutside(event: MouseEvent) {
          if (ref.current && !ref.current.contains(event.target as Node)) {
              callback();
              console.log(':v')
          }
      }

      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
          // Unbind the event listener on clean up
          document.removeEventListener("mousedown", handleClickOutside);
      };
  }, [ref]);
}