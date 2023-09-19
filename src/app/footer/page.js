import styles from '../css/style.module.css'
import Image from 'next/image'

export default function FooterComponent() {
  return (
    <footer className={styles.footer}>
        <div className={styles.container}>

            <div className={styles.footerContent}>

              <div className={styles.logo}>
                <Image src='./arungkala.svg' alt='Logo'></Image>
                <p>© 2023 Arungkala, copyrights protected</p>
              </div>

              <div className={styles.index}>
                <a href='#about'>Tentang</a>
                <a href='#service'>Layanan</a>
                <a href="https://wa.me/628111967676?text=Hi,%20saya%20ingin%20berdiskusi">Kontak</a>
              </div>
            </div>

        </div>
    </footer>
  )
}
