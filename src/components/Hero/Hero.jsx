import styles from "./Hero.module.css"
// import avatar from "../../assets/avatar.jpg"
import githubImg from "../../assets/icons/github.svg"
import linkedinImg from "../../assets/icons/linkedin.svg"
import emailImg from "../../assets/icons/email.svg"
import arrow_down from "../../assets/icons/arrow-down.svg"
import { useTranslation } from "react-i18next"

export default function Hero() {
  const { t } = useTranslation()
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.avatarWrapper}>{/* <img src={avatar} alt="avatar" /> */}</div>

      <h1>
        {t("heroTitle")} <span>Demian InVeStOr.</span>
      </h1>

      <p>{t("heroDesc")}</p>

      <div className={styles.socials}>
        <div className={styles.socialsDiv}>
          <img className={styles.img} src={githubImg} alt="" />
        </div>
        <div className={styles.socialsDiv}>
          <img className={styles.img} src={linkedinImg} alt="" />
        </div>
        <div className={styles.socialsDiv}>
          <img className={styles.img} src={emailImg} alt="" />
        </div>
      </div>

      <div className={styles.buttons}>
        <button
          className={styles.primary}
          onClick={() => {
            document.getElementById("projects").scrollIntoView({ behavior: "smooth" })
          }}
        >
          {t("heroBtn1")}
        </button>
        <button
          className={styles.secondary}
          onClick={() => {
            document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
          }}
        >
          {t("heroBtn2")}
        </button>
      </div>

      <div className={styles.scroll}>
        <button
          className={styles.scrollFooter}
          onClick={() => {
            document.getElementById("footer").scrollIntoView({ behavior: "smooth" })
          }}
        >
          <img className={styles.arrowImg} src={arrow_down} alt="↓" />
        </button>
      </div>
    </section>
  )
}
