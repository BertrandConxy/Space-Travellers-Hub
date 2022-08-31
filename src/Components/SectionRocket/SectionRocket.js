import React from 'react';
import { Link } from 'react-router-dom';
import styles from './sectionRocket.module.css';
import spaceX from '../../assets/spacex.jpg';
import satellite from '../../assets/satellite.jpg';
import spaceShuttle from '../../assets/space-shuttle.jpg';

const SectionRocket = () => (
  <section className={styles['rocket-section']}>
    <div className="u-heading">
      <h2>Travel tours by Rockets</h2>
    </div>
    <div className={styles.row}>
      <div className={styles['rocket-section__text']}>
        <p>
          Since 2030, We have been working with SpaceX corporation to orginize
          space travel tours. We do have various space vehicles to satisfy your
          needs. There are rockets, dragons, orcists and private flies for
          luxurious experience. Our mission is to help people discover the beauty
          of space, the world outside our world.Tours for large group of people
          is made by using modern Rockets.
        </p>
        <Link to="/rockets" className="btn btn-1">See All Rockets &rarr;</Link>
      </div>
      <div className={styles['rocket-section__images']}>
        <div className={styles['section-gallery']}>
          <img
            src={satellite}
            alt="satellite"
            className={`${styles['section-gallery__image']} ${styles['section-gallery__image--1']}`}
          />
          <img
            src={spaceX}
            alt="spaceX shuttle"
            className={`${styles['section-gallery__image']} ${styles['section-gallery__image--2']}`}
          />
          <img
            src={spaceShuttle}
            alt="space shuttle"
            className={`${styles['section-gallery__image']} ${styles['section-gallery__image--3']}`}
          />
        </div>
      </div>
    </div>
  </section>
);

export default SectionRocket;
