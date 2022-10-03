import memory from "../images/memory.png";
import workout from "../images/workout.png";
import blog from "../images/blog.png";
import note from "../images/note.png";
import mui from "../images/mui.png";
import simongame from "../images/simongame.png";
// import drum from "../images/drum.jpg";
// import tindog from "../images/tindog.png";

const projectData = [
  {
    title: "Memo",
    label: [
      "React",
      "Redux",
      "Mongoose ",
      "Express",
      "NodeJs ",
      "Google Oauth",
    ],
    description:
      "A social media web app using CRUD princinples that allows users to create, update and delete posts. ",
    image: memory,
    siteLink: "https://share-memory-monent.netlify.app",
    codeLink: "https://github.com/joycethh/memory-server.git",
  },
  {
    title: "Blog",
    label: ["Json Server ", "React "],
    description:
      "This blog web app uses react for the front and fake REST API with json server.",
    image: blog,
    siteLink: "https://json-server-blog.netlify.app",
    codeLink: "https://github.com/joycethh/json-server-blog-project.git",
  },
  {
    title: "Workout",
    label: ["Authentication", "Mern"],
    description:
      "It is a MERN app using MongoDB cluster, Express, React, Node JS technologies. And a local authentication added.",
    image: workout,
    siteLink: "https://workout-tracking.netlify.app/",
    codeLink: "https://github.com/joycethh/workout-frontend.git",
  },
  {
    title: "Note",
    label: ["React", "Mongoose"],
    description:
      "It is a light weight MERN web app that allow users to create and delete posts.",
    image: note,
    siteLink: "https://mern-keep-notes.netlify.app/",
    codeLink: "https://github.com/joycethh/note-server.git",
  },
  {
    title: "Frontend",
    label: ["React", "JavaScript", "MUI5"],
    description: "a static react website uses Material UI css library. ",
    image: mui,
    siteLink: "https://mui-client-side-project.netlify.app/",
    codeLink: "https://github.com/joycethh/mui-practice",
  },
  {
    title: "Simon Game",
    label: ["HTML ", "CSS", "JavaScript"],
    description: "Simon game built with javascript, html and css",
    image: simongame,
    siteLink: "https://joycethh.github.io/project-simon-game/",
    codeLink: "https://github.com/joycethh/project-simon-game",
  },
  //   {
  //     title: "Drum Kit",
  //     label: ["HTML ", "CSS ", "JavaScript"],
  //     image: drum,
  //     siteLink: "https://joycethh.github.io/project-drumKit/",
  //     codeLink: "https://github.com/joycethh/project-drumKit.git",
  //   },
  //   {
  //     title: "Tin Dog",
  //     label: ["HTML ", "CSS", "Bootstrap"],
  //     image: tindog,
  //     siteLink: "https://joycethh.github.io/project-tindog/",
  //     codeLink: "https://github.com/joycethh/project-tindog.git",
  //   },
];

export default projectData;
