import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import styles from './AudioToggle.module.css';
import lofiAudio from '../assets/Lofi.mp3';

const AudioToggle = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    // We create the audio object once
    audioRef.current = new Audio(lofiAudio);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3; // subtle
    
    // Attempt auto-play
    const playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        console.log('Autoplay prevented by browser:', error);
        setIsPlaying(false);
      });
    }

    return () => {
      audioRef.current.pause();
    };
  }, []);

  const toggleSound = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.log('Audio play failed', e));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button className={`${styles.audioBtn} magnetic`} onClick={toggleSound} aria-label="Toggle Sound">
      {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
      <span className={styles.label}>{isPlaying ? 'SOUND ON' : 'SOUND OFF'}</span>
    </button>
  );
};

export default AudioToggle;
