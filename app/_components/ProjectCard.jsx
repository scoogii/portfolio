"use client";

import { Box, Button, Chip, Divider } from "@mui/joy";
import styles from "../page.module.css";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

const ProjectCard = ({
  name,
  image,
  languages,
  technologies,
  description,
  longDescription,
  link,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const colours = {
    Python: "#ffe15f",
    JavaScript: "#f7e018",
    NextJS: "#2a53a9",
    ReactJS: "#58c4dc",
    "React Native": "#61dafb",
    Expo: "#edeef0",
    ExpressJS: "#8cc141",
    SQLite: "#238cd2",
    Flask: "#4cb1c3",
    PostgreSQL: "#336791",
    Docker: "#1d63ed",
    Java: "#f0931c",
    JUnit: "#c60000",
    pytest: "#08a2e4",
    pandas: "#e70488",
  };

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
    font: "inherit",
    ":hover": {
      background: "transparent",
    },
  };

  const descriptionStyle = {
    display: { xs: "inline-block", md: "flex" },
    flexDirection: { md: "column" },
    justifyContent: { md: "center" },
    alignItems: { md: "center" },
    textAlign: "center",
    width: { xs: "250px", lg: "270px" },
    height: { xs: "55px", md: "70px", lg: "90px" },
    overflow: { xs: "hidden", md: "auto" },
    whiteSpace: { xs: "nowrap", md: "normal" },
    textOverflow: "ellipsis",
    border: "2px solid #2b3c5e",
    borderRadius: "12px",
    padding: { xs: "15px", md: "5px", lg: "10px" },
    marginTop: "10px",
  };

  const handleProjectClick = () => {
    setIsOpen(true);
  };

  return (
    <>
      <ProjectModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        name={name}
        image={image}
        languages={languages}
        technologies={technologies}
        longDescription={longDescription}
        link={link}
        colours={colours}
      />
      <Button
        className={styles.projectBox}
        sx={cardStyle}
        onClick={() => {
          handleProjectClick();
        }}
      >
        <h2>{name}</h2>

        <Divider sx={{ background: "#2b3c5e", margin: "10px 0 10px" }} />

        <Box
          component="img"
          src={image}
          alt={image}
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
              <div className={styles.group}>
                {languages.concat(technologies).map((tech, index) => (
                  <Chip
                    key={index}
                    sx={{
                      bgcolor: colours[tech],
                      color: "#161717",
                      font: "inherit",
                      textAlign: "center",
                    }}
                  >
                    {tech}
                  </Chip>
                ))}
              </div>

              <div aria-hidden className={styles.group}>
                {languages.concat(technologies).map((tech, index) => (
                  <Chip
                    key={index}
                    sx={{
                      bgcolor: colours[tech],
                      color: "#161717",
                      font: "inherit",
                      textAlign: "center",
                    }}
                  >
                    {tech}
                  </Chip>
                ))}
              </div>
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
              }}
            >
              {languages.concat(technologies).map((tech, index) => (
                <Chip
                  key={index}
                  sx={{
                    bgcolor: colours[tech],
                    color: "#161717",
                    font: "inherit",
                    textAlign: "center",
                  }}
                >
                  {tech}
                </Chip>
              ))}
            </Box>
          )}

          <Box sx={descriptionStyle}>{description}</Box>
        </Box>
      </Button>
    </>
  );
};

export default ProjectCard;
