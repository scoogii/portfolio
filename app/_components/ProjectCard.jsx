import { Box, Button, Divider } from "@mui/joy";
import styles from "../page.module.css";

const ProjectCard = ({ name, image, languages, technologies, description }) => {
  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
    width: { xs: "280px", sm: "265px", md: "270px", lg: "300px" },
    height: { xs: "350px", sm: "330px", md: "350px", lg: "400px" },
    border: "2px solid #2b3c5e",
    background: "#1a2438",
    borderRadius: "14px",
    padding: "10px",
  };

  const readButtonStyle = {
    width: { xs: "180px", lg: "200px" },
    height: { xs: "50px", lg: "60px" },
    background: "#2b3c5e",
    borderRadius: "10px",
    ":hover": {
      background: "#354a75",
      transform: "scale(1.1)",
    },
  };

  return (
    <Box sx={cardStyle}>
      <h2>{name}</h2>

      <Divider sx={{ background: "#2b3c5e", margin: "10px 0 10px" }} />

      <Box
        component="img"
        src={image}
        alt="project image"
        sx={{
          width: { xs: "260px", sm: "240px", md: "250px", lg: "285px" },
          borderRadius: "12px",
        }}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",

          width: "100%",
          height: "100%",
        }}
      >
        <Button sx={readButtonStyle}>Read More</Button>
      </Box>
    </Box>
  );
};

export default ProjectCard;
