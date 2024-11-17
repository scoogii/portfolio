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
  },
  {
    name: "ColleX",
    languages: ["Python", "JavaScript"],
    technologies: ["NextJS", "Flask", "PostgreSQL", "Docker"],
    description: "Woolworths/Coles collectibles exchange and marketplace.",
  },
  {
    name: "LoopMania",
    languages: ["Java"],
    technologies: ["JUnit"],
    description: "Clone of the popular game LoopHero.",
  },
  {
    name: "AirBrb",
    languages: ["JavaScript"],
    technologies: ["ReactJS"],
    description:
      "Platform for booking/hosting homestays and experiences similar to Airbnb.",
  },
  {
    name: "Flockr",
    languages: ["Python"],
    technologies: ["Flask", "pytest"],
    description:
      "Messaging and productivity platform based off of the Flock app.",
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
              image={`/public/${project.name}_app.png`}
              languages={project.languages}
              technologies={project.technologies}
              description={project.description}
            />
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Projects;
