import styles from "./Footer.module.css"
import githubImg from "../../assets/icons/github.svg"
import linkedinImg from "../../assets/icons/linkedin.svg"
import emailImg from "../../assets/icons/email.svg"
import { useTranslation } from "react-i18next"

export function Footer() {
  const { t } = useTranslation()

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
            <p>{t("footerLeftText")}</p>
          </div>

          <div className={styles.center}>
            <h4>{t("footerLinks")}</h4>
            <ul>
              <li
                onClick={() => {
                  document.getElementById("about").scrollIntoView({ behavior: "smooth" })
                }}
              >
                {t("footerAbout")}
              </li>
              <li
                onClick={() => {
                  document.getElementById("projects").scrollIntoView({ behavior: "smooth" })
                }}
              >
                {t("footerProjects")}
              </li>
              <li
                onClick={() => {
                  document.getElementById("skills").scrollIntoView({ behavior: "smooth" })
                }}
              >
                {t("footerSkills")}
              </li>
              <li
                onClick={() => {
                  document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
                }}
              >
                {t("footerContact")}
              </li>
            </ul>
          </div>

          <div className={styles.right}>
            <h4>{t("footerConnect")}</h4>
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
          <p>{t("footerCopyright")} InVeStOr. © 2026</p>
        </div>
      </div>
    </footer>
  )
}
