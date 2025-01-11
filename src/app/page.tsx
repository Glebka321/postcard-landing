import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.navContent}>
          <div className={styles.postcardWrapper}>
            <span className={styles.postcardText}>POSTCARD</span>
          </div>
        </div>
      </nav>

      <a
        href="https://testflight.apple.com/join/e9KpfwrB"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.logoContainer}
      >
        <Image
          src="/logo.png"
          alt="App Logo"
          width={80}
          height={80}
          className={styles.logo}
        />
        <p className={styles.downloadText}>DOWNLOAD ON THE APP STORE</p>
      </a>
      <footer className={styles.footer}>
        <div className={styles.footerLinks}>
          <a href="/terms" className={styles.footerLink}>
            Terms of Service
          </a>
          <a href="/privacy" className={styles.footerLink}>
            Privacy Policy
          </a>
        </div>
      </footer>
    </div>
  );
}
