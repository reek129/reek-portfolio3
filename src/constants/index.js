import {
  c,
  python,
  java,
  cpp,
  html,
  php,
  javascript,
  r,
  pytorch,
  torch_geometric,
  pennylane,
  mysql,
  mongodb,
  dynamodb,
  kinesis,
  sagemaker,
  api_gateway,
  lambda,
  qiskit,
  css,
  qml,
  hyhop,
  cognizant,
  c2m2,
  tracr,
  gbids,
  reactjs,
  tailwind,
  nodejs,
  git,

  ensemble,
  soccer_visualization,
  unreal,
  multi_task,
} from "../assets";

// import R from "../assets"

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services2 = [
  { title: "C", icon: c },
  { title: "C++", icon: cpp },
  { title: "Python", icon: python },
  { title: "Java", icon: java },
];

export const services = [
  // Programming Languages
  { title: "C", icon: c, category: "Programming Languages" },
  { title: "C++", icon: cpp, category: "Programming Languages" },
  { title: "Python", icon: python, category: "Programming Languages" },
  { title: "Java", icon: java, category: "Programming Languages" },
  { title: "HTML", icon: html, category: "Programming Languages" },
  { title: "CSS", icon: css, category: "Programming Languages" },
  { title: "R-Language", icon: r, category: "Programming Languages" },
  { title: "PHP", icon: php, category: "Programming Languages" },
  { title: "React JS", icon: reactjs, category: "Programming Languages" },
  { title: "Node JS", icon: nodejs, category: "Programming Languages" },
  { title: "Javascript", icon: javascript, category: "Programming Languages" },


  
  // Libraries
  { title: "Pytorch", icon: pytorch, category: "Libraries" },
  { title: "PennyLane", icon: pennylane, category: "Libraries" },
  { title: "Qiskit", icon: qiskit, category: "Libraries" },
  { title: "Pytorch Geometric", icon: torch_geometric, category: "Libraries" },
  // { title: "OpenAI-Gym", icon: openai_gym, category: "Libraries" },

  // Database
  { title: "MySQL", icon: mysql, category: "Database" },
  { title: "MongoDB", icon: mongodb, category: "Database" },
  { title: "DynamoDB", icon: dynamodb, category: "Database" },

  // // Tools
  // { title: "Git/GitHub", icon: git, category: "Tools" },
  // { title: "VS Code", icon: vscode, category: "Tools" },
  // { title: "Tableau", icon: tableau, category: "Tools" },
  // { title: "Orange Civil3D", icon: orange_civil3d, category: "Tools" },
  // { title: "ArcGIS", icon: arcgis, category: "Tools" },

  // // Amazon AWS
  { title: "Kinesis", icon: kinesis, category: "Amazon AWS" },
  { title: "Lambda", icon: lambda, category: "Amazon AWS" },
  { title: "Sagemaker", icon: sagemaker, category: "Amazon AWS" },
  { title: "API Gateway", icon: api_gateway, category: "Amazon AWS" },

  // // ITS Framework
  // { title: "ARC-IT", icon: arc_it, category: "ITS Framework" },
  // { title: "RAD-IT", icon: rad_it, category: "ITS Framework" },
  // { title: "SET-IT", icon: set_it, category: "ITS Framework" },

  // // Communication
  // { title: "DSRC", icon: dsrc, category: "Communication" },
  // { title: "C-V2X", icon: c_v2x, category: "Communication" },
];



export const technologies = [
  { name: "Python", icon: python },
  { name: "Java", icon: java },
  // { name: "HTML 5", icon: html },
  // { name: "CSS 3", icon: css },
  // { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  // { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  // { name: "Three JS", icon: threejs },
  { name: "Git", icon: git },
  { name: "Pytorch", icon: pytorch },
  { name: "Pytorch Geometric", icon: torch_geometric },
  { name: "Pennylane", icon: pennylane },
];

export const experiences = [
  {
    title: "Graduate Researcher",
    company_name: "National Center for Transportation Cybersecurity and Resiliency | TraCR",
    icon: tracr,
    iconBg: "#161329",
    date: "Sep 2023 - Current",
    points: [
      "Designed and validated graph-based machine learning models for protocol-independent intrusion detection system in drones, delivering a 3% to 35% performance boost across diverse Denial of Service (DoS) attacks, such as flooding, fuzzy, and replay attacks, outperforming baseline Long Short-Term Memory (LSTM) models.",
      "Coordinated and led student demonstrations for diverse audiences, including federal agencies, high schools, and industry representatives, showcasing innovations such as software-defined networking, vision-based collision alerts, IoT-based pedestrian warning systems, and cybersecurity solutions,",
    ],
  },
  {
    title: "Graduate Researcher",
    company_name: "Center for Connected Multimodal Mobility | C\u00B2M\u00B2",
    icon: c2m2,
    iconBg: "#161329",
    date: "Jan 2021 - Sep 2023",
    points: [
      "Conducted research on autonomous vehicles, drones, and cyber-physical systems, with a focus on applying advanced computational techniques to solve real-world challenges. Research areas include Data Science, Data Mining, Quantum Computing, Machine Learning, Deep Learning, Cloud Computing, Internet of Things (IoT), and Cybersecurity.",
      "Mentored high school students on enhancing autonomous vehicle perception systems using deep learning techniques.",
      // "",
      "Developed expertise in machine learning models for clustering, classification, and regression, and customized deep learning techniques for classification and regression task.",
    ],
  },
  {
    title: "Associate Engineer-1",
    company_name: "Cognizant Technology Solution",
    icon: cognizant,
    iconBg: "#161329",
    date: "Jan 2016 - July 2019",
    points: [
      "Devised and constructed ADPART (Activity Diagram-based Path analysis and regression testing) to enhance test-case generation efficiency through regression path analysis on activity diagrams, resulting in a 7% performance improvement. ",
      "Engineered a streamlined reverse engineering workflow for generating activity diagrams directly from existing textual test cases in Excel, improving the efficiency of visual representation processes and enhancing team productivity by 70% within six months.",
      "Designed and implemented Quality Insight Bots with a dashboard in HTML, jQuery, CSS3, and core Java. Showcased AI model performance in assigning client issues, improving client issue allocation to teams by 30% and providing an option to view similar issues previously solved by the respective team.",
    ],
  },
  {
    title: "Customer Sales Intern",
    company_name: "Hyper Local Shuttle | HyHop",
    icon: hyhop,
    iconBg: "#161329",
    date: "Oct 2015 - Jan 2016",
    points: [
      "Made four vendor partners to kickstart the product launch.",
      "Worked on two promotional events to improve visibility and generated revenue of 50K INR within the first two months of launch.",
      
    ],
  },
];

export const projects = [
  {
    name: "Quantum Machine Learning for Traffic Sign Classification",
    description:
      "Leveraged PennyLane for QML in traffic sign detection, rigorously testing against adversarial attacks. Incorporated QML using transfer learning on image data and integrating gate-based quantum computers, achieving a performance boost of 85\%  for hybrid classical-quantum models.",
    tags: [
      { name: "Pytorch", color: "blue-text-gradient" },
      { name: "Python", color: "green-text-gradient" },
      { name: "Pennylane", color: "pink-text-gradient" },
      // { name: "Weather API by API Ninjas", color: "yellow-text-gradient" },
    ],
    image: qml,
    source_code_link: "https://github.com/reek129/QuantumAI_MultiClass_Sign_Recognition",
  },
  {
    name: "Graph-based Machine Learning for Intrusion Detection",
    description:
      "Designed and validated graph-based machine learning models for protocol-independent intrusion detection system in drones, delivering a 3\% to 35\% performance boost across diverse Denial of Service (DoS) attacks, such as flooding, fuzzy, and replay attacks, outperforming baseline Long Short-Term Memory (LSTM) models.",
    tags: [
      { name: "Pytorch Geometric", color: "blue-text-gradient" },
      { name: "UAVCAN", color: "green-text-gradient" },
      { name: "Graph-based Machine Learning", color: "pink-text-gradient" },
    ],
    image: gbids,
    source_code_link: "https://github.com/reek129/Graph-based-defense-on-UAVCAN-data.git",
  },

  {
    name: "Soccer League Data Visualization",
    description:
      "Analyzed team rankings in the English Premier League and La Liga during the 2017-2018 season, creating interactive visualizations to illustrate score performance trends throughout the tournament and achieved a Net Promoter Score (NPS) of 72% from the instructor and classmates for the quality and clarity of the visualizations.",
    tags: [
      { name: "D3.js", color: "blue-text-gradient" },
      { name: "Data Visualization", color: "blue-text-gradient" },
    ],
    image: soccer_visualization,
    source_code_link: "https://reek129.github.io/reekMajumder/",
  },
  {
    name: "Reinforcement Learning-Based Collision Avoidance System for Drones",
    description:
      "Implemented a collision avoidance system for UAVs using AirSim simulation, applying reinforcement learning algorithms to enable autonomous navigation and real-time obstacle avoidance in dynamic environments.",
    tags: [
      { name: "Unreal Engine", color: "blue-text-gradient" },
      { name: "Reinforcement Learning", color: "green-text-gradient" },
      { name: "Airsim", color: "pink-text-gradient" },
      { name: "Deep Q-Learning", color: "pink-text-gradient" },
    ],
    image: unreal,
    source_code_link: "https://github.com/reek129/reinforcement_learning_in_unreal_engine.git",
  },
  {
    name: "Multi-Task Learning Framework for Segmentation and Depth Estimation",
    description:
      "Multi-task learning (MTL) framework integrating semantic segmentation and depth estimation using the Cityscapes dataset, designed with a compact architecture featuring a MobileNetV3-Small encoder, shared generators, and GAN-based discriminators, leveraging a combination of loss functions—including cross-entropy, dice, scale-invariant, perceptual, and adversarial losses—to ensure accurate and perceptually consistent results.",
    tags: [
      { name: "OpenCV", color: "blue-text-gradient" },
      { name: "CresStereo", color: "green-text-gradient" },
      { name: "Pytorch", color: "green-text-gradient" },
      { name: "Python", color: "pink-text-gradient" },
    ],

    image: multi_task,
    source_code_link: "https://github.com/reek129/Multi-Task-Learning-Using-GANS.git",
  },
  {
    name: "Cloud enabled Ensemble Learning Models for Methane Detection",
    description:
      "Designed an cloud enabled ensemble learning model for real-time methane detection and intensity prediction, using a pipeline that combines classification and regression ensembles, leveraging distributed meteorological data for efficient large-scale monitoring and achieving improved R² values of up to 85%.",
    tags: [
      { name: "Ensemble Machine Learning", color: "blue-text-gradient" },
      { name: "Classification and Regression Algorithms", color: "green-text-gradient" },
      { name: " Amazon Sagemaker", color: "pink-text-gradient" },
      // { name: "Regression Algorithms", color: "pink-text-gradient" },
    ],
    image: ensemble,
    source_code_link:
      "https://github.com/reek129/Environmental-Monitoring-for-Methane-Leak.git",
  },
];
