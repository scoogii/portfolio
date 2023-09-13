import { Box, Button } from "@mui/joy";

const Nav = () => {
  const navStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "left",
    alignItems: "center",
    width: "100vw",
    height: "6vh",
    background: "#2b3c5e",
    borderBottom: "5px solid #1a2438",
    position: "fixed",
    top: 0,
    paddingLeft: { lg: "30px" },
    gap: { lg: "30px" },
  };

  const navButtonStyle = {
    background: "transparent",
    ":hover": {
      background: "#354a75",
      transform: "scale(1.2)",
    },
  };

  return (
    <Box sx={navStyle}>
      <h2>Christian&apos;s Portfolio</h2>
      <Button sx={navButtonStyle}>About Me</Button>
      <Button sx={navButtonStyle}>My Projects</Button>
      <Button sx={navButtonStyle}>Misc</Button>
    </Box>
  );
};

export default Nav;
