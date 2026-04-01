import styles from "./Header.module.css"
import { useTranslation } from "react-i18next"
import { useState } from "react"

export default function Header({ theme, setTheme }) {
  const { i18n, t } = useTranslation()
  const [open, setOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)

  const languages = {
    en: "EN",
    ua: "UA",
    it: "IT",
  }

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" })
    setOpen(false)
  }

  const changeLang = (lang) => {
    i18n.changeLanguage(lang)
    setLangOpen(false)
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

          {/* 🌙☀️ КНОПКА ТЕМИ */}
          <button
            className={styles.themeBtn}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          {/* 🌐 МОВИ */}
          <div className={styles.langDropdown}>
            <button className={styles.langCurrent} onClick={() => setLangOpen(!langOpen)}>
              🌐 {languages[i18n.language] || "EN"}
            </button>

            {langOpen && (
              <div className={styles.langMenu}>
                {Object.entries(languages).map(([code, label]) => (
                  <div
                    key={code}
                    onClick={() => changeLang(code)}
                    className={i18n.language === code ? styles.activeLang : ""}
                  >
                    {label}
                  </div>
                ))}
              </div>
            )}
          </div>
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
