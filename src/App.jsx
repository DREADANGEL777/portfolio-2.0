import "./index.css"
import { useEffect, useState } from "react"

import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import { Footer } from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Projects from "./components/Projects/Projects"
import Skills from "./components/Skills/Skills"

function App() {
  const [theme, setTheme] = useState("dark") 


  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      setTheme(savedTheme)
    }
  }, [])


  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <div className="wrapper">
      <Header theme={theme} setTheme={setTheme} />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
