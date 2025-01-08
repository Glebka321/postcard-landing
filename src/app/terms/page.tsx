import styles from "../Legal.module.css";

export default function TermsOfService() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.heading}>Terms of Service</h1>
        <p className={styles.lastUpdated}>Last Updated: January 7, 2025</p>

        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>1. Acceptance of Terms</h2>
          <p className={styles.paragraph}>
            By accessing and using the Postcard app (&quot;Service&quot;), you
            agree to be bound by these Terms of Service (&quot;Terms&quot;). If
            you disagree with any part of these terms, you may not use our
            Service.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>2. Service Description</h2>
          <p className={styles.paragraph}>Postcard allows users to:</p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              Upload photos from their device&apos;s photo library
            </li>
            <li className={styles.listItem}>
              Send photos anonymously via email to recipients
            </li>
            <li className={styles.listItem}>
              Use email services to deliver content
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>3. User Conduct</h2>
          <p className={styles.paragraph}>
            You agree not to use the Service to:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              Upload or transmit any content that is illegal, harmful,
              threatening, abusive, harassing, defamatory, or otherwise
              objectionable
            </li>
            <li className={styles.listItem}>
              Impersonate any person or entity
            </li>
            <li className={styles.listItem}>
              Upload content that infringes upon any intellectual property
              rights
            </li>
            <li className={styles.listItem}>
              Transmit spam, chain letters, or other unsolicited communications
            </li>
            <li className={styles.listItem}>
              Upload content containing malware, viruses, or harmful code
            </li>
            <li className={styles.listItem}>Harass, abuse, or harm others</li>
            <li className={styles.listItem}>
              Upload sexually explicit or violent content
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>4. Content Guidelines</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              You retain ownership of photos you upload
            </li>
            <li className={styles.listItem}>
              By using our Service, you grant us a license to transmit your
              photos as necessary to provide the Service
            </li>
            <li className={styles.listItem}>
              You are responsible for ensuring you have the right to share any
              photos you upload
            </li>
            <li className={styles.listItem}>
              We reserve the right to remove any content that violates these
              Terms
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>5. Service Limitations</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              We do not guarantee uninterrupted access to the Service
            </li>
            <li className={styles.listItem}>
              We may modify or discontinue features without notice
            </li>
            <li className={styles.listItem}>
              Email delivery times are not guaranteed
            </li>
            <li className={styles.listItem}>
              Photo quality may be affected by compression or technical
              limitations
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>6. Termination</h2>
          <p className={styles.paragraph}>
            We reserve the right to terminate or suspend your access to the
            Service without prior notice for any violation of these Terms.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>7. Disclaimer of Warranties</h2>
          <p className={styles.paragraph}>
            The Service is provided &quot;as is&quot; without warranties of any
            kind, either express or implied.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>8. Limitation of Liability</h2>
          <p className={styles.paragraph}>
            We shall not be liable for any indirect, incidental, special,
            consequential, or punitive damages resulting from your use of the
            Service.
          </p>
        </section>
      </div>
    </div>
  );
}
