import { Box, Divider } from "@mui/joy";

const FlexPlaygroundPanel = () => {
  const boxStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
    width: "100%",
    height: "100%",
  };

  const contentStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    border: "1px solid #2b3c5e",
    borderRadius: "14px",
    padding: "10px",
    gap: "10px",
  };

  return (
    <Box sx={boxStyle}>
      <h1 style={{ textAlign: "center" }}>Flexbox Playground</h1>

      <Divider sx={{ background: "#2b3c5e", margin: "10px 0 20px" }} />

      <h2 style={{ textAlign: "center" }}>Flex Container Properties</h2>
      <Box sx={contentStyle} style={{ marginBottom: "30px" }}></Box>

      <h2 style={{ textAlign: "center" }}>Flex Item Properties</h2>
      <Box sx={contentStyle}></Box>
    </Box>
  );
};

export default FlexPlaygroundPanel;
