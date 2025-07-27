    import { useEffect } from "react";
    import { useLocation } from "react-router-dom";

    function ScrollToTop() {
      const { pathname } = useLocation();

      useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the window
      }, [pathname]); // Re-runs the effect whenever the pathname changes

      return null;
    }

    export default ScrollToTop;