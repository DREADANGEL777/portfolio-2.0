import styles from "./Footer.module.css"
import githubImg from "/assets/github.svg"
import linkedinImg from "/assets/linkedin.svg"
import emailImg from "/assets/email.svg"

export function Footer() {
  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.left}>
            <h3
              onClick={() => {
                document.getElementById("hero").scrollIntoView({ behavior: "smooth" })
              }}
            >
              InVeStOr.
            </h3>
            <p>Building digital experiences that make a difference.</p>
          </div>

          <div className={styles.center}>
            <h4>Quick Links</h4>
            <ul>
              <li
                onClick={() => {
                  document.getElementById("about").scrollIntoView({ behavior: "smooth" })
                }}
              >
                About
              </li>
              <li
                onClick={() => {
                  document.getElementById("projects").scrollIntoView({ behavior: "smooth" })
                }}
              >
                Projects
              </li>
              <li
                onClick={() => {
                  document.getElementById("skills").scrollIntoView({ behavior: "smooth" })
                }}
              >
                Skills
              </li>
              <li
                onClick={() => {
                  document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
                }}
              >
                Contact
              </li>
            </ul>
          </div>

          <div className={styles.right}>
            <h4>Connect</h4>
            <div className={styles.icons}>
              <span>
                <img className={styles.socialIMG} src={githubImg} alt="github" />
              </span>
              <span>
                <img className={styles.socialIMG} src={linkedinImg} alt="linkedin" />
              </span>
              <span>
                <img className={styles.socialIMG} src={emailImg} alt="email" />
              </span>
            </div>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <p>Made with ❤️ by InVeStOr. © 2026</p>
        </div>
      </div>
    </footer>
  )
}
