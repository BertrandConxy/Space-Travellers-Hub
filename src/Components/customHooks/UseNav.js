import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

const UseNav = (offSet, isOpen, handleScroll) => {
  const IsMobile = (window.innerWidth <= 768);
  const scrollAnimation = useAnimation();
  const menuAnimation = useAnimation();
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    if (offSet > 0) {
      scrollAnimation.start({
        x: `${isOpen ? 0 : '100vw'}`,
        transition: {
          type: 'spring',
          duration: 0.4,
        },
      });

      menuAnimation.start({
        x: 0,
        top: '2%',
        right: '2%',
        position: 'fixed',
        transition: {
          type: 'spring',
          stiffness: 120,
          duration: 0.4,
        },
      });
    }

    if (offSet === 0) {
      scrollAnimation.start({
        x: `${IsMobile ? '100vw' : 0}`,
        transition: {
          type: 'spring',
          stiffness: 100,
          duration: 0.4,
        },
      });

      menuAnimation.start({
        x: '30vw',
        transition: {
          type: 'spring',
          duration: 0.4,
        },
      });
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [offSet, isOpen]);

  return { scrollAnimation, menuAnimation };
};
export default UseNav;
