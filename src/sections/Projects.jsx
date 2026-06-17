import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Projects.module.css';

const projects = [
  {
    title: 'POS / Inventory Management System',
    tags: ['React', 'Firebase'],
    desc: 'Web-based billing and inventory system with real-time data handling. Designed for multi-device store usage.'
  },
  {
    title: 'Garments Trading ERP (EliteSoft)',
    tags: ['Electron', 'React.js','Express.js', 'Node.js', 'SQLite', 'Tailwind CSS'],
    desc: 'Engineered an offline-first, production-ready desktop ERP application for garments wholesalers and traders. Built GST-compliant PDF invoice generation and optimized the Windows packaging pipeline.'
  },
  {
    title: 'AI Music Filter (Concept)',
    tags: ['AI', 'Audio Processing', 'Chrome Extension'],
    desc: 'Chrome extension idea that removes background music and keeps speech. Focuses on AI and audio processing.'
  }
];

const Projects = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      gsap.fromTo(card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          }
        }
      );
    });
  }, []);

  return (
    <section className={styles.projectsSection} ref={sectionRef}>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.grid}>
        {projects.map((proj, idx) => (
          <div 
            className={`glass-panel magnetic ${styles.card}`} 
            key={idx}
            ref={el => cardsRef.current[idx] = el}
          >
            <h3 className={styles.projTitle}>{proj.title}</h3>
            <div className={styles.tags}>
              {proj.tags.map((tag, i) => (
                <span className={styles.tag} key={i}>{tag}</span>
              ))}
            </div>
            <p className={styles.desc}>{proj.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
