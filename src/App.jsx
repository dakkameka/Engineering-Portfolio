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

const ProjectVideo = ({ project, className }) => (
  <iframe
    className={className}
    src={project.video}
    title={`${project.title} video`}
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
  />
)

const logoItems = [
  {
    id: "berkeley",
    image: "berkeley.svg",
    alt: "UC Berkeley",
    role: "MS/PhD Mechanical Engineering Student",
    description:
      "Graduate researcher at UC Berkeley working on X-ray based flow diagnostics, limited-angle XPIV methods, and energy-resolved spectroscopy."
  },
  {
    id: "tesla",
    image: "tesla.jpg",
    alt: "Tesla",
    role: "Controls Engineering Intern",
    description:
      "Worked on PLC integration, Ignition-based SCADA/HMI systems, controls infrastructure, robotics exposure, and manufacturing line support."
  },
  {
    id: "spacex",
    image: "spacex.jpg",
    alt: "SpaceX",
    role: "Raptor Graduate Engineer",
    description:
      "Worked on automated machining inspection, robotic vision workflows, process data capture, and engineering data systems for propulsion hardware."
  },
  {
    id: "bmcd",
    image: "bmcd.png",
    alt: "Burns & McDonnell",
    role: "Mechanical Engineering Intern",
    description:
      "Developed automated engineering workflow tools using Python and PowerShell and supported CFD integration into ductwork design for datacenters."
  },
  {
    id: "nsf",
    image: "nsf.jpg",
    alt: "NSF",
    role: "NSF Fellow",
    description:
      "Grateful for the opportunity and freedom to pursue independent research questions in X-ray diagnostics, inverse problems, and experimental fluid mechanics."
  }
]

function App() {
  const [openCategory, setOpenCategory] = useState("cfd")
  const [selectedProject, setSelectedProject] = useState(null)
  const [selectedLogo, setSelectedLogo] = useState(null)

  const openProject = (project) => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" })
    setSelectedProject(project)
  }

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

          {selectedProject.github && (
            <a
              className="projectLink"
              href={selectedProject.github}
              target="_blank"
              rel="noreferrer"
            >
              View GitHub
            </a>
          )}

          <div className="projectBody">
            <h2>Project overview</h2>
            {selectedProject.detail.split("\n\n").map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <h2>What this demonstrates</h2>
            <p>
              This project highlights technical judgment, physical modeling, software
              implementation, and the ability to turn an engineering problem into a working
              system or analysis workflow.
            </p>
          </div>

          {selectedProject.video ? (
            <ProjectVideo project={selectedProject} className="projectDetailVideo" />
          ) : selectedProject.image && (
            <img
              src={getImage(selectedProject.image)}
              alt={selectedProject.title}
              className="projectDetailImage"
            />
          )}
        </section>
      </main>
    )
  }

  return (
    <main className="page">
      <div className="aura auraOne" />
      <div className="aura auraTwo" />
      <div className="aura auraThree" />

      {selectedLogo && (
        <div className="modalOverlay" onClick={() => setSelectedLogo(null)}>
          <div className="logoModal glass" onClick={(e) => e.stopPropagation()}>
            <button className="modalClose" onClick={() => setSelectedLogo(null)}>
              ×
            </button>

            <img
              src={getImage(selectedLogo.image)}
              alt={selectedLogo.alt}
              className="modalLogo"
            />

            <h2>{selectedLogo.role}</h2>
            <p>{selectedLogo.description}</p>
          </div>
        </div>
      )}

      <section className="hero glass">
        <div className="heroText">
          <p className="eyebrow">Engineering Portfolio</p>
          <h1>Lilly Sweet</h1>
          <p className="bio">
            Mechanical engineering graduate student at UC Berkeley and former Combat Medic Sergeant in the US Army.
            Passionate about fluid dynamics, mechanical design, and robotics. I have ongoing work with the Flow Lab
            at UC Berkeley, am an NSF Fellow, and have previous experience at Tesla, SpaceX, and Burns & McDonnell.
          </p>

          <div className="logoRow">
            {logoItems.map((logo) => (
              <button
                className="logoButton"
                key={logo.id}
                onClick={() => setSelectedLogo(logo)}
              >
                <img src={getImage(logo.image)} alt={logo.alt} />
              </button>
            ))}
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
                      {project.video ? (
                        <ProjectVideo project={project} className="projectVideo" />
                      ) : project.image ? (
                        <img
                          src={getImage(project.image)}
                          alt={project.title}
                          className="projectImage"
                        />
                      ) : (
                        <div className="projectImagePlaceholder">
                          Add image
                        </div>
                      )}

                      <p className="projectTag">{project.tag}</p>
                      <h3>{project.title}</h3>
                      <p>{project.summary}</p>

                      <div className="miniTools">
                        {project.tools.slice(0, 3).map((tool) => (
                          <span key={tool}>{tool}</span>
                        ))}
                      </div>

                      <button onClick={() => openProject(project)}>
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
