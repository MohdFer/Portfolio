import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Contact.module.css';

const Contact = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(textRef.current.children,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      }
    );
  }, []);

  return (
    <section className={styles.contactSection} ref={sectionRef}>
      <div className={styles.container} ref={textRef}>
        <h2 className={styles.title}>Let's Connect</h2>
        <p className={styles.goal}>
          I aim to gain strong industry experience as a developer and deepen my understanding of networking and system design.
          In the long term, I plan to work on impactful systems that solve real-world problems.
        </p>
      </div>
    </section>
  );
};

export default Contact;
