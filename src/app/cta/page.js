import Link from 'next/link';
import styles from '../css/style.module.css'
import Image from 'next/image';
import Whatsapp from '../assets/whatsapp.svg';
import Email from '../assets/mail.svg'

export default function CallToAction() {
  return (
    <section className={styles.ctaSection}>
        <div className={styles.ctaWave}>
            <svg className={styles.waves} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
            <defs>
                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g className={styles.parallax}>
                <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
            </svg>
        </div>
        <div className={styles.container}>

            <div className={styles.ctaContent}>
                <div className={styles.ctaTitle}>
                    Mari diskusi dengan kami
                </div>
                <div className={styles.ctaDescription}>
                    Hubungi kami perihal kebutuhan anda ke <a href='mailto:kontak@arungkala.com'>kontak@arungkala.com</a>
                </div>
                <div className={styles.possible}>
                    <Link href="https://wa.me/628111967676?text=Hi,%20saya%20ingin%20berdiskusi" className={`${styles.positiveButton} ${styles.whatsapp}`}><Image src={Whatsapp} className={styles.whatsappBtn} alt='Whatsapp Icon' width={16} height={16} />Whatsapp</Link>
                    <Link href={"mailto:kontak@arungkala.com"} className={styles.positiveButton}><Image src={Email} className={styles.whatsappBtn} alt='Whatsapp Icon' width={16} height={16} />Email</Link>
                </div>
            </div>

        </div>
    </section>
  )
}
