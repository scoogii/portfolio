import { Box, Button, Dropdown, Menu, MenuButton, MenuItem } from "@mui/joy";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";

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
    display: { xs: "none", sm: "auto" },
  };

  const menuButtonStyle = {
    marginLeft: "-15px",
    ":hover": {
      background: "#354a75",
    },
  };

  const menuStyle = {
    background: "#2b3c5e",
    border: "1px solid #1a2438",
  };

  const menuItemStyle = {
    color: "white",
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

      <Dropdown>
        <MenuButton variant="plain" size="lg" sx={menuButtonStyle}>
          <MenuIcon sx={{ color: "white" }} />
        </MenuButton>

        <Menu variant="plain" sx={menuStyle}>
          <MenuItem sx={menuItemStyle} href="/">
            Home
          </MenuItem>
          <MenuItem sx={menuItemStyle} href="/projects">
            Projects
          </MenuItem>
          <MenuItem sx={menuItemStyle} href="/misc">
            Misc
          </MenuItem>
        </Menu>
      </Dropdown>
    </Box>
  );
};

export default Nav;
