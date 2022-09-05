import React from 'react';
import { motion } from 'framer-motion';
import styles from './loader.module.css';

const Loader = () => (
  <div className={styles.container}>
    <motion.span
      animate={{
        color: '#fff',
        textShadow: '0.1rem -0.1rem 1rem #fff',
        transition: {
          repeat: Infinity,
          repeatType: 'reverse',
          duration: 1,
        },
      }}
      className={styles.container__content}
    >
      Loading
    </motion.span>
  </div>
);

export default Loader;
