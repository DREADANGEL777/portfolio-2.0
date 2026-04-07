import { useEffect, useState } from "react"
import styles from "./Projects.module.css"
import { useTranslation } from "react-i18next"
import githubImg from "../../assets/icons/github-projects.svg"
import linkbImg from "../../assets/icons/link-projects.svg"
import projIMG1 from "../../assets/images/projects/1-project.webp"
import projIMG2 from "../../assets/images/projects/2-project.webp"
import projIMG3 from "../../assets/images/projects/3-project.webp"
import projIMG4 from "../../assets/images/projects/4-project.webp"
import projIMG5 from "../../assets/images/projects/5-project.webp"
import projIMG6 from "../../assets/images/projects/6-project.webp"
import projIMG7 from "../../assets/images/projects/7-project.webp"
import projIMG8 from "../../assets/images/projects/8-project.webp"
import projIMG9 from "../../assets/images/projects/9-project.webp"

const ITEMS_PER_ROW = 3

export default function Projects() {
  const [visible, setVisible] = useState(false)
  const [ref, setRef] = useState(null)

  const [rows, setRows] = useState(1)
  const { t } = useTranslation()

  const projects = [
    {
      title: `${t("projectTitle1")}`,
      desc: `${t("projectDesc1")}`,
      tags: ["HTML", "CSS", "JavaScript"],
      code: "https://github.com/DREADANGEL777/surfing-school-landing",
      demo: "https://dreadangel777.github.io/surfing-school-landing/",
      image: projIMG1,
    },
    {
      title: `${t("projectTitle2")}`,
      desc: `${t("projectDesc2")}`,
      tags: ["HTML", "CSS", "JavaScript"],
      code: "https://github.com/DREADANGEL777/dior-page",
      demo: "https://dreadangel777.github.io/dior-page/",
      image: projIMG2,
    },
    {
      title: `${t("projectTitle3")}`,
      desc: `${t("projectDesc3")}`,
      tags: ["HTML", "CSS", "JavaScript"],
      code: "https://github.com/DREADANGEL777/urus-page",
      demo: "https://dreadangel777.github.io/urus-page/",
      image: projIMG3,
    },
    {
      title: `${t("projectTitle4")}`,
      desc: `${t("projectDesc4")}`,
      tags: ["HTML", "CSS", "JavaScript"],
      code: "https://github.com/DREADANGEL777/sandbox-page",
      demo: "https://dreadangel777.github.io/sandbox-page/",
      image: projIMG4,
    },
    {
      title: `${t("projectTitle5")}`,
      desc: `${t("projectDesc5")}`,
      tags: ["React", "JavaScript", "API", "HTML", "CSS"],
      code: "https://github.com/DREADANGEL777/films-app",
      demo: "https://dreadangel777.github.io/films-app/#/",
      image: projIMG5,
    },
    {
      title: `${t("projectTitle6")}`,
      desc: `${t("projectDesc6")}`,
      tags: ["React", "JavaScript", "API", "HTML", "CSS", "MongoDB", "Vercel", "Drizzle"],
      code: "https://github.com/DREADANGEL777/react-full-stack-app",
      demo: "https://react-full-stack-app-sigma.vercel.app/",
      image: projIMG6,
    },
    {
      title: `${t("projectTitle7")}`,
      desc: `${t("projectDesc7")}`,
      tags: ["HTML", "JavaScript", "CSS"],
      code: "https://github.com/DREADANGEL777/architecture-page",
      demo: "https://dreadangel777.github.io/architecture-page/",
      image: projIMG7,
    },
    {
      title: `${t("projectTitle8")}`,
      desc: `${t("projectDesc8")}`,
      tags: ["React", "JavaScript", "API", "HTML", "CSS", "MongoDB", "Vercel", "Drizzle"],
      code: "https://github.com/DREADANGEL777/forever-full-stack",
      demo: "https://forever-prod-frontend.vercel.app/",
      image: projIMG8,
    },
    {
      title: `${t("projectTitle9")}`,
      desc: `${t("projectDesc9")}`,
      tags: [
        "React",
        "JavaScript",
        "ThreeJS",
        "HTML",
        "CSS",
        "Framer-Motion",
        "Git",
        "GSAP",
        "Rive",
        "TypeScript",
      ],
      code: "",
      demo: "https://web-anims-project.vercel.app/",
      image: projIMG9,
    },
  ]

  const totalRows = Math.ceil(projects.length / ITEMS_PER_ROW)
  const visibleCount = rows * ITEMS_PER_ROW
  const visibleProjects = projects.slice(0, visibleCount)

  useEffect(() => {
    if (!ref) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )

    observer.observe(ref)
    return () => observer.disconnect()
  }, [ref])

  const canShowMore = rows < totalRows
  const canShowLess = rows > 1

  return (
    <section className={styles.wrapper} ref={setRef} id="projects">
      <div className={styles.header}>
        <div>
          <h2>{t("projectsTitle")}</h2>
          <p>{t("projectsSubtitle")}</p>
        </div>
      </div>

      <div className={styles.grid}>
        {visibleProjects.map((p, i) => (
          <div
            key={i}
            className={`${styles.card} ${visible ? styles.show : ""}`}
            style={{ transitionDelay: `${i * 0.2}s` }}
          >
            <div className={styles.image}>
              <img className={styles.projectIMG} src={p.image} alt={p.title} />
            </div>

            <div className={styles.content}>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>

              <div className={styles.tags}>
                {p.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className={`${styles.tag} ${visible ? styles.tagShow : ""}`}
                    style={{ transitionDelay: `${i * 0.2 + idx * 0.1}s` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className={styles.actions}>
                <a href={p.code} className={styles.codeAct}>
                  <img src={githubImg} className={styles.codeIMG} alt="" /> Code
                </a>
                <a href={p.demo} className={styles.demoAct}>
                  <img src={linkbImg} className={styles.linkIMG} alt="" /> Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.buttonWrapper}>
        {canShowMore && (
          <button className={styles.toggleBtn} onClick={() => setRows((prev) => prev + 1)}>
            {t("seeMore")}
          </button>
        )}
        {canShowLess && (
          <button className={styles.toggleBtn} onClick={() => setRows((prev) => prev - 1)}>
            {t("seeLess")}
          </button>
        )}
      </div>
    </section>
  )
}
