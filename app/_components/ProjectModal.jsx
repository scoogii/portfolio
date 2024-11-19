import {
  Box,
  Button,
  Chip,
  Divider,
  Modal,
  ModalClose,
  ModalDialog,
} from "@mui/joy";
import GitHubIcon from "@mui/icons-material/GitHub";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import Link from "next/link";

const ProjectModal = ({
  isOpen,
  setIsOpen,
  name,
  image,
  languages,
  technologies,
  longDescription,
  link,
  colours,
}) => {
  const modalStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "Center",
    alignItems: "center",
  };

  const boxStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
    width: { xs: "300px", sm: "500px", md: "700px", lg: "800px" },
    height: { xs: "500px", sm: "600px", md: "700px", lg: "700px" },
    padding: { xs: "50px 20px 20px 20px", lg: "50px 20px 20px 20px" },
    background: "#141a27",
    border: "3px solid #2b3c5e",
    borderRadius: "12px",
    overflowX: "hidden",
    overflowY: "auto",
    outline: "none",
    color: "white",
    font: "inherit",
  };

  const linkStyle = {
    background: "transparent",
    ":hover": {
      bgcolor: "#c7c5c5",
      color: "black",
      transform: "scale(1.05)",
    },
    width: "50px",
    height: "20px",
  };

  const contentStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
    width: "100%",
    height: "100%",
    padding: "10px",
    border: "2px solid #2b3c5e",
    borderRadius: "12px",
    gap: "10px",
    overflow: "auto",
  };

  const stackContainerStyle = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "start",
    alignItems: "center",
    gap: "10px",
  };

  const descriptionStyle = {
    display: "block",
    width: "95%",
    marginTop: "10px",
    lineHeight: 1.3,
  };

  return (
    <Modal
      open={isOpen}
      onClose={() => {
        setIsOpen(false);
      }}
      sx={modalStyle}
    >
      <ModalDialog sx={boxStyle}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            margin: "-10px",
          }}
        >
          <ModalClose
            size="lg"
            sx={{
              ":hover": {
                background: "transparent",
                color: "#db2130",
                transform: "scale(1.2)",
              },
            }}
          />

          <h1>{name}</h1>

          {link.includes("github") && (
            <Button component={Link} sx={linkStyle} href={link} target="_blank">
              <GitHubIcon fontSize="large" />
            </Button>
          )}

          {link.includes("nbadle") && (
            <Button component={Link} sx={linkStyle} href={link} target="_blank">
              <SportsBasketballIcon fontSize="large" />
            </Button>
          )}
        </Box>

        <Divider sx={{ background: "#2b3c5e", margin: "10px 0 10px" }} />

        <Box
          component="img"
          src={image}
          alt={image}
          sx={{
            width: { xs: "250px", sm: "350px", md: "450px", lg: "500px" },
            borderRadius: "12px",
            marginBottom: "15px",
          }}
        />

        <Box sx={contentStyle}>
          <Box sx={stackContainerStyle}>
            <span style={{ fontWeight: "bold" }}>Languages: </span>

            {languages.map((language, index) => (
              <Chip
                key={index}
                sx={{
                  bgcolor: colours[language],
                  color: "#161717",
                  font: "inherit",
                }}
              >
                {language}
              </Chip>
            ))}
          </Box>

          <Box sx={stackContainerStyle}>
            <span style={{ fontWeight: "bold" }}>Technologies: </span>

            {technologies.map((tech, index) => (
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

          <Box sx={descriptionStyle}>{longDescription}</Box>
        </Box>
      </ModalDialog>
    </Modal>
  );
};

export default ProjectModal;
