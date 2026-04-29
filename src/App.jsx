import { useState } from "react"
import "./App.css"
import { categories } from "./data/projects"


const images = import.meta.glob("./assets/*.{png,jpg,jpeg,svg}", {
  eager: true,
  import: "default"
})

const getImage = (name) => {
  return images[`./assets/${name}`]
}

function App() {
  const [openCategory, setOpenCategory] = useState("cfd")
  const [selectedProject, setSelectedProject] = useState(null)

  if (selectedProject) {
    return (
      <main className="page">
        <div className="aura auraOne" />
        <div className="aura auraTwo" />

        <section className="projectPage glass">
          <button className="backButton" onClick={() => setSelectedProject(null)}>
            ← Back to portfolio
          </button>

          <p className="eyebrow">{selectedProject.tag}</p>
          <h1>{selectedProject.title}</h1>
          <p className="projectLead">{selectedProject.summary}</p>

          <div className="toolRow">
            {selectedProject.tools.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>

          <div className="projectBody">
            <h2>Project overview</h2>
            <p>{selectedProject.detail}</p>

            <h2>What this demonstrates</h2>
            <p>
              This project highlights technical judgment, physical modeling, software
              implementation, and the ability to turn an engineering problem into a working
              system or analysis workflow.
            </p>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="page">
      <div className="aura auraOne" />
      <div className="aura auraTwo" />
      <div className="aura auraThree" />

      <section className="hero glass">
        <div className="heroText">
          <p className="eyebrow">Engineering Portfolio</p>
          <h1>Lilly Sweet</h1>
          <p className="bio">
            Mechanical engineering graduate student focused on computational fluid dynamics,
            mechanical design, and robotics. My work connects physical modeling, experimental
            systems, numerical simulation, and hardware-driven engineering.
          </p>

          <div className="heroTags">
            <span>CFD</span>
            <span>Mechanical Design</span>
            <span>Robotics</span>
          </div>
        </div>

        <div className="portraitCard">
          <div className="portraitWrap">
            <img
              src={getImage("veteran.png")}
              alt="Profile"
              className="portraitImage"
            />
          </div>
        </div>
      </section>

      <section className="categories">
        {categories.map((category) => {
          const isOpen = openCategory === category.id

          return (
            <div className="category glass" key={category.id}>
              <button
                className="categoryHeader"
                onClick={() => setOpenCategory(isOpen ? null : category.id)}
              >
                <div>
                  <h2>{category.title}</h2>
                  <p>{category.subtitle}</p>
                </div>
                <span>{isOpen ? "−" : "+"}</span>
              </button>

              {isOpen && (
                <div className="carousel">
                  {category.projects.map((project) => (
                    <article className="projectCard" key={project.id}>
                      <p className="projectTag">{project.tag}</p>
                      <h3>{project.title}</h3>
                      <p>{project.summary}</p>

                      <div className="miniTools">
                        {project.tools.slice(0, 3).map((tool) => (
                          <span key={tool}>{tool}</span>
                        ))}
                      </div>

                      <button onClick={() => setSelectedProject(project)}>
                        Expand project
                      </button>
                    </article>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </section>
    </main>
  )
}

export default App