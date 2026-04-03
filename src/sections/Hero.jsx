import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Hero.module.css';
import heroImage from '../assets/hero.png';

const Hero = () => {
  const containerRef = useRef(null);
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const textRef3 = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center',
        end: 'bottom center',
        toggleActions: 'play none none reverse',
      }
    });

    tl.fromTo(textRef1.current, 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    )
    .fromTo(textRef2.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
      '-=0.7'
    )
    .fromTo(textRef3.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
      '-=0.7'
    )
    .fromTo(imageRef.current,
      { scale: 0.9, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.2, ease: 'power2.out' },
      '-=1'
    );
  }, []);

  return (
    <section className={styles.heroSection} ref={containerRef}>
      <div className={styles.content}>
        <h1 className={styles.greeting} ref={textRef1}>Hi, I'm Feroz.</h1>
        <h2 className={styles.headline} ref={textRef2}>
          I build calm, practical, and meaningful digital systems.
        </h2>
        <p className={styles.subheadline} ref={textRef3}>
          Focused on networking, real-world applications, and solving everyday problems through technology.
        </p>
      </div>
      <div className={styles.imageWrapper} ref={imageRef}>
        <img src={heroImage} alt="Mohamed Feroz" className={styles.heroImage} />
      </div>
    </section>
  );
};

export default Hero;
