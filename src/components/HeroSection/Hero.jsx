
import styles from './Hero.module.css'
import Image from "next/image";
import Button from "@/components/Button/Button";


const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products.
        </h1>
        <p className={styles.desc}>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Button url="/portfolio" text="see our works" />
      </div>
      <div className={styles.item}>
        <Image
          src="/hero.png"
          loading="eager"
          width={500}
          height={500}
          alt="Hero"
          className={styles.img}
        />
      </div>
    </div>
  );
}

export default Hero
