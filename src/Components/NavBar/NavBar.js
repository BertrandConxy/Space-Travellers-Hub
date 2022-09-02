import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { NavLink } from 'react-router-dom';
import logo from '../../assets/planet.png';
import styles from './navBar.module.css';

const NavBar = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [isOpen, setOpen] = useState(true);
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };
    const animation = useAnimation();
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
     if (offsetY > 0) {
        animation.start({
          x: '-100vw',
          transition: {
            type: 'spring',
            duration: 0.7,
          },
        });
      }

      if (offsetY === 0) {
        animation.start({
          x: 0,
          transition: {
            type: 'spring',
            stiffness: 100,
            duration: 0.7,
        },
      });
    }
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offsetY])

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
    <motion.header animate={animation} className={ isOpen ? `${styles.open} ${styles.header}` : styles.header}>
      <div className={styles['logo-container']}>
        <div className={styles['logo-container__icon']}>
          <NavLink to="/"><img src={logo} className={styles.logo} alt="STH logo" /></NavLink>
        </div>
      </div>
      <nav className={styles['nav-container']}>
        
          { isOpen ? <AiOutlineClose className={styles.icon} /> : <GiHamburgerMenu className={styles.icon}/> }
        
        <ul className={ isOpen ? `${styles['nav-column']} ${styles['nav-list']}` : styles['nav-list']}>
          {Links.map((link) => (
            <li className={ isOpen ? `${styles['nav-column__item']} ${styles['nav-list__item']}` : styles['nav-list__item'] } onClick={()=> setOpen(false)} key={link.id}>
              <NavLink to={link.path}>{link.text}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};

export default NavBar;
