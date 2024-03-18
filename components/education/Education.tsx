import { educations } from "@/data/education";
import Heading from "../heading/Heading";
import styles from "./education.module.css";

const Education = () => {
  return (
    <div className={`${styles.educationCont}`} id="education">
      <div>
        <Heading text="Education" />
      </div>
      <div className={`${styles.allEducations}`}>
        {educations.map(({ degree, duration, institution, percentage }) => (
          <div className={`flex ${styles.companyCont}`}>
            <div className={styles.leftIndicator}></div>
            <div className={styles.rightContent}>
              <p className={styles.degree}>{degree}</p>
              <p className={styles.institution}>{institution}</p>
              <p className={styles.duration}>{duration}</p>
              <p className={styles.percentage}>{percentage}%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
