import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Skills.module.css';

const skillCategories = [
  {
    title: 'IT',
    skills: [
      'Windows installation and setup',
      'PC hardware troubleshooting',
      'Driver and boot-error troubleshooting',
      'BIOS configuration',
      'Basic LAN cable testing',
      'Basic router configuration',
      'Networking fundamentals',
      'TCP/IP concepts',
      'LAN connectivity troubleshooting'
    ]
  },
  {
    title: 'Software & Tools',
    skills: ['Git', 'GitHub', 'Electron', 'Firebase', 'Vercel']
  },
  {
    title: 'Programming & Data',
    skills: ['Java', 'C', 'JavaScript', 'SQL', 'SQLite', 'PostgreSQL', 'Firebase Firestore']
  },
  {
    title: 'Other Tools',
    skills: ['Canva', 'Adobe Photoshop']
  }
];

const Skills = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);
  itemsRef.current = [];

  const addToRefs = el => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  useEffect(() => {
    itemsRef.current.forEach((item, index) => {
      if (!item) return;
      gsap.fromTo(item,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
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
    <section className={styles.skillsSection} ref={sectionRef}>
      <h2 className={styles.title}>Technical Skills</h2>
      <div className={styles.grid}>
        {skillCategories.map((category, idx) => (
          <div className={styles.category} key={idx}>
            <h3 className={styles.categoryTitle}>{category.title}</h3>
            <div className={styles.skillList}>
              {category.skills.map((skill, i) => (
                <div 
                  className={`glass-panel magnetic ${styles.skillBadge}`} 
                  key={i}
                  ref={addToRefs}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
