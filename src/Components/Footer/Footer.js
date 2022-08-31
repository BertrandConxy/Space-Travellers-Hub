import React from 'react';
import styles from './footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.company}>
      <div className={styles.company__sponsors}>
        <span>spacex</span>
        <span>nsa</span>
        <span>sata</span>
      </div>
      <div className={styles.company__address}>
        <div className="u-heading">
          <h3>Find us</h3>
        </div>
        <address className={styles['company__address--content']}>
          <span>Nevada,US</span>
          <span>KK123st Avenue</span>
          <span>Tel: 000 345 345 00</span>
          <span>Email: spacetravellershub@gmail.com</span>
        </address>
      </div>
    </div>
    <div className={styles.copyright}>
      <span>&copy; copyright STH 2022. All rights reserved</span>
    </div>
  </footer>
);

export default Footer;
