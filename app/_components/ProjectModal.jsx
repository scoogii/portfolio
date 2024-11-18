import { Box, Button, Divider, Modal } from "@mui/joy";
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
  description,
  longDescription,
  link,
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
    padding: "20px",
    background: "#1a2438",
    border: "2px solid #2b3c5e",
    borderRadius: "12px",
    overflowX: "hidden",
    overflowY: "auto",
    outline: "none",
  };

  const gitButtonStyle = {
    background: "transparent",
    ":hover": {
      bgcolor: "#e8e8e8",
      color: "black",
      transform: "scale(1.05)",
    },
    width: "50px",
  };

  return (
    <Modal
      open={isOpen}
      onClose={() => {
        setIsOpen(false);
      }}
      sx={modalStyle}
    >
      <Box sx={boxStyle}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <h1>{name}</h1>

          {link.includes("github") && (
            <Button
              component={Link}
              sx={gitButtonStyle}
              href={link}
              target="_blank"
            >
              <GitHubIcon fontSize="large" />
            </Button>
          )}

          {link.includes("nbadle") && (
            <Button
              component={Link}
              sx={gitButtonStyle}
              href={link}
              target="_blank"
            >
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
            margin: "10px",
          }}
        />
      </Box>
    </Modal>
  );
};

export default ProjectModal;
