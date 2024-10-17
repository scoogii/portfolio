import { Box, Button } from "@mui/joy";

const Nav = () => {
  const navStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "70px",
    background: "#2b3c5e",
    borderBottom: "5px solid #1a2438",
    position: "fixed",
    top: 0,
    padding: "30px",
    gap: { lg: "30px" },
  };

  const navButtonStyle = {
    background: "transparent",
    ":hover": {
      background: "#354a75",
      transform: "scale(1.1)",
    },
  };

  return (
    <Box sx={navStyle}>
      <Button sx={navButtonStyle}>About Me</Button>
      <Button sx={navButtonStyle}>My Projects</Button>
      <Button sx={navButtonStyle}>Misc</Button>
    </Box>
  );
};

export default Nav;
