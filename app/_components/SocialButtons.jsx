import { Box, Button } from "@mui/joy";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import Link from "next/link";

const SocialButtons = () => {
  const socialButtonContainerStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: { xs: "15px", sm: "20px", md: "25px", lg: "30px" },
  };

  const socialButtonStyle = {
    background: "#2b3c5e",
    ":hover": {
      bgcolor: "#e8e8e8",
      color: "black",
      transform: "scale(1.1)",
    },
    width: { md: "55px", lg: "60px" },
    height: { md: "35px", lg: "40px" },
  };

  return (
    <Box sx={socialButtonContainerStyle}>
      <Button
        component={Link}
        variant="contained"
        sx={socialButtonStyle}
        href="https://github.com/scoogii"
        target="_blank"
      >
        <GitHubIcon />
      </Button>
      <Button
        component={Link}
        variant="contained"
        sx={socialButtonStyle}
        href="https://www.linkedin.com/in/christianngu/"
        target="_blank"
      >
        <LinkedInIcon />
      </Button>
      <Button
        component={Link}
        variant="contained"
        sx={socialButtonStyle}
        href="mailto:christian.nguyen6@outlook.com"
        target="_blank"
      >
        <EmailRoundedIcon />
      </Button>
      <Button
        component={Link}
        variant="contained"
        sx={socialButtonStyle}
        href="https://nbadle.com"
        target="_blank"
      >
        <SportsBasketballIcon />
      </Button>
    </Box>
  );
};

export default SocialButtons;
