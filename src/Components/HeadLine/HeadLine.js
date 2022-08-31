import React, { useState, useEffect } from 'react';
import styles from './headline.module.css';
import videoBg from '../../assets/stars-headline-bg.mp4';

const HeadLine = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={styles['head-section']}>
      <div className={styles['head-video']}>
        <video className={styles['head-video__content']} autoPlay loop muted>
          <source src={videoBg} type="video/mp4" />
        </video>
      </div>

      <div className={styles['headline-text']}>
        <div className="u-mt-small">
          <h1
            className={styles['headline-text__heading']}
            style={{
              transform: `translateY(${offsetY * 0.9}px)`,
            }}
          >
            <span className={styles['headline-text__heading--big']}>
              Discover the beauty of space
            </span>
            <div className="u-mt-small">
              <span className={styles['headline-text__heading--small']}>
                The world outside your world
              </span>
            </div>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeadLine;
