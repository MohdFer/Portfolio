import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Certifications.module.css';

const certifications = [
  { title: 'Introduction to Networking', issuer: 'NVIDIA', year: '2025' },
  { title: 'MongoDB Basics for Students', issuer: 'MongoDB', year: '2025' },
  { title: 'Python', issuer: 'GUVI', year: '2023' },
  { title: 'Fundamentals of Digital Marketing', issuer: 'Google', year: '2020' },
];

const Certifications = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    itemsRef.current.forEach((item, index) => {
      if (!item) return;
      gsap.fromTo(item,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
          }
        }
      );
    });
  }, []);

  return (
    <section className={styles.certSection} ref={sectionRef}>
      <h2 className={styles.title}>Certifications</h2>
      <div className={styles.list}>
        {certifications.map((cert, idx) => (
          <div 
            className={`glass-panel magnetic ${styles.certCard}`} 
            key={idx}
            ref={el => itemsRef.current[idx] = el}
          >
            <div className={styles.certContent}>
              <h3 className={styles.certTitle}>{cert.title}</h3>
              <p className={styles.certIssuer}>{cert.issuer}</p>
            </div>
            <div className={styles.certYear}>{cert.year}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
