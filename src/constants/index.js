import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  nextjs,
  express,
  postgresql,
  python,
  bws,
  ncircle,
  IASC,
  swolenormous,
  techNotes,
  moodtracker,
  GPT3,
  nasa,
  todolistgo,
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

// Job titles, ordered from most to least relevant
const services = [
  {
    title: "Software Engineer",
    skills: "TypeScript · System design · Clean code",
  },
  {
    title: "Full-Stack Developer",
    skills: "React · Node.js · MongoDB · PostgreSQL",
  },
  {
    title: "MERN Stack Developer",
    skills: "MongoDB · Express · React · Node.js",
  },
  {
    title: "Frontend Developer",
    skills: "React · Next.js · Redux · Tailwind CSS",
  },
  {
    title: "Backend Developer",
    skills: "Node.js · Express · REST APIs · Databases",
  },
];

// Ordered by relevance to full-stack (TS/React/Node) roles
const technologies = [
  {
    name: "TypeScript",
    icon: typescript,
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "JavaScript",
    icon: javascript,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "React JS",
    icon: reactjs,
    link: "https://react.dev/",
  },
  {
    name: "Next.js",
    icon: nextjs,
    link: "https://nextjs.org/",
  },
  {
    name: "Node JS",
    icon: nodejs,
    link: "https://nodejs.org/en",
  },
  {
    name: "Express.js",
    icon: express,
    link: "https://expressjs.com/",
  },
  {
    name: "MongoDB",
    icon: mongodb,
    link: "https://www.mongodb.com/",
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
    link: "https://www.postgresql.org/",
  },
  {
    name: "Redux Toolkit",
    icon: redux,
    link: "https://redux-toolkit.js.org/",
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    link: "https://tailwindcss.com/",
  },
  {
    name: "Python",
    icon: python,
    link: "https://www.python.org/",
  },
  {
    name: "HTML 5",
    icon: html,
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS 3",
    icon: css,
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "Git",
    icon: git,
    link: "https://git-scm.com/",
  },
  {
    name: "Figma",
    icon: figma,
    link: "https://www.figma.com/",
  },
];

const experiences = [
  {
    title: "Member of Technical Staff",
    company_name: "nCircle Tech",
    icon: ncircle,
    iconBg: "#ffffff",
    date: "Jul 2025 - Present",
    points: [
      "Developing and maintaining scalable full-stack web applications with TypeScript, React.js, Next.js, Node.js and MongoDB.",
      "Collaborating with cross-functional teams to deliver end-to-end software solutions.",
      "Focusing on performance, reliability and clean, maintainable code.",
    ],
  },
  {
    title: "Intern - Member of Technical Staff",
    company_name: "nCircle Tech",
    icon: ncircle,
    iconBg: "#ffffff",
    date: "Jan 2025 - Jul 2025",
    points: [
      "Built and deployed scalable web applications using React.js, Next.js, Node.js and Express.js.",
      "Developed front-end interfaces and back-end APIs with secure data handling and robust functionality.",
      "Contributed to code quality and performance through code reviews and issue resolution on real-world projects.",
    ],
  },
  {
    title: "Full-stack Web Development Intern",
    company_name: "Business Web Solutions",
    icon: bws,
    iconBg: "#ffffff",
    date: "Oct 2022 - Dec 2022",
    points: [
      "Developed and maintained several full-stack web applications using React.js, Node.js, Python and PostgreSQL.",
      "Optimized performance of web applications, reducing load times by 30% and improving overall user experience.",
    ],
  },
];

const volunteering = [
  {
    title: "Citizen Scientist",
    organization: "International Astronomical Search Collaboration",
    icon: IASC,
    date: "Apr 2023 - Jun 2023",
    points: [
      "Analyzed near-Earth objects using Astrometrica software.",
      "Made 2 preliminary asteroid detections, named P21EO8h and P21EEZZ.",
    ],
  },
];

// icon = Font Awesome class. Add a `link` to make a card clickable (e.g. the credential URL).
const certifications = [
  {
    name: "MongoDB Node.js Developer Path",
    issuer: "MongoDB University",
    icon: "fa-solid fa-leaf",
    color: "#47a248",
  },
  {
    name: "MongoDB Data Modeling Path",
    issuer: "MongoDB University",
    icon: "fa-solid fa-leaf",
    color: "#47a248",
  },
  {
    name: "Back End Development and APIs",
    issuer: "freeCodeCamp",
    icon: "fa-brands fa-free-code-camp",
    color: "#ffffff",
  },
  {
    name: "Front End Development Libraries",
    issuer: "freeCodeCamp",
    icon: "fa-brands fa-free-code-camp",
    color: "#ffffff",
  },
  {
    name: "GitHub Foundations",
    issuer: "GitHub",
    icon: "fa-brands fa-github",
    color: "#ffffff",
  },
];

const projects = [
  {
    name: "techNotes",
    description:
      '"techNotes" is a note-taking application developed for small businesses to replace traditional sticky notes or other note-taking systems. It has secure authentication and authorization so that the admins and managers can control employees\' access.',
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "node",
        color: "blue-text-gradient",
      },
      {
        name: "MERN",
        color: "pink-text-gradient",
      },
    ],
    image: techNotes,
    source_code_link: "https://github.com/TheCaptain1810/technotes",
    link: "https://technotes-wop8.onrender.com/",
  },
  {
    name: "MoodTracker",
    description:
      "MoodTracker helps you track your daily mood!\n Create your mood record and see how you feel on every day of every year.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "blue-text-gradient",
      },
      {
        name: "Next.js",
        color: "pink-text-gradient",
      },
    ],
    image: moodtracker,
    source_code_link: "https://github.com/TheCaptain1810/moodtracker",
    link: "https://thecaptain-moodtracker.vercel.app/",
  },
  {
    name: "Fitness Application",
    description:
      "Web-based platform that allows users to generate personalized workouts according to their fitness goals and keep track of them. Get Swolenormous.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: swolenormous,
    source_code_link: "https://github.com/TheCaptain1810/fitness-app",
    link: "https://thecaptain-swolenormous.netlify.app/",
  },
  {
    name: "GPT3 Website",
    description:
      "A Frontend application for an AI product named GPT3 using React.js. It serves as an interface for the official website of the company.",
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
    image: GPT3,
    source_code_link:
      "https://github.com/TheCaptain1810/A-frontend-GPT3-project",
    link: "https://gpt3-website.pages.dev/",
  },
  {
    name: "Nasa API",
    description:
      "Web application that enables users to see new images uploaded by the nasa and related information everyday with the help of an API.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: nasa,
    source_code_link: "https://github.com/TheCaptain1810/nasa-react-app",
    link: "https://thecaptain-nasa-api.netlify.app/",
  },
  {
    name: "To-do List Go",
    description:
      "A web application that lets users create a to-do list, add tasks, update tasks, and delete them. The data is stored in the MongoDB database and the backend is built using Go.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "go",
        color: "blue-text-gradient",
      },
    ],
    image: todolistgo,
    source_code_link: "https://github.com/TheCaptain1810/todolist-go",
    link: "https://todolist-go.up.railway.app/",
  },
];

export { services, technologies, experiences, volunteering, certifications, projects };
