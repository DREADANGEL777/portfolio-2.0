import { useEffect, useRef, useState } from "react"
import styles from "./Skills.module.css"
import { useTranslation } from "react-i18next"

const skillsData = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 92 },
      { name: "HTML/CSS", level: 98 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Python", level: 82 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "GraphQL", level: 75 },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 78 },
      { name: "AWS", level: 72 },
      { name: "Figma", level: 85 },
      { name: "Jest", level: 80 },
    ],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  const { t } = useTranslation()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.skills} ref={ref} id="skills">
      <div className={styles.content}>
        <h2 className={styles.title}>{t("skillsTitle")}</h2>
        <p className={styles.subtitle}>{t("skillsSubtitle")}</p>
      </div>

      <div className={styles.cards}>
        {skillsData.map((group, i) => (
          <div key={i} className={styles.card}>
            <h3>{group.title}</h3>

            {group.skills.map((skill, index) => (
              <div key={index} className={styles.skill}>
                <div className={styles.skillHeader}>
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>

                <div className={styles.bar}>
                  <div
                    className={styles.progress}
                    style={{
                      width: visible ? `${skill.level}%` : "0%",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
