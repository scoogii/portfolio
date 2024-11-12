import { Box, Grid } from "@mui/joy";
import Nav from "../_components/Nav";
import ProjectCard from "../_components/ProjectCard";

const projects = [
  {
    name: "NBAdle",
    languages: ["Python", "JavaScript"],
    technologies: ["NextJS", "Flask"],
    description: "NBAdle",
  },
  {
    name: "ColleX",
    languages: ["Python", "JavaScript"],
    technologies: ["NextJS", "Flask", "PostgreSQL", "Docker"],
    description: "ColleX",
  },
  {
    name: "LoopMania",
    languages: ["Java"],
    technologies: ["JUnit"],
    description: "LoopMania",
  },
  {
    name: "AirBrb",
    languages: ["Javascript"],
    technologies: ["ReactJS"],
    description: "AirBrb",
  },
  {
    name: "Flockr",
    languages: ["Python"],
    technologies: ["Flask"],
    description: "Flockr",
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
          <ProjectCard
            name="NBAdle"
            image="nbadle_app.png"
            languages="JavaScript"
            technologies="NextJS"
            description="Testing"
          />
          <ProjectCard
            name="ColleX"
            image="colleX_app.png"
            languages="JavaScript"
            technologies="NextJS"
            description="Testing"
          />
          <ProjectCard
            name="AirBrb"
            image="airbrb_app.png"
            languages="JavaScript"
            technologies="NextJS"
            description="Testing"
          />
          <ProjectCard
            name="LoopMania"
            image="loopmania_app.png"
            languages="JavaScript"
            technologies="NextJS"
            description="Testing"
          />
          <ProjectCard
            name="Flockr"
            image="flockr_app.png"
            languages="Python"
            technologies="Flask"
            description="Testing"
          />
        </Grid>
      </Box>
    </>
  );
};

export default Projects;
