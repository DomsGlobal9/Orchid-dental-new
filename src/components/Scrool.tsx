import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // This forces the browser to jump to the top (0,0) instantly
    window.scrollTo(0, 0);
  }, [pathname]); // Runs every time the 'pathname' changes

  return null;
};

export default ScrollToTop;