import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/planet.png';
import styles from './navBar.module.css';

const NavBar = () => {
  const Links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/rockets',
      text: 'Rockets',
    },
    {
      id: 3,
      path: '/dragons',
      text: 'Dragons',
    },
    {
      id: 4,
      path: '/missions',
      text: 'Missions',
    },
    {
      id: 5,
      path: '/summary',
      text: 'Summary',
    },
  ];
  return (
    <header className={styles.header}>
      <div className={styles['logo-container']}>
        <div className={styles['logo-container__icon']}>
          <NavLink to="/"><img src={logo} className={styles.logo} alt="STH logo" /></NavLink>
        </div>
      </div>
      <nav className={styles['nav-container']}>
        <ul className={styles['nav-list']}>
          {Links.map((link) => (
            <li className={styles['nav-list__item']} key={link.id}>
              <NavLink to={link.path}>{link.text}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
