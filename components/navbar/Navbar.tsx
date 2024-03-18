"use client";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Link from "next/link";
import styles from "./navbar.module.css";

const Navbar = () => {
  const handleDownload = () => {
    const resume: any = document.querySelector(".resume");
    html2canvas(resume).then((canvas: any) => {
      const imgData = canvas.toDataURL("img/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("resume.pdf");
    });
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
