import { Box } from "@mui/joy";

const SampleBox = ({ id, colour, option, min, max, height }) => {
  const boxStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: option.includes("row") ? min : max,
    height: height,
    minHeight: option === "stretch" ? "100%" : "0",
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
