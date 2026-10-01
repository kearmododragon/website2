import stubsaverImage from "../assets/projects/stubsaver.png";
import tamagotchiImage from "../assets/projects/tamagotchi.png";
import triviaImage from "../assets/projects/trivia.png";
import concentrationImage from "../assets/projects/concentration.png";
import competitiveHolidayingImage from "../assets/projects/holiday.png";

const projects = [
  {
    title: "StubSaver",
    description: "Penultimate project from my course. Save your tickets and event information.",
    image: stubsaverImage,
    technologies: ["Python", "Django", "PostgreSQL", "Bulma", "HTML", "CSS"], liveUrl: "https://stubsaver.herokuapp.com/",
    githubUrl: "https://github.com/tpett20/StubSaver"
  },

  {
    title: "Tamagotchi 2026",
    description: "Tamagotchi game I built in 2026. try to keep your pet alive as long as you can.",
    image: tamagotchiImage,
    technologies: ["JavaScript", "HTML", "CSS"],
    liveUrl: "https://kearmododragon.github.io/Tamagotchi-2025/",
    githubUrl: "https://github.com/kearmododragon/Tamagotchi-2025"
  },

  {
    title: "Trivia Game 2026",
    description: "A quiz game based on the british tv game *Bamboozled*",
    image: triviaImage,
    technologies: ["JavaScript", "HTML", "CSS"],
    liveUrl: "https://kearmododragon.github.io/Trivia-Game-2025/",
    githubUrl: "https://github.com/kearmododragon/Trivia-Game-2025"
  },

  {
    title: "Concentration Game",
    description: "Remember the card you turned over and find it's pair.",
    image: concentrationImage,
    technologies: ["JavaScript", "HTML", "CSS"],
    liveUrl: "https://kearmododragon.github.io/Concentration-game-2025/",
    githubUrl: "https://github.com/kearmododragon/Concentration-game-2025"
  },
  {
    title: "Competitive Holidaying",
    description: "A full-stack holiday planning application where users can create, compare and manage competitive holiday itineraries.",
    image: competitiveHolidayingImage,
    technologies: ["Python", "Django", "PostgreSQL", "Bootstrap", "HTML", "CSS"],
    liveUrl: "https://holiday-project-gnt6.onrender.com/",
    githubUrl: "https://github.com/kearmododragon/final-project"
  }
];

export default projects;