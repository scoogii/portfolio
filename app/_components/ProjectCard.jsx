import { Box, Chip, Divider } from "@mui/joy";
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

  const colours = {
    Python: "#ffe15f",
    JavaScript: "#f7e018",
    NextJS: "#2a53a9",
    ReactJS: "#58c4dc",
    Flask: "#4cb1c3",
    PostgreSQL: "#336791",
    Docker: "#1d63ed",
    Java: "#f0931c",
    JUnit: "#c60000",
  };

  return (
    <Box className={styles.projectBox} sx={cardStyle}>
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
          justifyContent: "start",
          alignItems: "center",
          width: "100%",
          height: "100%",
          padding: "10px",
        }}
      >
        {languages.concat(technologies).length > 2 && (
          <Box className={styles.carousel}>
            <Box className={styles.group}>
              {languages.concat(technologies).map((tech, index) => (
                <Chip
                  key={index}
                  sx={{
                    bgcolor: colours[tech],
                    color: "#161717",
                    font: "inherit",
                  }}
                >
                  {tech}
                </Chip>
              ))}
            </Box>
          </Box>
        )}

        {languages.concat(technologies).length <= 2 && (
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              padding: "10px",
            }}
          >
            {languages.concat(technologies).map((tech, index) => (
              <Chip
                key={index}
                sx={{
                  bgcolor: colours[tech],
                  color: "#161717",
                  font: "inherit",
                }}
              >
                {tech}
              </Chip>
            ))}
          </Box>
        )}

        <Box>{description}</Box>
      </Box>
    </Box>
  );
};

export default ProjectCard;
