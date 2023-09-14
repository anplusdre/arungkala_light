'use client';
import { useEffect, useState } from 'react';
import styles from '../css/style.module.css'

export default function HomeComponent() {
  const [text, setText] = useState('');
  const originalText = "konten";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < originalText.length) {
        setText(originalText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100); // Adjust the speed of typing here (in milliseconds)
    
    return () => {
      clearInterval(timer); // Clean up the interval on unmount
    };
  }, []);
  return (
    <section className={styles.homeSection}>
        <div className={styles.container}>

            <div className={styles.homeFloater}>
                <div className={styles.indonesian}></div>
                <p>Pengemas Konten Profesional</p>
            </div>

            <div className={styles.homeTitle}>
                <h1>Pengemas <span>{text}</span> profesional dengan latar belakang karier di jurnalistik</h1>
                <h5>Kami mengemas cerita Anda agar akrab dengan audiens yang dituju.</h5>
            </div>

        </div>
    </section>
  )
}
