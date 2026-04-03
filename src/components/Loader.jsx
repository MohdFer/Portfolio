import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './Loader.module.css';

const Loader = ({ onComplete }) => {
  const loaderRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
      }
    });

    tl.to(textRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out'
    })
    .to(textRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.8,
      delay: 0.5,
      ease: 'power3.in'
    })
    .to(loaderRef.current, {
      yPercent: -100,
      duration: 1.2,
      ease: 'expo.inOut'
    });

  }, [onComplete]);

  return (
    <div className={styles.loader} ref={loaderRef}>
      <h2 className={styles.text} ref={textRef}>Building calm digital systems...</h2>
    </div>
  );
};

export default Loader;
