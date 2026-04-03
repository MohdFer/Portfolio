import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import styles from './AudioToggle.module.css';

const AudioToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // We create the audio object once
    audioRef.current = new Audio('https://cdn.pixabay.com/download/audio/2022/11/22/audio_febc508520.mp3?filename=ambient-piano-amp-strings-10711.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3; // subtle
    
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
