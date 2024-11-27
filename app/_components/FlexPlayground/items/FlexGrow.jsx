import { Box } from "@mui/joy";
import SampleItemBox from "./SampleItemBox";

const FlexGrow = ({ headingStyle, groupStyle }) => {
  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    minHeight: "200px",
    border: "1px solid #2b3c5e",
    borderRadius: "12px",
    padding: "10px",
    marginBottom: "30px",
    gap: "10px",
  };

  return (
    <>
      <h3 style={headingStyle}>flex-grow</h3>

      <Box sx={containerStyle}>
        <SampleItemBox id="1" colour="#eb4034" min="20%" height="100%" />
        <SampleItemBox id="2" colour="#4c60e0" min="20%" height="100%" />
        <SampleItemBox id="3" colour="#5ccf4a" min="20%" height="100%" />
        <SampleItemBox id="4" colour="#f5a35b" min="20%" height="100%" />
        <SampleItemBox id="5" colour="#eb6edc" min="20%" height="100%" />
      </Box>
    </>
  );
};

export default FlexGrow;
