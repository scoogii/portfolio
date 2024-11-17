import { Box, Grid } from "@mui/joy";
import Nav from "../_components/Nav";
import ProjectCard from "../_components/ProjectCard";

const projects = [
  {
    name: "NBAdle",
    languages: ["Python", "JavaScript"],
    technologies: ["NextJS", "Flask"],
    description:
      "NBA player guessing game similar to the likes of New York Times' Wordle.",
    longDescription: "asdhaksdhjahdskahdhdakshjdkhakdhda",
    link: "https://www.nbadle.com/",
  },
  {
    name: "ColleX",
    languages: ["Python", "JavaScript"],
    technologies: ["NextJS", "Flask", "PostgreSQL", "Docker"],
    description: "Woolworths/Coles collectibles exchange and marketplace.",
    longDescription: "asdhaksdhjahdskahdhdakshjdkhakdhda",
    link: "https://github.com/scoogii/collex",
  },
  {
    name: "LoopMania",
    languages: ["Java"],
    technologies: ["JUnit"],
    description: "Clone of the popular game LoopHero.",
    longDescription: "asdhaksdhjahdskahdhdakshjdkhakdhda",
    link: "",
  },
  {
    name: "AirBrb",
    languages: ["JavaScript"],
    technologies: ["ReactJS"],
    description:
      "Platform for booking/hosting homestays and experiences similar to Airbnb.",
    longDescription: "asdhaksdhjahdskahdhdakshjdkhakdhda",
    link: "https://github.com/scoogii/airbrb",
  },
  {
    name: "Flockr",
    languages: ["Python"],
    technologies: ["Flask", "pytest"],
    description:
      "Messaging and productivity platform based off of the Flock app.",
    longDescription: "asdhaksdhjahdskahdhdakshjdkhakdhda",
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
