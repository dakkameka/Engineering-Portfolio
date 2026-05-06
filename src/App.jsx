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

const resumeHref = `${import.meta.env.BASE_URL}Resume.pdf`

const ProjectVideo = ({ project, className }) => (
  <iframe
    className={className}
    src={project.video}
    title={`${project.title} video`}
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
  />
)

const contactItems = [
  {
    id: "email",
    label: "Email",
    href: "mailto:lillysweet@berkeley.edu"
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/lilliansweet/"
  },
  {
    id: "phone",
    label: "Phone",
    href: "tel:+19133352048"
  },
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/dakkameka"
  }
]

const ContactIcon = ({ id }) => {
  const iconProps = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }

  if (id === "email") {
    return (
      <svg {...iconProps}>
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-10 6L2 7" />
      </svg>
    )
  }

  if (id === "linkedin") {
    return (
      <svg {...iconProps}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    )
  }

  if (id === "phone") {
    return (
      <svg {...iconProps}>
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9z" />
      </svg>
    )
  }

  return (
    <svg {...iconProps}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.1-1.3-.3-2.6-1.2-3.6.3-1.1.3-2.3-.1-3.4 0 0-1-.3-3.5 1.3a12.3 12.3 0 0 0-6.4 0C6.3 1.7 5.3 2 5.3 2c-.4 1.1-.4 2.3-.1 3.4A5.2 5.2 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.4.4-.7 1-.9 1.7-.2.6-.1 1.2-.1 1.8v4" />
      <path d="M9 18c-4.5 2-5-2-7-2" />
    </svg>
  )
}

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

const timelineStartMonth = 0
const timelineEndMonth = 84

const getTimelinePosition = (month) => {
  return `${((month - timelineStartMonth) / (timelineEndMonth - timelineStartMonth)) * 100}%`
}

const timelineYears = [2020, 2021, 2022, 2023, 2024, 2025, 2026]

const timelineSpans = [
  {
    id: "military",
    label: "Military Service",
    range: "Jan 2020 - Jan 2026",
    startMonth: 0,
    endMonth: 72,
    lane: 0
  },
  {
    id: "bmcd",
    label: "BMcD",
    range: "Summer 2023",
    startMonth: 41,
    endMonth: 44,
    lane: 1
  },
  {
    id: "truck-unloader",
    label: "Truck Unloader -> Pharmacy Technician",
    range: "2020 - Summer 2023",
    startMonth: 0,
    endMonth: 41,
    lane: 1,
    variant: "light"
  },
  {
    id: "tesla",
    label: "Tesla",
    range: "Summer 2024",
    startMonth: 53,
    endMonth: 56,
    lane: 1
  },
  {
    id: "spacex-2025",
    label: "SpaceX",
    range: "Summer 2025",
    startMonth: 65,
    endMonth: 68,
    lane: 1
  },
  {
    id: "spacex-2026",
    label: "SpaceX",
    range: "Summer 2026",
    startMonth: 77,
    endMonth: 80,
    lane: 1,
    variant: "future"
  },
  {
    id: "ku",
    label: "KU",
    range: "Jan 2022 - May 2025",
    startMonth: 24,
    endMonth: 65,
    lane: 2,
    variant: "education"
  },
  {
    id: "high-school",
    label: "High School",
    range: "Through May 2021",
    startMonth: 0,
    endMonth: 17,
    lane: 2,
    variant: "education"
  },
  {
    id: "berkeley",
    label: "Berkeley",
    range: "Aug 2025 - Present",
    startMonth: 67,
    endMonth: 84,
    lane: 2,
    variant: "education"
  },
  {
    id: "nsf-fellow-researcher",
    label: "NSF Fellow (Researcher)",
    range: "Aug 2025 - Present",
    startMonth: 67,
    endMonth: 84,
    lane: 3,
    variant: "campus"
  },
  {
    id: "volunteer-emt",
    label: "Volunteer EMT",
    range: "May 2021 - Aug 2022",
    startMonth: 17,
    endMonth: 31,
    lane: 3,
    variant: "light"
  },
  {
    id: "si-leader",
    label: "SI Leader",
    range: "Aug 2022 - May 2023",
    startMonth: 31,
    endMonth: 41,
    lane: 3,
    variant: "campus"
  },
  {
    id: "peer-tutor",
    label: "Peer Tutor",
    range: "Jan 2023 - May 2024",
    startMonth: 36,
    endMonth: 53,
    lane: 4,
    variant: "campus"
  },
  {
    id: "ra",
    label: "RA",
    range: "Fall 2024 - May 2025",
    startMonth: 55,
    endMonth: 65,
    lane: 3,
    variant: "campus"
  }
]

const timelineMilestones = [
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

          <div className="contactLinks" aria-label="Contact links">
            {contactItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                aria-label={item.label}
                title={item.label}
                target={item.id === "email" || item.id === "phone" ? undefined : "_blank"}
                rel={item.id === "email" || item.id === "phone" ? undefined : "noreferrer"}
              >
                <ContactIcon id={item.id} />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="timelineSection glass">
        <div className="timelineHeader">
          <div>
            <p className="eyebrow">Timeline</p>
          </div>
        </div>

        <div className="timelineViewport" aria-label="Career timeline from 2020 to now">
          <div className="timelineAxis">
            {timelineYears.map((year, index) => (
              <div
                className="timelineTick"
                key={year}
                style={{ left: getTimelinePosition(index * 12) }}
              >
                <span>{year}</span>
              </div>
            ))}
          </div>

          <div className="timelineTrack">
            {timelineSpans.map((span) => (
              <article
                className="timelineSpan"
                key={span.id}
                style={{
                  left: getTimelinePosition(span.startMonth),
                  width: `calc(${getTimelinePosition(span.endMonth - span.startMonth)} - 10px)`,
                  top: `${18 + span.lane * 34}px`
                }}
                data-variant={span.variant}
              >
                <h3>{span.label}</h3>
                {span.description && <p>{span.description}</p>}
              </article>
            ))}

            {timelineMilestones.map((milestone) => (
              <article
                className="timelineMilestone"
                key={milestone.id}
                style={{ left: getTimelinePosition(milestone.month) }}
              >
                <div className="milestonePin" />
                <div className="milestoneCard">
                  <span>{milestone.title}</span>
                  {milestone.description && <p>{milestone.description}</p>}
                </div>
              </article>
            ))}
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

      <section className="resumeSection glass">
        <a className="resumeButton" href={resumeHref} target="_blank" rel="noreferrer">
          Download Resume
        </a>
      </section>
    </main>
  )
}

export default App
