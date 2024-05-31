import { Inter } from "next/font/google";
import "../css/flex.css";
import "../css/globals.css";
import "../css/variables.css";
import styles from "./layout.module.css";

const inter_font = Inter({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--inter",
});

export const metadata = {
  title: "Avnish Chhabra",
  description:
    "Frontend developer who makes responsive user friendly web applications",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter_font.className}>
      <body className={`${styles.children}`}>{children}</body>
    </html>
  );
}
