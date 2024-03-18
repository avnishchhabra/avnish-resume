import { certificates } from "@/data/certificates";
import Heading from "../heading/Heading";
import styles from "./certificates.module.css";

const Certificates = () => {
  return (
    <div className={`${styles.educationCont}`}>
      <div>
        <Heading text="Certificates" />
      </div>
      <div className={`${styles.allEducations}`}>
        {certificates.map(({ duration, name, organisation }) => (
          <div className={`flex ${styles.companyCont}`}>
            <div className={styles.leftIndicator}></div>
            <div className={styles.rightContent}>
              <p className={styles.name}>{name}</p>
              <p className={styles.organisation}>{organisation}</p>
              <p className={styles.duration}>{duration}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
