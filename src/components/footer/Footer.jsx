import React from 'react'
import Image from 'next/image';
import styles from "./Footer.module.css";


const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2026 Lamamia. All rights reserved.</div>
      <div className={styles.social}>
        <Image src="/1.png" width={15} height={15} className={styles.icon} alt='Lama Dev Facebook' />
        <Image src="/2.png" width={15} height={15} className={styles.icon} alt='Lama Dev Instgram' />
        <Image src="/3.png" width={15} height={15} className={styles.icon} alt='Lama Dev Twiter' />
        <Image src="/4.png" width={15} height={15} className={styles.icon} alt='Lama Dev Youtube' />
      </div>
    </div>
  );
}

export default Footer
