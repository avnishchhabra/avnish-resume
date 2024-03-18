"use client";

import Link from "next/link";
import styles from "./navbar.module.css";

const Navbar = () => {
  const handleDownload = () => {
    var link = document.createElement("a");
    link.download = "Avnish_Frontend.pdf";
    link.href = "Avnish_Frontend.pdf";
    document.body.appendChild(link);
    link.click();
  };

  const handleMenuOpen = () => {};
  return (
    <div className={styles.navCont}>
      <div className={`flex j-between ${styles.navbar}`}>
        <div className={`flex a-center ${styles.left}`}>
          <Link className={styles.link} href="#about">
            About
          </Link>
          <Link className={styles.link} href="#contact">
            Contact
          </Link>
          <Link className={styles.link} href="#skills">
            Skills
          </Link>
          <Link className={styles.link} href="#experience">
            Experience
          </Link>
          <Link className={styles.link} href="#education">
            Education
          </Link>
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
