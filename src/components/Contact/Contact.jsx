import styles from "./Contact.module.css"
import phoneImg from "../../assets/icons/phone.svg"
import locationImg from "../../assets/icons/location.svg"
import emailImg from "../../assets/icons/email.svg"
import { useTranslation } from "react-i18next"

export default function Contact() {
  const { t } = useTranslation()

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.content}>
        <h2 className={styles.title}>{t("contactTitle")}</h2>
        <p className={styles.subtitle}>{t("contactSubtitle")}</p>
      </div>

      <div className={styles.container}>
        <div className={styles.left}>
          <div>
            <h3 className={styles.leftH3}>{t("leftTitle")}</h3>
            <p className={styles.leftP}>{t("leftText")}</p>
          </div>

          <div className={styles.info}>
            <div className={styles.item}>
              <div className={`${styles.icon} ${styles.email}`}>
                <img className={styles.img} src={emailImg} alt="email" />
              </div>
              <div>
                <span>{t("contactEmail")}</span>
                <p>alex.johnson@example.com</p>
              </div>
            </div>

            <div className={styles.item}>
              <div className={`${styles.icon} ${styles.phone}`}>
                <img className={styles.img} src={phoneImg} alt="phone" />
              </div>
              <div>
                <span>{t("contactPhone")}</span>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>

            <div className={styles.item}>
              <div className={`${styles.icon} ${styles.location}`}>
                <img className={styles.img} src={locationImg} alt="location" />
              </div>
              <div>
                <span>{t("contactLocation")}</span>
                <p>San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>

        <form className={styles.form}>
          <label>{t("contactYourEmail")}</label>
          <input type="text" placeholder="John Doe" />

          <label>{t("contactYourName")}</label>
          <input type="email" placeholder="john@example.com" />

          <label>{t("contactMessage")}</label>
          <textarea placeholder={t("placeholderMessage")} />

          <button type="submit">
            {t("contactSendMessage")} <span>➤</span>
          </button>
        </form>
      </div>
    </section>
  )
}
