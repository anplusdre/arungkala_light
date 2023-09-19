'use client';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image'
import HomeComponent from '../home/page'
import AboutComponent from '../about/page'
import ServiceComponent from '../service/page'
import CallToAction from '../cta/page'
import FooterComponent from '../footer/page'
import styles from '../css/style.module.css'
import dark from '../assets/dark_icon.svg'
import light from '../assets/light_icon.svg'

export default function MainComponent() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [activeSection, setActiveSection] = useState(null);
    const headerRef = useRef(null);

    const toggleDarkMode = () => {
      setIsDarkMode(!isDarkMode);
    };
  
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

    // Add or remove 'dark-mode' class on the body element when isDarkMode changes
    useEffect(() => {
      if (isDarkMode) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }

      // You can also save the dark mode preference in localStorage
      localStorage.setItem('darkMode', isDarkMode.toString());
    }, [isDarkMode]);
    
  return (
    <div className={isDarkMode ? `${styles.main} ${styles.darkMode}` : styles.main}>
        <div className={styles.header} ref={headerRef}>
            <div className={styles.headerWrapper}>
                <div className={styles.headerContent}>
                    <div className={styles.logo}>
                    <Image src="./logo.png" alt="Logo" />
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
                    <a className={styles.themeToggler} onClick={toggleDarkMode}>
                      {isDarkMode ? (
                        <Image src={light} alt="light mode icon" width={20} height={20} />
                      ) : (
                        <Image src={dark} alt="light mode icon" width={20} height={20} />
                      )}
                    </a>
                    </div>
                </div>
            </div>
        </div>

        <div className={styles.headerMobile} ref={headerRef}>
            <div className={styles.container}>
                <div className={styles.headerContent}>
                    <div className={styles.logo}>
                        <Image src="./arungkala.svg" alt="Logo" />
                    </div>
                    <div className={styles.possible}>
                        <a href="#contact">Kontak</a>
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
