import { skills } from "@/data/skills";
import Heading from "../heading/Heading";
import styles from "./skills.module.css";

const Skills = () => {
  return (
    <div className={styles.skillsCont} id="skills">
      <Heading text="Skills" />
      <div className={`flex ${styles.skills}`}>
        {skills?.map(({ skill }) => (
          <p key={skill} className={`flex j-center a-center ${styles.skill}`}>
            {skill}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Skills;
