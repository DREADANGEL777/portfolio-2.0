import { useEffect, useState } from "react"
import styles from "./Projects.module.css"

const projects = [
  {
    title: "Surfing School page",
    desc: "This is a landing page for a surfing school. It has a modern design with ocean-themed visuals. The page provides course details and a contact section.",
    tags: ["HTML", "CSS", "JavaScript"],
    code: "https://github.com/DREADANGEL777/surfing-school-landing",
    demo: "https://dreadangel777.github.io/surfing-school-landing/",
    image: "/projects/1-project.webp",
  },
  {
    title: "Shop Dior page",
    desc: "This is a stylish Dior-themed page. It showcases elegant design with luxury aesthetics. The layout highlights fashion and beauty elements.",
    tags: ["HTML", "CSS", "JavaScript"],
    code: "https://github.com/DREADANGEL777/dior-page",
    demo: "https://dreadangel777.github.io/dior-page/",
    image: "/projects/2-project.webp",
  },
  {
    title: "URUS for rent page",
    desc: "This page is dedicated to the Lamborghini Urus. It features a sleek design with high-quality car images. The layout emphasizes speed, luxury, and performance.",
    tags: ["HTML", "CSS", "JavaScript"],
    code: "https://github.com/DREADANGEL777/urus-page",
    demo: "https://dreadangel777.github.io/urus-page/",
    image: "/projects/3-project.webp",
  },
  {
    title: "Sandbox landing page",
    desc: "This is a simple sandbox page. It features interactive elements for testing. The design is minimalistic and clean.",
    tags: ["HTML", "CSS", "JavaScript"],
    code: "https://github.com/DREADANGEL777/sandbox-page",
    demo: "https://dreadangel777.github.io/sandbox-page/",
    image: "/projects/4-project.webp",
  },
  {
    title: "Films app",
    desc: "This is a simple films app. It about films in charts. And also you can find any film and save it to favorites.",
    tags: ["React", "JavaScript", "API", "HTML", "CSS"],
    code: "https://github.com/DREADANGEL777/films-app",
    demo: "https://dreadangel777.github.io/films-app/#/",
    image: "/projects/5-project.webp",
  },
  {
    title: "Top 20 ideas",
    desc: "This is a react full stack app. About the best ideas to your startup. Where you can also add your own idea.",
    tags: ["React", "JavaScript", "API", "HTML", "CSS", "MongoDB", "Vercel", "Drizzle"],
    code: "https://github.com/DREADANGEL777/react-full-stack-app",
    demo: "https://react-full-stack-app-sigma.vercel.app/",
    image: "/projects/6-project.webp",
  },
  {
    title: "Architecture page",
    desc: "This is a landing page. About the best company for your house. Where you can also create your own house.",
    tags: ["HTML", "JavaScript", "CSS"],
    code: "https://github.com/DREADANGEL777/architecture-page",
    demo: "https://dreadangel777.github.io/architecture-page/",
    image: "/projects/7-project.webp",
  },
  {
    title: "Forever page",
    desc: "This is a landing page. About the best e-commerce site for you. Where you can order some clothes for you and your family.",
    tags: ["React", "JavaScript", "API", "HTML", "CSS", "MongoDB", "Vercel", "Drizzle"],
    code: "https://github.com/DREADANGEL777/forever-full-stack",
    demo: "https://forever-prod-frontend.vercel.app/",
    image: "/projects/8-project.webp",
  },
]

export default function Projects() {
  const [visible, setVisible] = useState(false)
  const [ref, setRef] = useState(null)

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

  return (
    <section className={styles.wrapper} ref={setRef} id="projects">
      <div className={styles.header}>
        <div>
          <h2>Featured Projects</h2>
          <p>
            Here are some of my recent projects that showcase my skills and passion for development.
          </p>
        </div>
      </div>

      <div className={styles.grid}>
        {projects.map((p, i) => (
          <div
            key={i}
            className={`${styles.card} ${visible ? styles.show : ""}`}
            style={{ transitionDelay: `${i * 0.3}s` }}
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
                    style={{ transitionDelay: `${i * 0.3 + idx * 0.15}s` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className={styles.actions}>
                <a href={p.code} className={styles.codeAct}>
                  <img src="/assets/github.svg" className={styles.codeIMG} alt="" />
                  Code
                </a>
                <a href={p.demo} className={styles.demoAct}>
                  <img src="/assets/link.svg" className={styles.linkIMG} alt="" />
                  Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
