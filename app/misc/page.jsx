import { Box } from "@mui/joy";
import styles from "../page.module.css";
import Nav from "../_components/Nav";

const Misc = () => {
  const tempStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: "70px",
  };

  return (
    <>
      <main className={styles.main}>
        <Nav />
        <Box className={styles.loading} sx={tempStyle}>
          WIP
        </Box>
      </main>
    </>
  );
};

export default Misc;
