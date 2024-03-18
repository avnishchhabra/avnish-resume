import Certificates from "@/components/certificates/Certificates";
import ContactDetails from "@/components/contact-details/ContactDetails";
import Education from "@/components/education/Education";
import Experience from "@/components/experience/Experience";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import Skills from "@/components/skills/Skills";
import styles from "./page.module.css";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="resume">
        <Hero />
        <ContactDetails />
        <Skills />
        <Experience />
        <div className={`flex j-between ${styles.bottom}`}>
          <Education />
          <Certificates />
        </div>
      </div>
    </>
  );
};

export default page;
