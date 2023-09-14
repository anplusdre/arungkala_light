'use client';
import { useEffect, useState, useRef } from 'react';
import HomeComponent from '../home/page'
import AboutComponent from '../about/page'
import ServiceComponent from '../service/page'
import CallToAction from '../cta/page'
import FooterComponent from '../footer/page'
import styles from '../css/style.module.css'

export default function MainComponent() {
    const [activeSection, setActiveSection] = useState(null);
    const headerRef = useRef(null);
  
    useEffect(() => {
      // Function to handle smooth scrolling
      const handleScrollToSection = (sectionId) => {
        const section = document.querySelector(`#${sectionId}`);
        if (section) {
          window.scrollTo({
            top: section.offsetTop - headerRef.current.offsetHeight,
            behavior: 'smooth',
          });
        }
      };
  
      // Attach event listeners to each navigation link
      const navigationLinks = document.querySelectorAll('.scroll-link');
      navigationLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const sectionId = e.target.getAttribute('href').substring(1);
          handleScrollToSection(sectionId);
        });
      });
  
      // Detect the active section during scrolling
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const sections = ['about', 'service'];
  
        for (const sectionId of sections) {
          const section = document.querySelector(`#${sectionId}`);
          if (
            section.offsetTop <= scrollPosition + headerRef.current.offsetHeight &&
            section.offsetTop + section.offsetHeight > scrollPosition + headerRef.current.offsetHeight
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      };
  
      // Attach the scroll event listener
      window.addEventListener('scroll', handleScroll);
  
      // Clean up event listeners on unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    
  return (
    <div className={styles.main}>
        <div className={styles.header} ref={headerRef}>
            <div className={styles.headerWrapper}>
            <div className={styles.headerContent}>
                <div className={styles.logo}>
                <img src="./logo.png" alt="Logo" />
                </div>
                <div className={styles.navigation}>
                <a href="#about" className={activeSection === 'about' ? 'active scroll-link' : 'scroll-link'}>
                    Tentang
                </a>
                <a href="#service" className={activeSection === 'service' ? 'active scroll-link' : 'scroll-link'}>
                    Layanan
                </a>
                <a href="#contact" className={activeSection === 'contact' ? 'active scroll-link' : 'scroll-link'}>
                    Kontak
                </a>
                </div>
            </div>
            </div>
        </div>
        

      <HomeComponent />
      <div id='about'><AboutComponent /></div>
      <div id='service'><ServiceComponent/></div>
      <div id='contact'><CallToAction /></div>
      <FooterComponent  />
      </div>
  )
}
