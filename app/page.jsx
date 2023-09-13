import { Box } from "@mui/joy";
import styles from "./page.module.css";
import SocialButtons from "./_components/SocialButtons";
import Nav from "./_components/Nav";

export default function Home() {
  const introCardStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    gap: { xs: "25px", sm: "20px", md: "20px", lg: "30px" },
  };

  return (
    <main className={styles.main}>
      <Nav />
      <Box sx={introCardStyle}>
        <h1>Hi! I&apos;m Christian 👋</h1>
        <h3>Expert mestake maker. Black belt in Google.</h3>
        <h4 style={{ fontStyle: "italic" }}>
          &quot;If you don&apos;t have any problems, make your own!&quot;
        </h4>
      </Box>
      <SocialButtons />
    </main>
  );
}
