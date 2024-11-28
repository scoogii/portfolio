import { Box, Input } from "@mui/joy";
import SampleItemBox from "./SampleItemBox";
import { useState } from "react";

const FlexBasis = ({ headingStyle, groupStyle }) => {
  const [option1, setOption1] = useState({ flexBasis: "50%", flexGrow: 1 });
  const [option2, setOption2] = useState({ flexBasis: "50%", flexGrow: 1 });

  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    minHeight: "100px",
    border: "1px solid #2b3c5e",
    borderRadius: "12px",
    padding: "10px",
    marginBottom: "30px",
    gap: "10px",
  };

  const inputStyle = {
    width: "70px",
    fontSize: "13pt",
    background: "transparent",
    border: "2px solid #2b3c5e",
    color: "white",
  };

  const optionContainerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <>
      <h3 style={headingStyle}>flex-basis</h3>

      <Box sx={groupStyle} style={{ gap: "20px" }}>
        <Box sx={optionContainerStyle}>
          <h3>Item 2 %</h3>
          <Input
            type="number"
            defaultValue={parseInt(option1["flexBasis"])}
            slotProps={{
              input: {
                min: 0,
                step: 1,
              },
            }}
            sx={inputStyle}
            onChange={(e) => {
              setOption1({ flexBasis: `${e.target.value}%`, flexGrow: 1 });
            }}
          />
        </Box>

        <Box sx={optionContainerStyle}>
          <h3>Item 2 %</h3>
          <Input
            type="number"
            defaultValue={parseInt(option2["flexBasis"])}
            slotProps={{
              input: {
                min: 0,
                step: 1,
              },
            }}
            sx={inputStyle}
            onChange={(e) => {
              setOption2({ flexBasis: `${e.target.value}%`, flexGrow: 1 });
            }}
          />
        </Box>
      </Box>

      <Box sx={containerStyle}>
        <SampleItemBox
          id="1"
          colour="#eb4034"
          option={option1}
          min="100%"
          height="100%"
        />
        <SampleItemBox
          id="2"
          colour="#4c60e0"
          option={option2}
          min="100%"
          height="100%"
        />
      </Box>
    </>
  );
};

export default FlexBasis;
