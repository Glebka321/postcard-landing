import styles from "../Legal.module.css";

export default function PrivacyPolicy() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.heading}>Privacy Policy</h1>
        <p className={styles.lastUpdated}>Last Updated: January 7, 2025</p>

        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>1. Information We Collect</h2>

          <section className={styles.section}>
            <h3 className={styles.subsectionHeading}>
              1.1 Information You Provide
            </h3>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                Photos uploaded through the app
              </li>
              <li className={styles.listItem}>Email addresses of recipients</li>
              <li className={styles.listItem}>
                Device photo library access permissions
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h3 className={styles.subsectionHeading}>
              1.2 Automatically Collected Information
            </h3>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                Device information (type, OS version)
              </li>
              <li className={styles.listItem}>App usage statistics</li>
              <li className={styles.listItem}>Error logs</li>
              <li className={styles.listItem}>Email delivery status</li>
            </ul>
          </section>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>
            2. How We Use Your Information
          </h2>
          <p className={styles.paragraph}>We use collected information to:</p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              Process and deliver photos to recipients
            </li>
            <li className={styles.listItem}>Improve the Service</li>
            <li className={styles.listItem}>Maintain app security</li>
            <li className={styles.listItem}>Debug technical issues</li>
            <li className={styles.listItem}>Comply with legal obligations</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>
            3. Photo Storage and Transmission
          </h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              Photos are temporarily stored for transmission purposes only
            </li>
            <li className={styles.listItem}>
              Photos are automatically deleted after successful delivery
            </li>
            <li className={styles.listItem}>
              Photos are encrypted during transmission
            </li>
            <li className={styles.listItem}>
              We do not maintain a permanent database of transmitted photos
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>4. Email Handling</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              Recipient email addresses are used only for photo delivery
            </li>
            <li className={styles.listItem}>
              Email addresses are not stored after photo delivery
            </li>
            <li className={styles.listItem}>
              The sender&apos;s identity is not disclosed to recipients
            </li>
            <li className={styles.listItem}>
              Email content is encrypted during transmission
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>5. Data Security</h2>
          <p className={styles.paragraph}>
            We implement reasonable security measures to protect your
            information, including:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>Encryption during transmission</li>
            <li className={styles.listItem}>Secure temporary storage</li>
            <li className={styles.listItem}>Regular security audits</li>
            <li className={styles.listItem}>Access controls for our systems</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>6. Third-Party Services</h2>
          <p className={styles.paragraph}>
            We may use third-party services for:
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>Email delivery</li>
            <li className={styles.listItem}>Analytics</li>
            <li className={styles.listItem}>Error tracking</li>
          </ul>
          <p className={styles.paragraph}>
            These services have their own privacy policies and data handling
            practices.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>7. Data Retention</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              Photos are deleted immediately after successful delivery
            </li>
            <li className={styles.listItem}>
              Technical logs are retained for 30 days
            </li>
            <li className={styles.listItem}>
              Analytics data is anonymized after 90 days
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>8. Your Rights</h2>
          <p className={styles.paragraph}>You have the right to:</p>
          <ul className={styles.list}>
            <li className={styles.listItem}>Access your data</li>
            <li className={styles.listItem}>Request data deletion</li>
            <li className={styles.listItem}>Opt-out of analytics</li>
            <li className={styles.listItem}>
              Revoke photo library permissions
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>9. Children&apos;s Privacy</h2>
          <p className={styles.paragraph}>
            The Service is not intended for users under 13 years of age. We do
            not knowingly collect information from children.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>
            10. Changes to Privacy Policy
          </h2>
          <p className={styles.paragraph}>
            We may update this Privacy Policy from time to time. Users will be
            notified of significant changes via the app or email.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionHeading}>11. Contact Us</h2>
          <p className={styles.paragraph}>
            For privacy-related questions or concerns, contact us at [contact
            email].
          </p>
        </section>
      </div>
    </div>
  );
}
