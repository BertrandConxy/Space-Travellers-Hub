import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

const UseAnimate = (view) => {
  const animation = useAnimation();
  useEffect(() => {
    if (view) {
      animation.start({
        opacity: 1,
        transition: {
          delay: 0.3,
          duration: 0.4,
        },
      });
    }

    if (!view) {
      animation.start({
        opacity: 0,
        transition: {
          duration: 0.4,
        },
      });
    }
  }, [view]);
  return animation;
};

export default UseAnimate;
