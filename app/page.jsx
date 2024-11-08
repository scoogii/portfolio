import { Box, Button, Tooltip } from "@mui/joy";
import styles from "./page.module.css";
import SocialButtons from "./_components/SocialButtons";
import Nav from "./_components/Nav";
import Link from "next/link";

export default function Home() {
  const introCardStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    gap: { xs: "25px", sm: "20px", md: "20px", lg: "30px" },
  };

  const nameButtonStyle = {
    background: "transparent",
    padding: "5px",
    color: "inherit",
    font: "inherit",
    ":hover": {
      background: "transparent",
      transition: "all 200ms ease-in",
      transform: "scale(1.1)",
    },
  };

  return (
    <main className={styles.main}>
      <Nav />
      <Box sx={introCardStyle}>
        <div
          style={{
            clear: "both",
            display: "flex",
            gap: "15px",
          }}
        >
          <h1 style={{ float: "left" }}>
            Hi! I&apos;m{" "}
            <Tooltip title="Download my resume!" arrow sx={{ font: "inherit" }}>
              <Button sx={nameButtonStyle} href="/" component={Link}>
                Christian
              </Button>
            </Tooltip>
          </h1>
          <h1 className={styles.rotate} style={{ float: "right" }}>
            👋
          </h1>
        </div>
        <h3>Hobby mestake maker. Black belt in Google.</h3>
        <h4 style={{ fontStyle: "italic" }}>
          &quot;If you don&apos;t have any problems, make your own!&quot;
        </h4>
      </Box>
      <SocialButtons />
    </main>
  );
}
