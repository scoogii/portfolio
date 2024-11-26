import { Box } from "@mui/joy";

const SampleBox = ({ id, colour }) => {
  const boxStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "15%",
    height: "100%",
    background: colour,
    borderRadius: "12px",
  };

  return (
    <Box sx={boxStyle}>
      <h1>{id}</h1>
    </Box>
  );
};

export default SampleBox;
