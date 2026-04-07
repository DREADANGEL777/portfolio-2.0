import styles from "./Contact.module.css"
import phoneImg from "../../assets/icons/phone.svg"
import locationImg from "../../assets/icons/location.svg"
import emailImg from "../../assets/icons/email.svg"

import { useTranslation } from "react-i18next"
import { useState } from "react"

import { db } from "../../firebase"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"

export default function Contact() {
  const { t } = useTranslation()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const newErrors = {}
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email"
    }

    if (formData.message.trim().length < 20) {
      newErrors.message = "Message must be at least 20 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })

    setErrors({
      ...errors,
      [e.target.name]: "",
    })
  }

  const getUserIP = async () => {
    try {
      const res = await fetch("https://api.ipify.org?format=json")
      const data = await res.json()
      return data.ip
    } catch (err) {
      console.error("IP fetch error:", err)
      return null
    }
  }

  const getCountry = async (ip) => {
    try {
      const res = await fetch(`https://ipapi.co/${ip}/json/`)
      const data = await res.json()
      return data.country_name || "Unknown"
    } catch (err) {
      console.error("Geo fetch error:", err)
      return "Unknown"
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validate()) return

    setLoading(true)

    try {
      const ip = await getUserIP()
      const country = ip ? await getCountry(ip) : "Unknown"

      await addDoc(collection(db, "messages"), {
        ...formData,
        ip,
        country,
        userAgent: navigator.userAgent,
        language: navigator.language,
        screenWidth: window.innerWidth,
        createdAt: serverTimestamp(),
      })

      alert("Message sent!")

      setFormData({
        name: "",
        email: "",
        message: "",
      })
    } catch (error) {
      console.error(error)
      alert("Error sending message")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.content}>
        <h2 className={styles.title}>{t("contactTitle")}</h2>
        <p className={styles.subtitle}>{t("contactSubtitle")}</p>
      </div>

      <div className={styles.container}>
        {/* LEFT */}
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

        {/* FORM */}
        <form className={styles.form} onSubmit={handleSubmit}>
          <label>{t("contactYourName")}</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
          />
          {errors.name && <span className={styles.error}>{errors.name}</span>}

          <label>{t("contactYourEmail")}</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
          />
          {errors.email && <span className={styles.error}>{errors.email}</span>}

          <label>{t("contactMessage")}</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={t("placeholderMessage")}
          />
          {errors.message && <span className={styles.error}>{errors.message}</span>}

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : t("contactSendMessage")}
            <span>➤</span>
          </button>
        </form>
      </div>
    </section>
  )
}
