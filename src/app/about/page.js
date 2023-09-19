import styles from '../css/style.module.css';
import Image from 'next/image';

export default function AboutComponent() {
  return (
    <section className={styles.aboutSection}>
        <div className={styles.container}>

            <div className={styles.aboutContent}>
                <div className={styles.aboutUs}>
                    <div className={styles.obvious}>Setiap Citra, Butuh Cerita</div>
                    <div className={styles.easy}>Misi kami sederhana, Kami ingin memberikan layanan terbaik untuk Anda, klien berharga kami. Tim kami berupaya secara maksimal dalam mencari solusi atas berbagai tantangan yang jenama Anda hadapi. Kami percaya keterbukaan komunikasi adalah kunci keberhasilan dari setiap kolaborasi yang terjalin bersama Anda. Diskusikan dengan kami perihal kebutuhan Anda sekarang!</div>
                    <div className={styles.possible}>
                        <a href="#contact" className={styles.positiveButton}>Hubungi Kami</a>
                        <a href="#service" className={styles.ghostButton}>Layanan</a>
                    </div>
                </div>
                <div className={styles.aboutImages}>
                    <Image src='./papers.png' className={styles.imageOne} alt='Papers'></Image>
                    <Image src='./typewriter.png' className={styles.imageTwo} alt='Typewriter'></Image>
                </div>
            </div>



        </div>
    </section>
  )
}
