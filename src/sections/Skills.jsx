import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Skills.module.css';

const skillCategories = [
  {
    title: 'Technologies',
    skills: ['React', 'Firebase', 'Flutter', 'Python', 'Java']
  },
  {
    title: 'Concepts',
    skills: ['Networking', 'Operating Systems', 'Data Structures']
  },
  {
    title: 'Tools',
    skills: ['GitHub', 'VS Code', 'Firebase Console']
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
      <h2 className={styles.title}>Skills</h2>
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
