export const categories = [
  {
    id: "cfd",
    title: "CFD",
    subtitle: "Custom solvers and commercial CFD applications.",
    projects: [
      {
        id: "c-fitted-shock",
        title: "C-Fitted Shock Capturing",
        image: "cshock.jpg",
        tag: "Numerical Methods",
        summary: "Structured-mesh Euler solver with second-order C-fitted shock capturing.",
        tools: ["Python", "MATLAB", "CFD", "Euler Solver"],
        detail:
          "Developed a second-order structured-mesh Euler solver with C-fitted shock capturing and slip-wall boundary conditions. The project focused on resolving compressible shock structures accurately while maintaining clean numerical behavior away from discontinuities."
      },
      {
        id: "converging-diverging-nozzle",
        title: "Converging-Diverging Nozzle",
        image: "convergediverge.png",
        tag: "Numerical Methods",
        summary: "Higher-order compressible flow solver work for nozzle geometries.",
        tools: ["Python", "MATLAB", "CFD", "Numerical Analysis"],
        detail:
          "Achieved stable, higher-order solutions for compressible flow in a converging-diverging nozzle geometry using FR/CPR, discontinuous spectral element, and discontinuous Galerkin methods."
      },
      {
        id: "naca0012",
        title: "Viscous NACA0012 Unstructured Mesh",
        image: "naca0012.png",
        tag: "Viscous CFD",
        summary: "Unstructured-mesh viscous airfoil solver with aerodynamic post-processing.",
        tools: ["Python", "MATLAB", "CFD", "Unstructured Mesh"],
        detail:
          "Developed a viscous NACA0012 unstructured-mesh solver with second-order space and time accuracy, with optional third-order capability. The code plots Mach number, pressure distribution, skin friction coefficient, streamlines, and contours for Mach number, pressure, density, x velocity, y velocity, velocity magnitude, and energy. The implementation includes local and global time stepping, first- and second-order least-squares reconstruction, and an almost fully vectorized structure for computational speed."
      },
      {
        id: "fsae-aerodynamics",
        title: "FSAE Aerodynamics",
        image: "FSAE.jpg",
        tag: "Vehicle Aerodynamics",
        summary: "CFD and mechanical design work for a Formula SAE aerodynamic package.",
        tools: ["STAR-CCM+", "CFD", "FEA", "Mechanical Design"],
        detail:
          "Owned several parts within the Formula SAE aerodynamic package and ran extensive CFD simulations of the full car in STAR-CCM+. Improved the downforce-to-drag ratio, balanced the coefficient of pressure, reduced y+ values, ran a transient full-car model, and improved simulation conduct and workflow. Also took ownership of the rear wing mounting design, performed FEA for several riding conditions, and helped manufacture the final parts."
      },
      {
        id: "microchannel-flow",
        title: "Microchannel Flow Optimization",
        image: "microchannel.jpg",
        tag: "Commercial CFD",
        summary: "Taguchi-method DOE study for optimizing fluid mixing in microchannel flow.",
        tools: ["CFD", "Design of Experiments", "Taguchi Method", "Simulation"],
        detail:
          "Used a Design of Experiments approach with the Taguchi Method to optimize fluid mixing in a microchannel. The project used a commercial CFD solver to numerically simulate microchannel flow behavior and won second place in a research competition."
      }
    ]
  },
  {
    id: "mechanical",
    title: "Mechanical Design",
    subtitle: "Mechanical design and hardware systems for practical applications.",
    projects: [
      {
        id: "coach-nova",
        title: "Coach Nova",
        image: "coachnova.png",
        github: "https://github.com/dakkameka/BarbellBuddy",
        tag: "Microcontrollers / Web Design / API Implementation",
        summary: "A web-based coaching platform integrating microcontroller data for real-time feedback.",
        tools: ["ESP32", "C++", "Python", "React", "Web Development"],
        detail:
          "Coach Nova is a web-based coaching platform that integrates data from microcontroller-based sensors to provide real-time feedback and performance tracking for athletes. The system combines embedded hardware, firmware development, backend data processing, and a user-friendly frontend interface."
      },
      {
        id: "pressure-sensing-insole",
        title: "Pressure-Sensing Insole System For Camwalker",
        image: "camwalker.png",
        tag: "Wearables / Sensors",
        summary: "Mechanically designed and integrated a pressure-sensing insole system for real-time gait and loading visualization.",
        tools: ["ESP32", "C++", "Python", "Web UI", "Sensors"],
        detail:
          "This project uses pressure sensors, embedded electronics, and a lightweight interface to visualize loading patterns. The work combines hardware integration, firmware, data streaming, and user-facing visualization."
      },
      {
        id: "adaptive-training-wheels",
        title: "Adaptive Training Wheels",
        image: "bike.png",
        tag: "Design / Fabrication",
        summary: "Mechanical design and fabrication of adaptive training wheels for bicycles.",
        tools: ["CAD", "3D Printing", "Mechanical Design", "Fabrication"],
        detail:
          "Designed and fabricated adaptive training wheels for bicycles to provide stability and support for novice riders while allowing gradual adjustment as the rider gains confidence and balance. The work included CAD modeling, prototyping, and testing."
      },
      {
        id: "gearbox-design",
        title: "Gearbox Design",
        image: "gearbox.png",
        tag: "Machine Design",
        summary: "Gearbox, shafting, bearing, lubrication, fastener, and spring design automation.",
        tools: ["Shigley's", "Excel", "TI-BASIC", "Machine Design"],
        detail:
          "Used Shigley's machine design computations to design a gearbox for a specified load. Created an automated gear analysis Excel workbook to iterate quickly through calculations. Also automated several calculations for shafting, bearings and lubrication, threaded fasteners, and springs on a TI-84 using TI-BASIC, essentially automating repeated exam-style computations."
      }
    ]
  },
  {
    id: "robotics",
    title: "Hardware/Software",
    subtitle: "Sensors, embedded systems, controls, mechatronics, and feedback systems.",
    projects: [
      {
        id: "canopy",
        title: "CANOPY",
        video: "https://www.youtube-nocookie.com/embed/NzDcP5XryC4",
        github: "https://github.com/787-10/CANOPY",
        tag: "Space Defense / AI Systems",
        summary: "Hackathon-winning, edge-deployed cross-domain space defense decision system for tactical commanders.",
        tools: ["AI Agents", "Skyfield", "SGP4", "Jetson", "RTX 3090"],
        detail:
          "\"We must defend U.S. space capabilities, and we must protect our forces from space-enabled attack.\" - CSO Gen. Saltzman, Space Warfighting, March 2025\n\nCANOPY won $20,000 at a hackathon for its approach to tactical space defense decision support.\n\nSpace supports every fight. CANOPY lets every fight support space. A brigade in the field depends on space for everything: GPS, encrypted radio, blue force tracker, satellite imagery. But adversaries no longer attack space alone. They jam signals on the ground, probe networks through cyber, and maneuver inspector satellites in orbit. Today, no one fuses those signals fast enough to see it. CANOPY does.\n\nIt ingests data from every domain: RF, cyber, OSINT, HUMINT, satellite tracks, GPS integrity, comms health, and drone sensors. It turns this into a single decision a brigade commander can act on. Three AI agents (gemma4:e2b) make that decision auditable: one names the adversary, a red team challenges it, and a reconciler produces the final assessment with calibrated confidence.\n\nEvery action is grounded in real orbital mechanics (Skyfield/SGP4) and a doctrine-grounded threat knowledge base with ROE. Every step is visible and traceable on screen. The output is one of three actions: passive defense, active defense, or strike request, which are routed automatically to the proper authority. The commander gets one button. The right response gets the right approval at tactical speed.\n\nCANOPY runs at the edge on a single Nvidia Jetson with an RTX 3090, and can go from first anomaly sensed to decision in <20 seconds. We also ship an evaluation harness with an adversarial scenario benchmark to measure attribution accuracy and confidence calibration; this serves as a foundation for frontier labs to red-team agentic systems against real & simulated cross-domain campaigns in Space."
      },
      {
        id: "automated-machining-inspection",
        title: "Automated Machining Inspection",
        image: "irb1300.png",
        tag: "Automation",
        summary: "Automated inspection system for machining processes.",
        tools: ["Computer Vision", "PLC", "Controls", "IRB 1300", "ABB RobotStudio"],
        detail:
          "Developed an automated inspection system for machining processes using computer vision and robotics. The system integrated a PLC for process control, an ABB IRB 1300 robot for handling and positioning, and custom vision algorithms to detect defects and support manufacturing quality control."
      },
      {
        id: "Hardware for Insole Pressure Mapping System",
        title: "Hardware for Insole Pressure Mapping System",
        image: "insolehardware.png",
        tag: "Wearables / Sensors",
        summary: "Embedded pressure-map system for real-time gait and loading visualization.",
        tools: ["IMU", "Controls", "Signal Processing", "React"],
        detail:
          "This system concept uses inertial sensing to provide real-time feedback during strength training. Target measurements include bar speed, tilt, depth, lockout, and fatigue-related velocity loss."
      },
      {
        id: "robot-controls",
        title: "Industrial Controls and Robotics",
        image: "plc.png",
        tag: "Automation",
        summary: "Controls-oriented robotics work involving PLCs, robot tooling, and automation systems.",
        tools: ["PLC", "ABB RobotStudio", "Controls", "Electrical Systems"],
        detail:
          "This work includes robotics and controls experience across industrial automation systems, including PLC integration, robot programming environments, and hardware-level design constraints."
      }
    ]
  },
  {
    id: "academia",
    title: "Academia",
    subtitle: "Research, teaching, technical communication, and experimental methods.",
    projects: [
      {
        id: "continuum-rheology-lecture",
        title: "Continuum Mechanics / Rheology Lecture",
        image: "continuum.png",
        tag: "Teaching",
        summary: "Lecture on rheology specifically focused on anisotropic and thixotropic flow.",
        tools: ["Continuum Mechanics", "Rheology", "Teaching"],
        detail:
          "Gave a lecture on rheology specifically focused on anisotropic and thixotropic flow."
      },
      {
        id: "limited-angle-xpiv-methods",
        title: "Limited-Angle XPIV Methods",
        image: "xpiv.png",
        tag: "Research",
        summary: "Unpublished Research",
        tools: ["XPIV", "X-ray Imaging", "Methods", "Research"],
        detail:
          "Unpublished Research"
      },
      {
        id: "regolith-depth-measurement",
        title: "Regolith Depth Measurement Project",
        image: "geant4.png",
        tag: "Research",
        summary: "Unpublished Research",
        tools: ["X-ray Imaging", "Regolith", "Experimental Design", "Research"],
        detail:
          "Unpublished Research"
      }
    ]
  }
]
