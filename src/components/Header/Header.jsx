import styles from "./Header.module.css"

export default function Header() {
  return (
    <header className={styles.header}>
      <div
        className={styles.logo}
        onClick={() => {
          document.getElementById("hero").scrollIntoView({ behavior: "smooth" })
        }}
      >
        InVeStOr.
      </div>

      <div className={styles.miniCont}>
        <nav className={styles.nav}>
          <a
            href="#about"
            onClick={() => {
              document.getElementById("about").scrollIntoView({ behavior: "smooth" })
            }}
          >
            About
          </a>
          <a
            href="#projects"
            onClick={() => {
              document.getElementById("projects").scrollIntoView({ behavior: "smooth" })
            }}
          >
            Projects
          </a>
          <a
            href="#skills"
            onClick={() => {
              document.getElementById("skills").scrollIntoView({ behavior: "smooth" })
            }}
          >
            Skills
          </a>
        </nav>

        <div className={styles.actions}>
          <button
            className={styles.contact}
            onClick={() => {
              document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
            }}
          >
            Contact
          </button>
          <button className={styles.lang}>EN</button>
        </div>
      </div>
    </header>
  )
}
