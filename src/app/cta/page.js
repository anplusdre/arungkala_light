import Link from 'next/link';
import styles from '../css/style.module.css'
import Image from 'next/image';
import Whatsapp from '../assets/whatsapp.svg';
import Email from '../assets/mail.svg'

export default function CallToAction() {
  return (
    <section className={styles.ctaSection}>
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
