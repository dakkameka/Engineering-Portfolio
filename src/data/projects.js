export const categories = [
  {
    id: "cfd",
    title: "CFD",
    subtitle: "Fluids, fire, combustion, X-ray diagnostics, and numerical modeling.",
    projects: [
      {
        id: "limited-angle-xpiv",
        title: "Limited-Angle X-ray Flow Imaging",
        tag: "Diagnostics / Reconstruction",
        summary: "X-ray based flow and material measurement work using limited-angle imaging methods.",
        tools: ["Python", "MATLAB", "ASTRA", "CT", "Signal Processing"],
        detail:
          "This project focuses on reconstructing useful physical information from limited-angle X-ray measurements. The work connects detector geometry, attenuation physics, reconstruction methods, and uncertainty analysis."
      },
      {
        id: "fire-transport",
        title: "Fire and Emissions Transport Modeling",
        tag: "Combustion / Wildfire",
        summary: "Numerical modeling of large-scale fire spread, soot transport, and plume injection.",
        tools: ["ELMFIRE", "Python", "Fortran", "Level Sets", "GIS"],
        detail:
          "This work studies how large fires spread, emit combustion products, and inject material into the atmosphere. The modeling combines level-set fire propagation, terrain/fuel data, and emissions/injection physics."
      },
      {
        id: "wrf-analysis",
        title: "WRF Flow Field Analysis",
        tag: "Atmospheric CFD",
        summary: "Post-processing wind, scalar, and transport fields from numerical weather models.",
        tools: ["MATLAB", "NetCDF", "WRF", "Visualization"],
        detail:
          "This project involves extracting and visualizing atmospheric model output, including wind fields, scalar concentration fields, and transport patterns relevant to fire and aerosol problems."
      }
    ]
  },
  {
    id: "mechanical",
    title: "Mechanical Design",
    subtitle: "Hardware, structures, test fixtures, thermal systems, and manufacturable design.",
    projects: [
      {
        id: "xray-regolith-bed",
        title: "X-ray Regolith Bed Measurement System",
        tag: "Experimental Hardware",
        summary: "Mechanical and diagnostic system concept for measuring evolving regolith thickness.",
        tools: ["CAD", "X-ray Imaging", "Experimental Design", "MATLAB"],
        detail:
          "This project develops a measurement approach for observing how a granular regolith bed evolves under plume impingement. The design considers source-detector geometry, attenuation, test section size, and measurement uncertainty."
      },
      {
        id: "space-thermal-design",
        title: "Thermal Protection Automation",
        tag: "Aerospace / Thermal",
        summary: "Automation and modeling workflows for high-temperature aerospace thermal systems.",
        tools: ["Python", "Thermal Modeling", "Automation", "CAD"],
        detail:
          "This work involved engineering automation for thermal protection system analysis. The goal was to reduce repetitive design and analysis labor while maintaining traceable engineering calculations."
      },
      {
        id: "mechanical-fixtures",
        title: "Mechanical Test Fixtures",
        tag: "Design / Fabrication",
        summary: "Fixture and test hardware design for lab-scale engineering experiments.",
        tools: ["CAD", "3D Printing", "Machining", "Instrumentation"],
        detail:
          "This category covers mechanical fixtures, mounts, and test structures designed to support experimental workflows. The emphasis is practical design, iteration speed, and clean integration with sensors or diagnostics."
      }
    ]
  },
  {
    id: "robotics",
    title: "Robotics",
    subtitle: "Sensors, embedded systems, controls, mechatronics, and feedback systems.",
    projects: [
      {
        id: "pressure-insole",
        title: "Pressure-Sensing Insole System",
        tag: "Wearables / Sensors",
        summary: "Embedded pressure-map system for real-time gait and loading visualization.",
        tools: ["ESP32", "C++", "Python", "Web UI", "Sensors"],
        detail:
          "This project uses pressure sensors, embedded electronics, and a lightweight interface to visualize loading patterns. The work combines hardware integration, firmware, data streaming, and user-facing visualization."
      },
      {
        id: "imu-barbell",
        title: "IMU Barbell Tracker",
        tag: "Fitness Robotics",
        summary: "Concept for tracking bar path, velocity, tilt, depth, and rep quality.",
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
  }
]