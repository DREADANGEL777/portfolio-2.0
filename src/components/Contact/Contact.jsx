import styles from "./Contact.module.css"
import phoneImg from "/assets/phone.svg"
import locationImg from "/assets/location.svg"
import emailImg from "/assets/email.svg"

export default function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.content}>
        <h2 className={styles.title}>Get In Touch</h2>
        <p className={styles.subtitle}>
          Have a project in mind or want to collaborate? I'd love to hear from you!
        </p>
      </div>

      <div className={styles.container}>
        <div className={styles.left}>
          <div>
            <h3 className={styles.leftH3}>Let's Connect</h3>
            <p className={styles.leftP}>
              I'm always open to discussing new projects, creative ideas, or opportunities to be
              part of your vision.
            </p>
          </div>

          <div className={styles.info}>
            <div className={styles.item}>
              <div className={`${styles.icon} ${styles.email}`}>
                <img className={styles.img} src={emailImg} alt="email" />
              </div>
              <div>
                <span>Email</span>
                <p>alex.johnson@example.com</p>
              </div>
            </div>

            <div className={styles.item}>
              <div className={`${styles.icon} ${styles.phone}`}>
                <img className={styles.img} src={phoneImg} alt="phone" />
              </div>
              <div>
                <span>Phone</span>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>

            <div className={styles.item}>
              <div className={`${styles.icon} ${styles.location}`}>
                <img className={styles.img} src={locationImg} alt="location" />
              </div>
              <div>
                <span>Location</span>
                <p>San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>

        <form className={styles.form}>
          <label>Your Name</label>
          <input type="text" placeholder="John Doe" />

          <label>Your Email</label>
          <input type="email" placeholder="john@example.com" />

          <label>Message</label>
          <textarea placeholder="Tell me about your project..." />

          <button type="submit">
            Send Message <span>➤</span>
          </button>
        </form>
      </div>
    </section>
  )
}
