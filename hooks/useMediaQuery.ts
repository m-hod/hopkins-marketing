import React, { useEffect, useState, useMemo } from "react";
import { debounce } from "../utils/contants";

export const mobile = 600;
export const tablet = 900;
export const desktop = 1200;

function useMediaQuery() {
  const [width, setWidth] = useState(0);

  const breakpoint = useMemo(() => {
    if (width < desktop) return "desktop";
    if (width < tablet) return "tablet";
    if (width < mobile) return "mobile";
    return "default";
  }, [width]);

  useEffect(() => {
    setWidth(window.innerWidth);
    function resize() {
      debounce(setWidth(window.innerWidth), 1000);
    }
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return { width: width, breakpoint: breakpoint };
}

export default useMediaQuery;
