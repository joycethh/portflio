import funget from "../images/p1-funget.png";
import workout from "../images/p4-workout.png";
import blog from "../images/p3-blog1.png";
import note from "../images/p5-note.png";
import gritgrace from "../images/p7-grit-grace.png";
import portfolio from "../images/p2-personal.png";
import simongame from "../images/p6-simon.png";

const projectData = [
  {
    title: "E-commerce app",
    label: ["React", "Firebase", "Redux Toolkit"],
    description:
      "This app features products listing, firebase user authentication, redux store management.",
    image: gritgrace,
    siteLink: "https://grit-grace.netlify.app/",
    codeLink: "https://github.com/joycethh/playground",
  },
  {
    title: "Mern App",
    label: ["React", "Redux", "Mongoose "],
    description:
      "This app features supporting multiple images upload. Following CRUD princinples, the app allows user to create and delete posts. More functions are on the way. ",
    image: funget,
    siteLink: "https://funget-social.netlify.app/",
    codeLink: "https://github.com/joycethh/mui-practice",
  },
  {
    title: "Json Server Product",
    label: ["React", "Json Server"],
    description:
      "This blog web app uses react for the front and fake REST API with json server.",
    image: blog,
    siteLink: "https://json-server-blog.netlify.app",
    codeLink: "https://github.com/joycethh/json-server-blog-project.git",
  },
  {
    title: "Mern App",
    label: ["React", "Mongoose", "Authentication"],
    description:
      "It is a MERN app using MongoDB cluster, Express, React, Node JS technologies. And a local authentication added.",
    image: workout,
    siteLink: "https://workout-tracking.netlify.app/",
    codeLink: "https://github.com/joycethh/workout-frontend.git",
  },
  {
    title: "Mern App",
    label: ["React", "NodeJS", "Mongoose"],
    description:
      "It is a light weight MERN web app that allow users to create and delete posts.",
    image: note,
    siteLink: "https://mern-keep-notes.netlify.app/",
    codeLink: "https://github.com/joycethh/note-server.git",
  },
  {
    title: "Personal Website",
    label: ["React", "MUI5"],
    description: "A portfolio website uses Material UI css library. ",
    image: portfolio,
    siteLink: "https://joycetang.me/",
    codeLink: "https://github.com/joycethh/portflio",
  },
  {
    title: "JS/Css Product",
    label: ["HTML", "CSS", "JavaScript"],
    description: "Simon game built with javascript, html and css",
    image: simongame,
    siteLink: "https://joycethh.github.io/project-simon-game/",
    codeLink: "https://github.com/joycethh/project-simon-game",
  },
  //  {
  //     title: "Memory",
  //     label: ["React", "Redux", "Mongoose "],
  //     description:
  //       "A social media web app using CRUD princinples that allows users to create, update and delete posts.  ",
  //     image: funget,
  //     siteLink: "https://share-memory-monent.netlify.app",
  //     codeLink: "https://github.com/joycethh/memory-server.git",
  //   },
  // {
  //   title: "Drum Kit",
  //   label: ["HTML ", "CSS ", "JavaScript"],
  //   image: drum,
  //   siteLink: "https://joycethh.github.io/project-drumKit/",
  //   codeLink: "https://github.com/joycethh/project-drumKit.git",
  // },
  //   {
  //     title: "Tin Dog",
  //     label: ["HTML ", "CSS", "Bootstrap"],
  //     image: tindog,
  //     siteLink: "https://joycethh.github.io/project-tindog/",
  //     codeLink: "https://github.com/joycethh/project-tindog.git",
  //   },
];

export default projectData;
