import { useEffect } from "react";
export function useKey(key, action) {
  useEffect(
    function () {
      function closeMovieEscape(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      }

      document.addEventListener("keydown", closeMovieEscape);

      return function () {
        document.removeEventListener("keydown", closeMovieEscape);
      };
    },
    [action, key]
  );
}
