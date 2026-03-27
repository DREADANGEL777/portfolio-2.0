import { useEffect, useRef, useState } from "react"
import styles from "./About.module.css"

const services = [
  {
    title: "Service 1",
    desc: "Building modern and scalable web applications with great UX.",
    image: "/about/1-service.avif",
  },
  {
    title: "Service 2",
    desc: "Building modern and scalable web applications with great UX.",
    image: "/about/2-service.avif",
  },
  {
    title: "Service 3",
    desc: "Building modern and scalable web applications with great UX.",
    image: "/about/3-service.avif",
  },
]

export default function About() {
  const section1Ref = useRef(null)
  const section2Ref = useRef(null)

  const [visible1, setVisible1] = useState(false)
  const [visible2, setVisible2] = useState(false)

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
        <h2 className={`${styles.title} ${visible1 ? styles.showTitle : ""}`}>About Me</h2>

        <div className={styles.row}>
          <div className={`${styles.image} ${visible1 ? styles.showLeft : ""}`}>
            <img className={styles.titleImg} src="/about/titleImg.avif" alt="" />
          </div>

          <div className={`${styles.text} ${visible1 ? styles.showRight : ""}`}>
            <p>
              I'm a passionate full-stack developer who loves building modern, responsive, and
              user-friendly applications.
            </p>
            <p>
              I focus on creating smooth user experiences and clean UI with attention to detail.
            </p>
          </div>
        </div>
      </div>

      <div ref={section2Ref} className={styles.section}>
        <h2 className={styles.title}>What I Do</h2>

        <div className={styles.cards}>
          {services.map((item, i) => (
            <div
              key={i}
              className={`${styles.card} ${visible2 ? styles.showCard : ""}`}
              style={{ transitionDelay: `${i * 0.2}s` }}
            >
              <div className={styles.cardBg}>
                <img className={styles.serviceImg} src={item.image} alt={item.title}/>
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
