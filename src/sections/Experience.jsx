import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Experience.module.css';

const experiences = [
  {
    role: 'Student Intern',
    company: 'FlutterFrog Software Solutions',
    date: 'Jul 2025 – Aug 2025',
    location: 'Nagercoil, India',
    details: [
      'Worked on StockFlow Admin App',
      'Developed telecalling feature',
      'Used Flutter, Firebase, Hive',
      'Integrated Bluetooth printing',
      'Contributed to real-world business workflow'
    ]
  },
  {
    role: 'Executive Member',
    company: 'BRIGITZ (IT Department Association)',
    date: 'Aug 2024 – Jul 2025',
    location: 'College',
    details: [
      'Participated in organizing technical activities',
      'Engaged in collaborative academic initiatives'
    ]
  }
];

const Experience = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    itemsRef.current.forEach((item, index) => {
      gsap.fromTo(item,
        { y: 50, opacity: 0 },
        {
          y: 0,
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
    <section className={styles.expSection} ref={sectionRef}>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.timeline}>
        {experiences.map((exp, idx) => (
          <div 
            className={`glass-panel magnetic ${styles.expCard}`} 
            key={idx}
            ref={el => itemsRef.current[idx] = el}
          >
            <div className={styles.expHeader}>
              <div>
                <h3 className={styles.role}>{exp.role}</h3>
                <h4 className={styles.company}>{exp.company}</h4>
              </div>
              <div className={styles.meta}>
                <span className={styles.date}>{exp.date}</span>
                <span className={styles.location}>{exp.location}</span>
              </div>
            </div>
            <ul className={styles.details}>
              {exp.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
