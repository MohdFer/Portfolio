import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './About.module.css';

const About = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(textRef.current.children, 
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        stagger: 0.2, 
        duration: 1, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      }
    );
  }, []);

  return (
    <section className={styles.aboutSection} ref={sectionRef}>
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content} ref={textRef}>
        <p>Enthusiastic B.Tech IT student with a strong interest in Networking and Ethical Hacking.</p>
        <p>I enjoy building systems that are practical, scalable, and useful in real-world scenarios — especially in areas like inventory management, quick commerce, and service platforms.</p>
        <p>I believe in simplicity, efficiency, and creating technology that actually helps people.</p>
        <p>Currently focused on improving my development skills, gaining industry experience, and exploring system design.</p>
      </div>
    </section>
  );
};

export default About;
