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
        id: "microchannel-flow",
        title: "Microchannel Flow Optimization",
        image: "microchannel.jpg",
        tag: "Commercial CFD",
        summary: "Taguchi-method DOE study for optimizing fluid mixing in microchannel flow.",
        tools: ["CFD", "Design of Experiments", "Taguchi Method", "Simulation"],
        detail:
          "Used a Design of Experiments approach with the Taguchi Method to optimize fluid mixing in a microchannel. The project used a commercial CFD solver to numerically simulate microchannel flow behavior and won second place in a research competition."
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
        tag: "Microcontrollers / Web Design / API Implementation",
        summary: "A web-based coaching platform integrating microcontroller data for real-time feedback.",
        tools: ["ESP32", "C++", "Python", "React", "Web Development"],
        detail:
          "Coach Nova is a web-based coaching platform that integrates data from microcontroller-based sensors to provide real-time feedback and performance tracking for athletes. The system combines embedded hardware, firmware development, backend data processing, and a user-friendly frontend interface."
      },
      {
        id: "pressure-sensing-insole",
        title: "Pressure-Sensing Insole System For Camwalker",
        tag: "Wearables / Sensors",
        summary: "Embedded pressure-map system for real-time gait and loading visualization.",
        tools: ["ESP32", "C++", "Python", "Web UI", "Sensors"],
        detail:
          "This project uses pressure sensors, embedded electronics, and a lightweight interface to visualize loading patterns. The work combines hardware integration, firmware, data streaming, and user-facing visualization."
      },
      {
        id: "adaptive-training-wheels",
        title: "Adaptive Training Wheels",
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
    title: "Robotics",
    subtitle: "Sensors, embedded systems, controls, mechatronics, and feedback systems.",
    projects: [
      {
        id: "automated-machining-inspection",
        title: "Automated Machining Inspection",
        tag: "Automation",
        summary: "Automated inspection system for machining processes.",
        tools: ["Computer Vision", "PLC", "Controls", "IRB 1300", "ABB RobotStudio"],
        detail:
          "Developed an automated inspection system for machining processes using computer vision and robotics. The system integrated a PLC for process control, an ABB IRB 1300 robot for handling and positioning, and custom vision algorithms to detect defects and support manufacturing quality control."
      },
      {
        id: "robot1",
        title: "robot1",
        tag: "robot1",
        summary: "add later",
        tools: ["IMU", "Controls", "Signal Processing", "React"],
        detail:
          "This system concept uses inertial sensing to provide real-time feedback during strength training. Target measurements include bar speed, tilt, depth, lockout, and fatigue-related velocity loss."
      },
      {
        id: "robot-controls",
        title: "Industrial Controls and Robotics",
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
        tag: "Teaching",
        summary: "Space for teaching materials, lecture notes, and continuum mechanics communication.",
        tools: ["Continuum Mechanics", "Rheology", "Teaching"],
        detail:
          "Placeholder for teaching and lecture material related to continuum mechanics and rheology."
      },
      {
        id: "limited-angle-xpiv-methods",
        title: "Limited-Angle XPIV Methods",
        tag: "Research",
        summary: "Space for limited-angle X-ray particle image velocimetry methods and analysis.",
        tools: ["XPIV", "X-ray Imaging", "Methods", "Research"],
        detail:
          "Placeholder for research work on limited-angle XPIV methods, reconstruction constraints, uncertainty, and flow diagnostics."
      },
      {
        id: "regolith-depth-measurement",
        title: "Regolith Depth Measurement Project",
        tag: "Research",
        summary: "Space for X-ray regolith depth measurement research and experimental planning.",
        tools: ["X-ray Imaging", "Regolith", "Experimental Design", "Research"],
        detail:
          "Placeholder for research on measuring evolving regolith bed depth using X-ray attenuation and experimental diagnostics."
      }
    ]
  }
]