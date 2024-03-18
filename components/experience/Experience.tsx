import { experiences } from "@/data/experience";
import Link from "next/link";
import Heading from "../heading/Heading";
import styles from "./experience.module.css";

const Experience = () => {
  return (
    <div className={`${styles.experienceCont}`} id="experience">
      <div>
        <Heading text="Work Experience (3.5+ Years) " />
      </div>
      <div className={`${styles.allExperiences}`}>
        {experiences.map(
          ({
            company,
            achievements,
            endDate,
            location,
            position,
            startDate,
          }) => (
            <div className={`flex ${styles.companyCont}`}>
              <div className={styles.leftIndicator}></div>
              <div className={styles.rightContent}>
                <div>
                  <p className={styles.position}>{position}</p>
                </div>
                <p className={styles.company}>{company}</p>
                <div
                  className={`flex j-between a-center ${styles.dateAndLocation}`}
                >
                  <p>
                    {startDate} - {endDate}
                  </p>
                  <p>{location}</p>
                </div>
                <p className={styles.achievementsTxt}>Projects/Achievements</p>
                <div className={styles.achievementsCont}>
                  {achievements.map(({ achievement, projectName, link }) => (
                    <div className={`flex ${styles.achievement}`}>
                      <div
                        className={`flex j-center a-center ${styles.pointCont}`}
                      >
                        <p className={styles.point}></p>
                      </div>
                      <div className={`${styles.right}`}>
                        <p className={styles.achievementRight}>
                          {projectName && (
                            <span className={styles.projectName}>
                              {projectName}:{" "}
                            </span>
                          )}
                          {achievement}
                        </p>
                        {link && (
                          <div className={`flex a-center ${styles.linkCont}`}>
                            <p>Link: </p>
                            <Link href={link} target="_blank">
                              {link}
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Experience;
