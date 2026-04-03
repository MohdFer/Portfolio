import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <>
      <div className={styles.iconContainer}>
        <a href="https://linkedin.com/in/Mohamed-Feroz" target="_blank" rel="noopener noreferrer" className={`magnetic ${styles.iconLink}`} aria-label="LinkedIn">
          <FaLinkedin size={22} />
        </a>
        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className={`magnetic ${styles.iconLink}`} aria-label="Instagram">
          <FaInstagram size={22} />
        </a>
        <a href="https://github.com/mohamedferoz" target="_blank" rel="noopener noreferrer" className={`magnetic ${styles.iconLink}`} aria-label="GitHub">
          <FaGithub size={22} />
        </a>
        <a href="mailto:mhdfroez@outlook.com" className={`magnetic ${styles.iconLink}`} aria-label="Email">
          <FaEnvelope size={22} />
        </a>
      </div>
      <div className={styles.copyright}>
        © Mohamed Feroz
      </div>
    </>
  );
};

export default Sidebar;
