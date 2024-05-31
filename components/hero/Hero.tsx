import styles from "./hero.module.css";

const Hero = () => {
  return (
    <div className={`flex a-center ${styles.hero}`} id="about">
      <img src="/Avnish_Gray.png" alt="Avnish Chhabra" className={styles.img} />
      <div className={`${styles.right}`}>
        <h1 className={styles.heading}>Avnish Chhabra</h1>
        <p className={styles.position}>Frontend Developer</p>
        <p className={styles.description}>
          I am a frontend developer who can turn complex ideas into functional
          web applications, using my knowledge of the latest trends in frontend
          development to create responsive, user-friendly interfaces that meet
          the needs of modern digital consumers. I am passionate about writing
          clean, modular, and maintainable code, following industry-standard
          coding practices.
        </p>
      </div>
    </div>
  );
};

export default Hero;
