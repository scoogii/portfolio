import { Box } from "@mui/joy";
import Nav from "../_components/Nav";

const projects = {
  NBAdle: {
    languages: ["Python", "JavaScript"],
    technologies: ["NextJS", "Flask"],
    description: "NBAdle",
  },
  ColleX: {
    languages: ["Python", "JavaScript"],
    technologies: ["NextJS", "Flask", "PostgreSQL", "Docker"],
    description: "ColleX",
  },
  LoopMania: {
    languages: ["Java"],
    technologies: ["JUnit"],
    description: "LoopMania",
  },
  AirBrB: {
    languages: ["Javascript"],
    technologies: ["ReactJS"],
    description: "AirBrB",
  },
  Flockr: {
    languages: ["Python"],
    technologies: ["Flask"],
    description: "Flockr",
  },
};

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
    flexFlow: "column wrap",
    alignItems: "start",
    justifyContent: "start",
    marginTop: "30px",
    width: { xs: "300px", sm: "550px", md: "850px", lg: "950px" },
    height: { xs: "400px", sm: "90%" },
    border: "2px solid #2b3c5e",
    borderRadius: "14px",
    padding: "10px",
    overflow: "scroll",
  };

  return (
    <>
      <Box sx={bodyStyle}>
        <Nav />
        <Box sx={headingStyle}>
          <h1>Projects</h1>
        </Box>

        <Box sx={contentStyle}>Hi</Box>
      </Box>
    </>
  );
};

export default Projects;
