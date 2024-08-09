import {
  mobile,
  backend,
  creator,
  web,
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
  bws,
  spaceclub,
  IASC,
  swolenormous,
  GPT3,
  quotegen,
  nasa,
  todolist,
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
    title: "React Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Full-stack Web Development Intern",
    company_name: "Business Web Solutions",
    icon: bws,
    iconBg: "#ffffff",
    date: "Oct 2022 - Dec 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, aFull-stack web development interns to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Technical Team Member",
    company_name: "Space Club, RIT",
    icon: spaceclub,
    iconBg: "#ffffff",
    date: "June 2022 - June 2023",
    points: [
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Designed and Researched on the various types of rockets and aviation systems.",
    ],
  },
  {
    title: "Citizen Scientist",
    company_name: "International Astronomical Search Collaboration",
    icon: IASC,
    iconBg: "#ffffff",
    date: "April 2023 - June 2023",
    points: [
      "Analyzing the near-Earth objects with the help of Astrometrica software.",
      "In which 2 preliminary detections were done, named P21EO8h and P21EEZZ.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Pranav proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Pranav does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Pranav optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
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
  },
  {
    name: "Quote Generator",
    description:
      "A web application that lets users generate various quotes using an API and share them on social media websites such as Twitter and Tumblr.",
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
    image: quotegen,
    source_code_link: "https://github.com/TheCaptain1810/quote_generation",
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
  },
  {
    name: "To-do List",
    description:
      "A web application that lets users create a to-do list, add tasks, update tasks, and delete them. This is my first react project so please don't judge.😳",
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
    image: todolist,
    source_code_link: "https://github.com/TheCaptain1810/todolist",
  },
];

export { services, technologies, experiences, testimonials, projects };
