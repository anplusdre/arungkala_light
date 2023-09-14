import styles from '../css/style.module.css'

export default function FooterComponent() {
  return (
    <footer className={styles.footer}>
        <div className={styles.container}>

            <div className={styles.footerContent}>

              <div className={styles.logo}>
                <img src='./arungkala.svg'></img>
                <p>© 2023 Arungkala, copyrights protected</p>
              </div>

              <div className={styles.index}>
                <a href='#about'>Tentang</a>
                <a href='#service'>Layanan</a>
                <a href='#contact'>Kontak</a>
              </div>
            </div>

        </div>
    </footer>
  )
}
