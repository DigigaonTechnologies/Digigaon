import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const TopReach = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);  // top pe le jao
  }, [pathname]);

  return null;
};

export default TopReach;
