import styles from '../css/style.module.css';
import Image from 'next/image';
import Content from '../assets/content.svg';
import Speaker from '../assets/speaker.svg';
import Chess from '../assets/chess.svg';
import Social from '../assets/social.svg';
import Research from '../assets/research.svg';

const blue = {background: '#DEF3F6'};
const pink = {background: '#FFE7EE'};
const yellow = {background: '#FFEAD2'};
const purple = {background: '#F2EBFF'};
const green = {background: '#D5F1DD'};

export default function ServiceComponent() {
  return (
    <section className={styles.serviceSection} id='service'>
        <div className={styles.container}>

            <div className={styles.serviceContent}>
              <h1 className={styles.serviceListTitle}>Daftar Layanan Kami</h1>
              <div className={styles.serviceList}>

                <div className={styles.List}>
                  <div className={styles.listName} style={blue}>
                    <Image src={Content} className={styles.serviceIcon} alt='Arungkala Icon' width={24} height={24}/>
                    <div className={styles.serviceName}>Layanan Pembuatan Konten</div>
                  </div>
                  <div className={styles.serviceDescription}>
                    Bertutur lentur agar mudah dicerna; sekaligus tetap setia pada makna dan data. Kami mengemas cerita Anda agar akrab dengan pasar.
                  </div>
                </div>

                <div className={styles.List}>
                  <div className={styles.listName} style={pink}>
                    <Image src={Speaker} className={styles.serviceIcon} alt='Arungkala Icon' width={24} height={24}/>
                    <div className={styles.serviceName}>Manajemen Relasi Media</div>
                  </div>
                  <div className={styles.serviceDescription}>
                    Arungkala, bekerja sama dengan <a href='http://konpers.com' target="_blank">konpers.com</a>, memudahkan pekerjaan relasi media Anda. Layanan ini membantu Anda mengemas, mendistribusikan, dan memantau siaran pers.
                  </div>
                </div>

                <div className={styles.List}>
                  <div className={styles.listName} style={yellow}>
                    <Image src={Chess} className={styles.serviceIcon} alt='Arungkala Icon' width={24} height={24}/>
                    <div className={styles.serviceName}>Strategi dan Konsultasi Media</div>
                  </div>
                  <div className={styles.serviceDescription}>
                      Cerita jenama atau institusi Anda akan berkembang seiring waktu. Kami membuatnya tetap relevan dengan tren dan fenomena.
                  </div>
                </div>

                <div className={styles.List}>
                  <div className={styles.listName} style={purple}>
                    <Image src={Social} className={styles.serviceIcon} alt='Arungkala Icon' width={24} height={24}/>
                    <div className={styles.serviceName}>Pengelolaan Sosial Media</div>
                  </div>
                  <div className={styles.serviceDescription}>
                      Kehadiran jenama dan lembaga Anda bisa dikenal publik jika digaungkan secara efektif di media sosial, dengan cara yan pas. Kami melakukannya dengan pemantauan dan laporan tercatat.
                  </div>
                </div>

                <div className={styles.List}>
                  <div className={styles.listName} style={green}>
                    <Image src={Research} className={styles.serviceIcon} alt='Arungkala Icon' width={24} height={24}/>
                    <div className={styles.serviceName}>Data dan Riset</div>
                  </div>
                  <div className={styles.serviceDescription}>
                      Data dan Riset di Arungkala melibatkan analisis dari beragam hipotesis yang telah kami jelajahi.
                  </div>
                </div>

              </div>
            </div>

        </div>
    </section>
  )
}
