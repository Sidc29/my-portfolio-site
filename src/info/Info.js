import self from "../img/self.png";
import mock1 from "../img/mock1.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";
import mock4 from "../img/mock4.png";
import mock5 from "../img/mock5.png";
import mock6 from "../img/mock6.png";
import mock7 from "../img/mock7.png";
import mock8 from "../img/mock8.png";
import mock9 from "../img/mock9.png";
import mock10 from "../img/mock10.png";
import mock11 from "../img/mock11.png";
import mock12 from "../img/mock12.png";
import mock13 from "../img/mock13.png";
import mock14 from "../img/mock14.png";

export let colors = ["rgb(230, 194, 137)", "rgb(233, 180, 241)"];

export const info = {
  firstName: "Shiddharth",
  lastName: "Choudhari",
  initials: (
    <span
      style={{
        background: `-webkit-linear-gradient(135deg, ${colors})`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      <i class="fa-solid fa-house-user fa-sm"></i>
    </span>
  ),
  position: "a Full Stack Web Developer",
  selfPortrait: self,
  gradient: `-webkit-linear-gradient(135deg, ${colors})`,
  baseColor: colors[0],
  miniBio: [
    {
      emoji: <i class="fa-solid fa-laptop-code"></i>,
      text: "tech geek",
    },
    {
      emoji: <i class="fa-solid fa-earth-africa"></i>,
      text: "based in Belagavi, Karnataka",
    },
    {
      emoji: <i class="fa-solid fa-user-graduate"></i>,
      text: "graduated in 2022",
    },
    {
      emoji: <i class="fa-solid fa-envelope"></i>,
      text: "sidc29@protonmail.com",
    },
  ],
  socials: [
    {
      link: "https://instagram.com/siddhugriffin",
      icon: "fa-brands fa-instagram",
      label: "instagram",
    },
    {
      link: "https://github.com/sidc29",
      icon: "fa-brands fa-github",
      label: "github",
    },
    {
      link: "https://www.linkedin.com/in/shiddharth-choudhari-aaa22b260/",
      icon: "fa-brands fa-linkedin",
      label: "linkedin",
    },
  ],
  bio: "Hello, I'm Shiddharth, a fresher full stack web developer with a strong foundation in front-end and back-end technologies and a passion for building high-quality web applications.",
  skills: {
    proficientWith: [
      "html5",
      "css",
      "javascript",
      "node.js",
      "express.js",
      "html5",
      "ejs",
      "rest api",
      "react.js",
      "redux toolkit",
      "bootstrap 4",
      "tailwind css",
      "sql",
      "mongodb",
      "python 3",
      "wordpress",
    ],
    exposedTo: ["git", "github", "postman", "ms office", "studio 3t"],
  },
  hobbies: [
    {
      label: "coding",
      emoji: <i class="fa-solid fa-code"></i>,
    },
    {
      label: "trading",
      emoji: <i class="fa-solid fa-chart-line"></i>,
    },
    {
      label: "geopolitcs",
      emoji: <i class="fa-solid fa-globe"></i>,
    },
    {
      label: "movies",
      emoji: <i class="fa-solid fa-film"></i>,
    },
    {
      label: "sports",
      emoji: <i class="fa-solid fa-table-tennis-paddle-ball"></i>,
    },
    {
      label: "problem solving",
      emoji: <i class="fa-solid fa-puzzle-piece"></i>,
    },
  ],
  languages: [
    {
      label: "english",
      emoji: <i class="fa fa-language" aria-hidden="true"></i>,
    },
    {
      label: "hindi",
      emoji: <i class="fa fa-language" aria-hidden="true"></i>,
    },
    {
      label: "marathi",
      emoji: <i class="fa fa-language" aria-hidden="true"></i>,
    },
    {
      label: "kannada",
      emoji: <i class="fa fa-language" aria-hidden="true"></i>,
    },
    {
      label: "pattegar",
      emoji: <i class="fa fa-language" aria-hidden="true"></i>,
    },
    {
      label: "spanish",
      emoji: <i class="fa fa-language" aria-hidden="true"></i>,
    },
  ],
  resume: [
    {
      label: "my Résumé",
      emoji: <i class="fa-solid fa-download"></i>,
    },
  ],
  portfolio: [
    {
      title: "MovieMan - Browse Movies (MERN Stack)",
      live: "https://movieman.vercel.app/",
      source: "https://github.com/Sidc29/movieman-full-stack",
      image: mock14,
    },
    {
      title: "Dynamic Chart Plotting (MERN Stack)",
      live: "https://dynamic-charts.vercel.app/",
      source: "https://github.com/Sidc29/Dynamic-Charts-React",
      image: mock13,
    },
    {
      title: "TaskMan - A Complete Task Manager (with Dark Mode)",
      live: "https://task-man-v2.vercel.app/",
      source: "https://github.com/Sidc29/TaskMan-v2",
      image: mock12,
    },
    {
      title: "Store RESTful API with Sorting, Filtering, Pagination",
      live: "https://store-rest-api-qo9n.onrender.com/",
      source: "https://github.com/Sidc29/Store-Restful-API",
      image: mock11,
    },
    {
      title: "Task Manager REST API",
      live: "https://task-manager-api-3je8.onrender.com/",
      source: "https://github.com/Sidc29/task-manager-rest-api",
      image: mock10,
    },
    {
      title: "User Authentication using Passport.js (Node.js)",
      live: "https://anosec-passport-js-authentication.onrender.com/",
      source:
        "https://github.com/Sidc29/AnoSec---Authentication-using-Passport.js",
      image: mock9,
    },
    {
      title: "Web3 Decentralised Note Keeping App (React DApp)",
      live: "https://riotp-viaaa-aaaan-qcx4a-cai.ic0.app/",
      source: "https://github.com/Sidc29/notekeeper-DApp",
      image: mock1,
    },
    {
      title: "Shiba Image Generator (Node.js)",
      live: "https://shiba-image-generator.onrender.com/",
      source: "https://github.com/Sidc29/shiba-image-generator-nodejs",
      image: mock2,
    },
    {
      title: "Strong Password Generator (Node.js)",
      live: "https://password-generator-5uaw.onrender.com/",
      source: "https://github.com/Sidc29/password-generator-nodejs-ejs",
      image: mock3,
    },
    {
      title: "ToDo List App (React.js)",
      live: "https://advanced-to-do-app.vercel.app/",
      source: "https://github.com/Sidc29/advanced-to-do-app-react",
      image: mock4,
    },
    {
      title: "ToDo List App (Node.js)",
      live: "https://advanced-to-do-app.onrender.com/",
      source: "https://github.com/Sidc29/advanced-todo-app-nodejs-ejs",
      image: mock5,
    },
    {
      title: "Simple Calculator (JS)",
      live: "https://sidc29.github.io/complete-calculator-JS/",
      source: "https://github.com/Sidc29/complete-calculator-JS",
      image: mock6,
    },
    {
      title: "Simple Dice Game (JS)",
      live: "https://sidc29.github.io/simple-dice-game-JS/",
      source: "https://github.com/Sidc29/simple-dice-game-JS",
      image: mock7,
    },
    {
      title: "Simple Drum-Kit (JS)",
      live: "https://sidc29.github.io/drum-kit-JS/",
      source: "https://github.com/Sidc29/drum-kit-JS",
      image: mock8,
    },
  ],
};
