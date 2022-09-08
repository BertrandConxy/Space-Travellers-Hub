import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import UseNav from '../customHooks/UseNav';
import logo from '../../assets/planet.png';
import styles from './navBar.module.css';

const NavBar = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [isOpen, setOpen] = useState(false);
  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };
  const { scrollAnimation, menuAnimation } = UseNav(offsetY, isOpen, handleScroll);

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
    <header
      className={isOpen ? `${styles.open} ${styles.header}` : styles.header}
    >
      <div className={styles['logo-container']}>
        <div className={styles['logo-container__icon']}>
          <NavLink to="/">
            <img src={logo} className={styles.logo} alt="STH logo" />
          </NavLink>
        </div>
      </div>
      <motion.nav animate={scrollAnimation} className={styles['nav-container']}>
        <ul
          className={
            isOpen
              ? `${styles['nav-column']} ${styles['nav-list']}`
              : styles['nav-list']
          }
        >
          {Links.map((link) => (
            <li
              className={
                isOpen
                  ? `${styles['nav-column__item']} ${styles['nav-list__item']}`
                  : styles['nav-list__item']
              }
              key={link.id}
            >
              <NavLink onClick={() => setOpen(false)} to={link.path}>
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </motion.nav>
      <div>
        {isOpen ? (
          <AiOutlineClose
            className={styles.icon}
            onClick={() => setOpen(!isOpen)}
          />
        ) : (
          <motion.div animate={menuAnimation}>
            <GiHamburgerMenu
              className={styles.icon}
              onClick={() => setOpen(!isOpen)}
            />
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default NavBar;
