import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './Cursor.module.css';

const Cursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    const onMouseMove = (e) => {
      gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0 });
      gsap.to(follower, { x: e.clientX, y: e.clientY, duration: 0.8, ease: 'power3.out' });
      
      const target = e.target;
      const isHovering = target.closest('a') || target.closest('button') || target.closest('.magnetic');
      
      if (isHovering) {
        gsap.to(follower, { scale: 1.5, backgroundColor: 'var(--accent-color)', duration: 0.3 });
      } else {
        gsap.to(follower, { scale: 1, backgroundColor: 'transparent', duration: 0.3 });
      }
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <>
      <div className={styles.cursor} ref={cursorRef}></div>
      <div className={styles.follower} ref={followerRef}></div>
    </>
  );
};

export default Cursor;
