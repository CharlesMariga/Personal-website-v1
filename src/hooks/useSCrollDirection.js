import { useEffect, useState } from "react";

const ScrollDirection = {
  up: "up",
  down: "down",
};

const useScrollDirection = scrollContent => {
  const threshold = 100;
  const [scrollDir, setScrollDir] = useState(ScrollDirection.up);

  console.log("Scroll content: ", scrollContent);

  useEffect(() => {
    let previousScrollYPosition = scrollContent ? scrollContent.scrollY : 0;

    const scrolledMoreThanThreshold = currentScrollYPosition =>
      Math.abs(currentScrollYPosition - previousScrollYPosition) > threshold;

    const isScrollingUp = currentScrollYPosition =>
      currentScrollYPosition > previousScrollYPosition &&
      !(previousScrollYPosition > 0 && currentScrollYPosition === 0) &&
      !(currentScrollYPosition > 0 && previousScrollYPosition === 0);

    const updateScrollDirection = () => {
      const currentScrollYPosition = scrollContent ? scrollContent.scrollY : 0;

      if (scrolledMoreThanThreshold(currentScrollYPosition)) {
        const newScrollDirection = isScrollingUp(currentScrollYPosition)
          ? ScrollDirection.down
          : ScrollDirection.up;
        setScrollDir(newScrollDirection);
        previousScrollYPosition =
          currentScrollYPosition > 0 ? currentScrollYPosition : 0;
      }
    };

    const onScroll = () =>
      scrollContent && window.requestAnimationFrame(updateScrollDirection);

    scrollContent && scrollContent.addEventListener("scroll", onScroll);

    return () =>
      scrollContent && scrollContent.removeEventListener("scroll", onScroll);
  }, [scrollContent]);

  return scrollDir;
};

export default useScrollDirection;
