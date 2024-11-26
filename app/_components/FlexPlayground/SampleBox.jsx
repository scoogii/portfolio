import { Box } from "@mui/joy";

const SampleBox = ({ id, colour, option }) => {
  const boxStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: option.includes("row") ? "15%" : "100%",
    height: "100%",
    background: colour,
    borderRadius: "12px",
  };

  return (
    <Box sx={boxStyle}>
      <h2>{id}</h2>
    </Box>
  );
};

export default SampleBox;
