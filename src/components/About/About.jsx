import { useEffect, useRef, useState } from "react"
import styles from "./About.module.css"
import { useTranslation } from "react-i18next"
// import img1 from 

export default function About() {
  const section1Ref = useRef(null)
  const section2Ref = useRef(null)

  const [visible1, setVisible1] = useState(false)
  const [visible2, setVisible2] = useState(false)

  const { t } = useTranslation()

  const services = [
    {
      title: `${t("serviceTitle1")}`,
      desc: `${t("serviceDesc1")}`,
      image: "../../assets/images/about/1-service.avif",
    },
    {
      title: `${t("serviceTitle2")}`,
      desc: `${t("serviceDesc2")}`,
      image: "../../assets/images/about/2-service.avif",
    },
    {
      title: `${t("serviceTitle3")}`,
      desc: `${t("serviceDesc3")}`,
      image: "../../assets/images/about/3-service.avif",
    },
  ]

  useEffect(() => {
    const observer1 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible1(true)
      },
      { threshold: 0.3 },
    )

    const observer2 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible2(true)
      },
      { threshold: 0.2 },
    )

    if (section1Ref.current) observer1.observe(section1Ref.current)
    if (section2Ref.current) observer2.observe(section2Ref.current)

    return () => {
      if (section1Ref.current) observer1.unobserve(section1Ref.current)
      if (section2Ref.current) observer2.unobserve(section2Ref.current)
    }
  }, [])

  return (
    <section className={styles.about} id="about">
      <div ref={section1Ref} className={styles.section}>
        <h2 className={`${styles.title} ${visible1 ? styles.showTitle : ""}`}>{t("aboutTitle")}</h2>

        <div className={styles.row}>
          <div className={`${styles.image} ${visible1 ? styles.showLeft : ""}`}>
            <img className={styles.titleImg} src="/about/titleImg.avif" alt="" />
          </div>

          <div className={`${styles.text} ${visible1 ? styles.showRight : ""}`}>
            <p>{t("aboutText1")}</p>
            <p>{t("aboutText2")}</p>
          </div>
        </div>
      </div>

      <div ref={section2Ref} className={styles.section}>
        <h2 className={styles.title}>{t("aboutTitle2")}</h2>

        <div className={styles.cards}>
          {services.map((item, i) => (
            <div
              key={i}
              className={`${styles.card} ${visible2 ? styles.showCard : ""}`}
              style={{ transitionDelay: `${i * 0.2}s` }}
            >
              <div className={styles.cardBg}>
                <img className={styles.serviceImg} src={item.image} alt={item.title} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
