"use client";

import styles from "./navbar.module.css";

const Navbar = () => {
  const handleDownload = () => {
    var link = document.createElement("a");
    link.download = "Avnish_Frontend.pdf";
    link.href = "Avnish_Frontend.pdf";
    document.body.appendChild(link);
    link.click();
  };

  const scrollTo = (id: any) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  return (
    <div className={styles.navCont}>
      <div className={`flex j-between ${styles.navbar}`}>
        <div className={`flex a-center ${styles.left}`}>
          <p className={styles.link} onClick={() => scrollTo("about")}>
            About
          </p>
          <p className={styles.link} onClick={() => scrollTo("contact")}>
            Contact
          </p>
          <p className={styles.link} onClick={() => scrollTo("skills")}>
            Skills
          </p>
          <p className={styles.link} onClick={() => scrollTo("experience")}>
            Experience
          </p>
          <p className={styles.link} onClick={() => scrollTo("education")}>
            Education
          </p>
        </div>
        {/* <Menu className={styles.menu} onClick={handleMenuOpen} /> */}
        <div
          className={`flex a-center ${styles.right}`}
          onClick={handleDownload}
        >
          Download Resume
        </div>
      </div>
    </div>
  );
};

export default Navbar;
