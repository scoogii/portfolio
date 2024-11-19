import { Box, Grid } from "@mui/joy";
import Nav from "../_components/Nav";
import ProjectCard from "../_components/ProjectCard";

const projects = [
  {
    name: "NBAdle",
    languages: ["Python", "JavaScript"],
    technologies: ["NextJS", "Flask", "pandas"],
    description:
      "NBA player guessing game similar to the likes of New York Times' Wordle.",
    longDescription:
      "This was a pair programming hobby project I started with one of my friends to share our passion in basketball. NBAdle is a game similar to the likes of Wordle, where players would have 8 chances to guess the mystery NBA player given clues such as their player number, age, and team. The backend was built using Python and Flask with the role of retreiving data from unofficial documented endpoints (swar/nba_api). Player data would be stored in a .csv file using Pandas and a random player from this dataframe would be delivered to the frontend. The frontend was built using NextJS for several benefits both in development and client-side. This included the capacity for server-side rendering, hot-reloading in development, and improved SEO to spur further interactions with new users to our game. To this day, www.nbadle.com has consistently reached over 1000 interactions weekly and maintains a 94 Real Experience Score (according to Vercel analytics).",
    link: "https://www.nbadle.com/",
  },
  {
    name: "ColleX",
    languages: ["Python", "JavaScript"],
    technologies: ["NextJS", "Flask", "PostgreSQL", "Docker"],
    description: "Woolworths/Coles collectibles exchange and marketplace.",
    longDescription:
      "ColleX is a Woolworths/Coles collectibles marketplace where users can trade collectibles between one another. On top of this, users with specific rights (i.e. campaign managers) are also able to start campaigns to promote the release of new collectibles from Woolworths/Coles. This project involved implementing features such as listing collectibles for trade, P2P messaging, campaign management, and system administration. The backend was built using Python, Flask, and PostgreSQL to handle business logic while the frontend was built using NextJS for a responsive user experience through server-side rendering.",
    link: "https://github.com/scoogii/collex",
  },
  {
    name: "LoopMania",
    languages: ["Java"],
    technologies: ["JUnit"],
    description: "Clone of the popular game LoopHero.",
    longDescription:
      "LoopMania is a clone of the widely played game LoopHero. It involves the user looping around a tileset where they would fight enemies and eventually finish the game after gaining enough gold and experience. LoopMania was an opportunity to practice applying Object-Oriented Programming principles in game development, leading to the use of various design patterns to effectively dictate the gameplay. Some examples include the Strategy Pattern to depict combat between the user and various types of enemies, and Observer pattern to track the user's progress to finishing the game.",
    link: "",
  },
  {
    name: "AirBrb",
    languages: ["JavaScript"],
    technologies: ["ReactJS"],
    description:
      "Platform for booking/hosting homestays and experiences similar to Airbnb.",
    longDescription:
      "AirBrb is an online platform for booking/hosting homestays and experiences similar to the likes of Airbnb. This was a frontend development project which involved implementing various features such as creating, booking, viewing, browsing, and editing listings. The frontend was built using ReactJS as an accessible introduction to frontend development and data was stored/retrieved from a backend powered by Express.js.",
    link: "https://github.com/scoogii/airbrb",
  },
  {
    name: "Flockr",
    languages: ["Python"],
    technologies: ["Flask", "pytest"],
    description:
      "Messaging and productivity platform based off of the Flock app.",
    longDescription:
      "Flockr is a productivity platform based off the Flock app. It was solely backend development - implementing functionalities for channels, messages, and users of the application. This project was also heavily focused on testing all aspects of the backend using integration and unit testing with pytest. Utilising various features of pytest such as Fixtures to streamline testing allowed the Flockr app to reach close to 100% coverage.",
    link: "https://github.com/scoogii/flockr",
  },
];

const Projects = () => {
  const bodyStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "start",
    padding: "80px",
    minHeight: "100vh",
    height: "100vh",
    gap: "20px",
  };

  const headingStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "40px",
    fontSize: "30px",
  };

  const contentStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "start",
    justifyContent: "center",
    marginTop: "30px",
    width: { xs: "300px", sm: "570px", md: "860px", lg: "1100px" },
    height: { xs: "400px", sm: "550px", md: "650px", lg: "695px" },
    border: "2px solid #2b3c5e",
    borderRadius: "14px",
    padding: "10px",
    gap: "10px",
    overflowY: "auto",
    overflowX: "hidden",
  };

  return (
    <>
      <Box sx={bodyStyle}>
        <Nav />

        <Box sx={headingStyle}>
          <h1>Projects</h1>
        </Box>

        <Grid container sx={contentStyle}>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              name={project.name}
              image={`/images/${project.name}_app.png`}
              languages={project.languages}
              technologies={project.technologies}
              description={project.description}
              longDescription={project.longDescription}
              link={project.link}
            />
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Projects;
