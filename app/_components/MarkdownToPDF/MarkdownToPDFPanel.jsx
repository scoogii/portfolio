import { Box } from "@mui/joy";
import styles from "../../page.module.css";

const MarkdownToPDFPanel = () => {
  const boxStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  };

  return (
    <Box className={styles.loading} sx={boxStyle}>
      <h1>WIP 🚧</h1>
    </Box>
  );
};

export default MarkdownToPDFPanel;
