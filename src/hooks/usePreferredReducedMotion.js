/**
 * https://www.joshwcomeau.com/react/prefers-reduced-motion/
 */

import { useEffect, useState } from "react";

const QUERY = "(prefers-reduced-motion: no-preference)";

export default function usePrefersReducedMotion() {
  // Defaults to no-animations, since we don't know what the
  // user's preference is on the server
  const [prefersReducedMotion, setPreferredReducedMotion] = useState(true);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(QUERY);

    // Set the true initial value, now that we're on the client:
    setPreferredReducedMotion(!window.matchMedia(QUERY).matches);

    // Register event listener
    const listener = event => {
      setPreferredReducedMotion(!event.matches);
    };

    mediaQueryList.addEventListener("change", listener);

    return () => {
      // When the component unmounts, this cleanup code runs
      mediaQueryList.removeEventListener("change", listener);
    };
  }, []);

  return prefersReducedMotion;
}
