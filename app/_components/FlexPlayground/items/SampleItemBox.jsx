import { Box } from "@mui/joy";

const SampleItemBox = ({ id, colour, option, min, height }) => {
  const boxStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: min,
    minHeight: height,
    background: colour,
    borderRadius: "12px",
  };

  return (
    <Box sx={boxStyle} style={option}>
      <h2>{id}</h2>
    </Box>
  );
};

export default SampleItemBox;
