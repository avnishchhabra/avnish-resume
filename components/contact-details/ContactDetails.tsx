"use client";

import {
  Email,
  Github,
  Linkedin,
  Location,
  Phone,
  Website,
} from "../../public/icons/icons";
import styles from "./contact.module.css";

const ContactDetails = () => {
  return (
    <div className={`${styles.contactDetails}`} id="contact">
      <div className={styles.inner}>
        {items?.map(({ icon, text }) => (
          <ContactItem key={icon} icon={icon} text={text} />
        ))}
      </div>
    </div>
  );
};

export default ContactDetails;

const ContactItem = ({ icon, text }: any) => {
  return (
    <div className={`flex a-center ${styles.item}`}>
      {icon}
      <p className={styles.itemTxt}>{text}</p>
    </div>
  );
};

const items = [
  {
    id: 1,
    icon: <Email />,
    text: "avnishchhabra04@gmail.com",
  },
  {
    id: 2,
    icon: <Phone />,
    text: "9306467463",
  },
  {
    id: 3,
    icon: <Location />,
    text: "Gurugram, Haryana",
  },
  {
    id: 4,
    icon: <Website />,
    text: "https://avnishchhabra.netlify.app",
  },
  {
    id: 5,
    icon: <Linkedin />,
    text: "www.linkedin.com/avnish-chhabra",
  },
  {
    id: 6,
    icon: <Github />,
    text: "www.github.com/avnishchhabra",
  },
];
