import styles from "./Header.module.css"
import { useTranslation } from "react-i18next"
import { useState } from "react"

export default function Header() {
  const { i18n, t } = useTranslation()
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" })
    setOpen(false)
  }

  return (
    <header className={styles.header}>
      <div className={styles.logo} onClick={() => scrollTo("hero")}>
        InVeStOr.
      </div>

      <div className={`${styles.miniCont} ${open ? styles.open : ""}`}>
        <nav className={styles.nav}>
          <a onClick={() => scrollTo("about")}>{t("headerAbout")}</a>
          <a onClick={() => scrollTo("projects")}>{t("headerProjects")}</a>
          <a onClick={() => scrollTo("skills")}>{t("headerSkills")}</a>
        </nav>

        <div className={styles.actions}>
          <button className={styles.contact} onClick={() => scrollTo("contact")}>
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

      <div
        className={`${styles.burger} ${open ? styles.burgerOpen : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  )
}
