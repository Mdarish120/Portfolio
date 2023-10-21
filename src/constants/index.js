import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  Sql,
  git,
  figma,
 material,
graduate,
certificate,
twelve,
resume,
  ten,
  carrent,
  jobit,
  tripguide,
  MemoryProject,
  PromptProject,
  AdminProject,
  ShadeProject,
  GrpChat,
  expanse_tracker,


  threejs,
} from "../assets";

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

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Quick  Learner",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Enthusiastic ",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Material UI",
    icon: material
    ,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "sql",
    icon: Sql,
  },
 
];

const experiences = [
  {
    title: "High School",
    company_name: "Anglo Vedic Senior Seconadary School",
    icon: ten,
    iconBg: "#383E56",
    date: "2017 - 2018",
    points: [
      "LOCATION : UTTAR PRADESH",
      "BOARD:CBSE",
      "PERCENTAGE :82%",
      "HIGEST SCORING SUBJECT: MATHEMATICS (95)",
    ],
  },
  {
    title: "12TH GRADE",
    company_name: "Anglo Vedic Senior Seconadary School",
    icon: twelve,
    iconBg: "#383E56",
    date: "2019 - 2020",
    points: [
      "LOCATION : UTTAR PRADESH",
      "BOARD:CBSE",
      "STREAM:PCM",
      "PERCENTAGE :90%",
      "HIGEST SCORING SUBJECT: MATHEMATICS (95)",
    ],
  },
  {
    title: "GRADUATION",
    company_name: "RAMANUJAN COLLGE (DU)",
    icon: graduate,
    iconBg: "#383E56",
    date: " 2020 - 2023",
    points: [
      "LOCATION : DELHI",
      "DEGREE :  Bachelor of Vocational Software Development (3yr)",
      "CGPA :9",
      "TRAINING : FULL STACK INTERN IN SPARK INDIA STARTUP (2 MONTH)",
      "EXTRACURRICAL ACTIVITIES :Work in Equal Opportunity Society",
    ],
  },
  {
    title: "Certificate",
    company_name: "By IT -ITes SSC NASSCOM",
    icon: certificate,
    iconBg: "#E6DEDD",
    date: "",
    points: [

      {title:"Junior Data Associate",link:"https://drive.google.com/file/d/16N6OLF5nGGHbS6EWHf0PQja-7_lHBGrf/view?usp=sharing"},
      {title:"Junior Software Developer",link:"https://drive.google.com/file/d/16vbh1UdEo1u16aqe05wtEz5fZVzJwO7E/view?usp=sharing"},
      {title:"Software Developer",link:"https://drive.google.com/file/d/16P_-dcOomHcUsZngW1P3HO1463A6qqXP/view?usp=sharing"}

    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Prompt AI",
    description:
      "Developers interact with AI tools like ChatGPT by formulating effective questions or prompts. Crafting well-structured prompts is crucial to maximize tool capabilities. This project empowers efficient and productive interactions with AI for diverse tasks.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: PromptProject,
    source_code_link: "https://github.com/Mdarish120/NextPromtProject.git/",
    project_link:"https://prompt-project-m8hosfafw-shariquefaridi7.vercel.app/"
  },
  {
    name: "Lifestory Catalog",
    description:
     "Lifestory Image Catalog is a project designed to create a visual memoir of a person's life. It involves cataloging and describing significant life events through images, providing a rich and meaningful way to reminisce.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
     
      {
        name: "material ui",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "red-text-gradient",
      },
      {
        name: "nodejs",
        color: "orange-text-gradient",
      },
    ],
    image: MemoryProject,
    source_code_link: "https://github.com/Mdarish120/Stack.git",
    project_link:"https://memory-client-fepy.onrender.com"
  },
  {
    name: "Shade Generator",
    description:
      "The Shade Generator is a tool for effortlessly creating harmonious color palettes. It offers a user-friendly interface to generate shades and variations of a chosen color, making it ideal for designers and artists.Users can experiment with hues, saturations",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
    
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: ShadeProject,
    source_code_link: "https://github.com/Mdarish120/arish.git",
    project_link:"https://shade-generator.onrender.com"
  },  {
    name: "Admin Panel",
    description:
      "An Admin Panel is a centralized platform that provides comprehensive insights into customer data, along with dynamic visualizations such as graphs and pie charts. It empowers administrators to access and manage customer information efficiently.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "material",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "orange-text-gradient",
      },
    ],
    image: AdminProject,
    source_code_link: "https://github.com/Mdarish120/arish.git",
    project_link:"https://admin-frontend-v9aw.onrender.com"
  },  {
    name: "Expanse Tracker",
    description:
      "Expanse Tracker is a centralized platform designed to provide comprehensive insights and management capabilities for tracking expenses.It enables users to efficiently monitor and manage their financial data.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "material ui",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "mysql",
        color: "orange-text-gradient",
      },
    ],
    image: expanse_tracker,
    source_code_link: "https://github.com/Mdarish120/mongodbExpenseTracker.git",
    project_link:"https://exapnse-frontend.onrender.com/"
  },  {
    name: "Chat App",
    description:
      "A chat app that facilitates real-time communication between users over the internet. It enables users to send and receive text,commonly used for personal and professional communication, allowing individuals or groups to have conversations,",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "material ui",
          color: "green-text-gradient",
        },
        {
          name: "nodejs",
          color: "pink-text-gradient",
        },
        {
          name: "mysql",
          color: "orange-text-gradient",
        },
      ],
    image: GrpChat,
    source_code_link: "https://github.com/Mdarish120/FinalChatapp.git",
    project_link:"https://chattingapp-96g6.onrender.com/"
  },
];

export { services, technologies, experiences, testimonials, projects };
