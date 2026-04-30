export const categories = [
  {
    id: "cfd",
    title: "CFD",
    subtitle: "Custom solvers and Comercial CFD applications!",
    projects: [
      {
        id: "C-Fitted Shock",
        title: "C-Fitted Shock Capturing",
        image: "cshock.jpg",
        tag: "Numerical Methods",
        summary: "Development of higher-order compressible flow solvers with C-fitted shock capturing.",
        tools: ["Python", "MATLAB", "CFD", "Numerical Analysis"],
        detail:
          "This project focuses on developing and analyzing numerical methods for compressible flow simulations, particularly those involving shocks. The C-fitted shock capturing approach allows for accurate resolution of shock waves while maintaining higher-order accuracy in smooth regions of the flow."
      },
      {
        id: "Converging-Diverging Nozzle",
        title: "Converging-Diverging Nozzle",
        image: "convergediverge.png",
        tag: "Numerical Methods",
        summary: "Achieved stable, higher-order solutions for compressible flow in a converging-diverging nozzle geometry. Accomplished using FR/CPR, Discontinuous Spectral Element, and Discontinuous Galerkin methods.",
        tools: ["Python", "MATLAB", "CFD", "Numerical Analysis"],
        detail:
          "This project focuses on developing and analyzing numerical methods for compressible flow simulations in a converging-diverging nozzle geometry. The work involves implementing and validating higher-order discretization schemes to achieve accurate and stable solutions."
      },
      {
        id: "FSAE Aerodynamics",
        title: "FSAE Aerodynamics",
        image: "FSAE.jpg",
        tag: "Vehicle Dynamics",
        summary: "Aerodynamic analysis and optimization for Formula SAE race cars.",
        tools: ["Star-CCM+", "CFD", "Simulation"],
        detail:
          "This project involves using CFD tools to analyze and optimize the aerodynamics of Formula SAE race cars. The work includes simulating airflow around the vehicle, evaluating downforce and drag characteristics, and iterating on design modifications to improve performance on the track."
      }
    ]
  },
  {
    id: "mechanical",
    title: "Mechanical Design",
    subtitle: "Mechanically designing and innovating hardware systems for practical applications.",
    projects: [
      {
        id: "Coach Nova",
        title: "Coach Nova",
        tag: "Microcontrollers/Web Design/API Implementation",
        summary: "A web-based coaching platform that integrates microcontroller data for real-time feedback and performance tracking.",
        tools: ["ESP32", "C++", "Python", "React", "Web Development"],
        detail:
          "Coach Nova is a web-based coaching platform that integrates data from microcontroller-based sensors to provide real-time feedback and performance tracking for athletes. The system combines embedded hardware, firmware development, backend data processing, and a user-friendly frontend interface to deliver actionable insights and enhance training outcomes."
      },
      {
        id: "Pressure-Sensing Insole",
        title: "Pressure-Sensing Insole System For Camwalker",
        tag: "Wearables / Sensors",
        summary: "Embedded pressure-map system for real-time gait and loading visualization.",
        tools: ["ESP32", "C++", "Python", "Web UI", "Sensors"],
        detail:
          "This project uses pressure sensors, embedded electronics, and a lightweight interface to visualize loading patterns. The work combines hardware integration, firmware, data streaming, and user-facing visualization."
      },
      {
        id: "Adaptive Training Wheels",
        title: "Adaptive Training Wheels",
        tag: "Design / Fabrication",
        summary: "Mechanical design and fabrication of adaptive training wheels for bicycles, providing stability and support for novice riders.",
        tools: ["CAD", "3D Printing", "Mechanical Design", "Fabrication"],
        detail:
          "This project involves the mechanical design and fabrication of adaptive training wheels for bicycles. The training wheels are designed to provide stability and support for novice riders while allowing for gradual adjustment as the rider gains confidence and balance. The work includes CAD modeling, prototyping, and testing to ensure functionality and safety."
      }
    ]
  },
  {
    id: "robotics",
    title: "Robotics",
    subtitle: "Sensors, embedded systems, controls, mechatronics, and feedback systems.",
    projects: [
      {
        id: "Automated Machining Inspection",
        title: "Automated Machining Inspection",
        tag: "Automation",
        summary: "Automated inspection system for machining processes.",
        tools: ["Computer Vision", "PLC", "Controls", "IRB 1300", "ABB RobotStudio"],
        detail:
          "This project involves developing an automated inspection system for machining processes using computer vision and robotics. The system integrates a PLC for process control, an ABB IRB 1300 robot for handling and positioning, and custom vision algorithms to detect defects and ensure quality control in manufacturing."
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
  }
]