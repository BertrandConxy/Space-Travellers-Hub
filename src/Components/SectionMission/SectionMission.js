import React from 'react';
import { Link } from 'react-router-dom';
import styles from './sectionMission.module.css';

const SectionMission = () => (
  <section className={styles['mission-section']}>
    <div className="u-heading">
      <h2>Participate in our Missions</h2>
    </div>
    <div className={styles.content}>
      <p className={styles.content__paragraph}>
        Every year we announce the missions we want to accomplish within that
        year. The missions concern sailing and navigating the new places in the
        universe. We are always willing to go beyond our limits and achieve
        more. Together we can do everything. You can see the missions we have
        this year and choose which ones you want to participate in.
      </p>
      <Link to="/missions" className="btn btn-1">
        See all missions &rarr;
      </Link>
    </div>
  </section>
);

export default SectionMission;
