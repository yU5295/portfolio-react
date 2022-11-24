// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
};
// Change your display name on tha landing display
const header = {
  name: "Daniel Ren",
};
const background = {
  // Options: Snow or Particle
  type: "Snow",
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Me";
const about = {
  paragraph:
    "Result-driven Information Technology professional of design-to-development process dedicated to pixel-perfect integrations and a logical, clean and efficient codebase. ",
};
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
  {
    name: "HTML5",
    // svg: '',
    faClass: "fab fa-html5",
  },
  {
    name: "CSS3",
    // svg: '',
    faClass: "fab fa-css3",
  },
  {
    name: "Javascript",
    // svg: '',
    faClass: "fab fa-js",
  },
  {
    name: "SASS",
    // svg: '',
    faClass: "fab fa-sass",
  },
  {
    name: "PHP",
    // svg: '',
    faClass: "fab fa-php",
  },
  {
    name: "Python",
    // svg: '',
    faClass: "fab fa-python",
  },
  {
    name: "React",
    // svg: '',
    faClass: "fab fa-react",
  },
  {
    name: "Vue.js",
    // svg: '',
    faClass: "fab fa-vuejs",
  },
  {
    name: "Angular",
    // svg: '',
    faClass: "fab fa-angular",
  },
  {
    name: "Node.js",
    // svg: '',
    faClass: "fab fa-node",
  },
  {
    name: "Laravel",
    // svg: '',
    faClass: "fab fa-laravel",
  },
  {
    name: "Database",
    // svg: '',
    faClass: "fas fa-database",
  },
  
];
// Edit your projects, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "Past Projects";
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: "project1",
    name: "Enzyme Finance",
    skills: ["Next.js, Tailwind CSS, Node.js"],
    url: "https://enzyme.finance/",
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project2",
    name: "Advanced DeFi Management",
    skills: ["React, styled-components"],
    url: "https://defisaver.com/",
  },
  {
    // Add image in './styles/images.css' in #project3
    id: "project3",
    name: "Trillio-Find your next home",
    skills: ["React, Express.js, Node.js"],
    url: "https://github.com/codpen/real-estate-app",
  },
  {
    // Add image in './styles/images.css' in #project4
    id: "project4",
    name: "Colorful World-ecommerce",
    skills: ["HTML, CSS, JS"],
    url: "https://github.com/codpen/ciceksepeti-eCommerce",
  },
  {
    // Add image in './styles/images.css' in #project5
    id: "project5",
    name: "Ecommerce-store-app",
    skills: ["React Native, Javascript"],
    url: "https://github.com/codpen/shopping-cart-reactnative",
  },
  {
    // Add image in './styles/images.css' in #project6
    id: "project6",
    name: "Sabil-MERN",
    skills: ["React, Material UI, Express.js"],
    url: "https://github.com/codpen/Sabil",
  },
];
// Edit your Miscellaneous Activities, its name and the url.
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
const section4Title = "Miscellaneous";
const miscellaneous = [
  {
    // Add image in './styles/images.css' in #misc1
    id: "misc1",
    name: "Miscellaneous 1",
    url: "https://github.com/kaustubhai",
  },
  {
    // Add image in './styles/images.css' in #misc2
    id: "misc2",
    name: "Miscellaneous 2",
    url: "https://github.com/kaustubhai",
  },
  {
    // Add image in './styles/images.css' in #misc3
    id: "misc3",
    name: "Miscellaneous 3",
    url: "https://github.com/kaustubhai",
  },
];
// Contact form text, and Formspree link(to send a submit contact through their API as in contact.js)
// To get your own jotform link, go to https://formspree.io/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Get in Touch";
const contact = {
  pitch:
    "",
  copyright: "Daniel Ren",
  contactUrl: "",
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
  gmail: "danielren0401@gmail.com",
  github: "https://github.com/codpen",
  linkedin: "https://www.linkedin.com/in/daniel-ren-45427b257/",
  telegram: "https://t.me/Billibear",
  resume: "https://novoresume.com/",
};
// Dont change anything here
export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  miscellaneous,
  contact,
  social,
  section2title,
  section3Title,
  section4Title,
  section5Title,
};
