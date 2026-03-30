import styles from "./Header.module.css"
import { useTranslation } from "react-i18next"

export default function Header() {
  const { i18n } = useTranslation()
  const { t } = useTranslation()

  return (
    <header className={styles.header}>
      <div
        className={styles.logo}
        onClick={() => {
          document.getElementById("hero").scrollIntoView({ behavior: "smooth" })
        }}
      >
        InVeStOr.
      </div>

      <div className={styles.miniCont}>
        <nav className={styles.nav}>
          <a
            href="#about"
            onClick={() => {
              document.getElementById("about").scrollIntoView({ behavior: "smooth" })
            }}
          >
            {t("headerAbout")}
          </a>
          <a
            href="#projects"
            onClick={() => {
              document.getElementById("projects").scrollIntoView({ behavior: "smooth" })
            }}
          >
            {t("headerProjects")}
          </a>
          <a
            href="#skills"
            onClick={() => {
              document.getElementById("skills").scrollIntoView({ behavior: "smooth" })
            }}
          >
            {t("headerSkills")}
          </a>
        </nav>

        <div className={styles.actions}>
          <button
            className={styles.contact}
            onClick={() => {
              document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
            }}
          >
            {t("headerContact")}
          </button>
          <button
            className={`${styles.lang} ${i18n.language === "en" ? styles.active : ""}`}
            onClick={() => i18n.changeLanguage("en")}
          >
            EN
          </button>

          <button
            className={`${styles.lang} ${i18n.language === "ua" ? styles.active : ""}`}
            onClick={() => i18n.changeLanguage("ua")}
          >
            UA
          </button>
        </div>
      </div>
    </header>
  )
}
