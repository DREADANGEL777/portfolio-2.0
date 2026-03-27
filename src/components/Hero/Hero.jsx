import styles from "./Hero.module.css"
// import avatar from "../../assets/avatar.jpg"
import githubImg from "/assets/github.svg"
import linkedinImg from "/assets/linkedin.svg"
import emailImg from "/assets/email.svg"

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.avatarWrapper}>{/* <img src={avatar} alt="avatar" /> */}</div>

      <h1>
        Hi, I'm <span>Demian InVeStOr.</span>
      </h1>

      <p>Full-stack developer & UI/UX enthusiast crafting beautiful, functional web experiences</p>

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
          View My Work
        </button>
        <button
          className={styles.secondary}
          onClick={() => {
            document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
          }}
        >
          Get In Touch
        </button>
      </div>

      <div className={styles.scroll}>
        <button
          className={styles.secondary}
          onClick={() => {
            document.getElementById("footer").scrollIntoView({ behavior: "smooth" })
          }}
        >
          ↓
        </button>
      </div>
    </section>
  )
}
