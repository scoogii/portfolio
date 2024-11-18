import { Box, Button, Divider, Modal, ModalClose, ModalDialog } from "@mui/joy";
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
    padding: { xs: "50px 10px 50px", lg: "50px 20px 50px" },
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
      bgcolor: "#e8e8e8",
      color: "black",
      transform: "scale(1.05)",
    },
    width: "50px",
    height: "20px",
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
          <ModalClose size="lg" />

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
          }}
        />
      </ModalDialog>
    </Modal>
  );
};

export default ProjectModal;
