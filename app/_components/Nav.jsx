import { Box, Button } from "@mui/joy";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";

const Nav = () => {
  const navStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "left",
    alignItems: "center",
    width: "100vw",
    height: "70px",
    background: "#2b3c5e",
    borderBottom: "5px solid #1a2438",
    position: "fixed",
    top: 0,
    padding: "30px",
    gap: { lg: "30px" },
    zIndex: 100,
  };

  const navButtonStyle = {
    background: "transparent",
    ":hover": {
      background: "#354a75",
      transform: "scale(1.1)",
    },
    font: "inherit",
  };

  return (
    <Box sx={navStyle}>
      <Button sx={navButtonStyle} href="/" component={Link}>
        <HomeIcon />
      </Button>
      <Button sx={navButtonStyle} href="/projects" component={Link}>
        Projects
      </Button>
      <Button sx={navButtonStyle} href="/misc" component={Link}>
        Misc
      </Button>
    </Box>
  );
};

export default Nav;
