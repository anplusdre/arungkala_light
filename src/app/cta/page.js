import Link from 'next/link';
import styles from '../css/style.module.css'
import Image from 'next/image';
import Whatsapp from '../assets/whatsapp.svg';

export default function CallToAction() {
  return (
    <section className={styles.ctaSection}>
        <div className={styles.container}>

            <div className={styles.ctaContent}>
                <div className={styles.ctaTitle}>
                    Mari kenalan lebih lanjut
                </div>
                <div className={styles.ctaDescription}>
                    Hubungi kami perihal kebutuhan anda
                </div>
                <div className={styles.possible}>
                    <Link href="https://wa.me/6282260431542?text=I'm%20interested%20in%20your%20service" className={styles.positiveButton}><Image src={Whatsapp} className={styles.whatsappBtn} alt='Whatsapp Icon' width={16} height={16} />Hubungi Kami</Link>
                </div>
            </div>

        </div>
    </section>
  )
}