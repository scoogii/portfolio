import { Box, Radio, RadioGroup } from "@mui/joy";
import SampleBox from "../SampleBox";
import { useState } from "react";

const FlexDirection = ({ headingStyle, groupStyle }) => {
  const [option, setOption] = useState("row");

  const handleChange = (e) => {
    setOption(e.target.value);
  };

  const containerStyle = {
    display: "flex",
    flexDirection: option,
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    minHeight: "100px",
    border: "1px solid #2b3c5e",
    borderRadius: "12px",
    padding: "10px",
    marginBottom: "20px",
    gap: "10px",
  };

  return (
    <>
      <h3 style={headingStyle}>flex-direction</h3>
      <RadioGroup
        value={option}
        orientation="horizontal"
        sx={groupStyle}
        onChange={(e) => {
          handleChange(e);
        }}
      >
        <Radio
          value="row"
          label="row"
          size="sm"
          color="neutral"
          variant="solid"
        />
        <Radio
          value="row-reverse"
          label="row-reverse"
          size="sm"
          color="neutral"
          variant="solid"
        />
        <Radio
          value="column"
          label="column"
          size="sm"
          color="neutral"
          variant="solid"
        />
        <Radio
          value="column-reverse"
          label="column-reverse"
          size="sm"
          color="neutral"
          variant="solid"
        />
      </RadioGroup>

      <Box sx={containerStyle}>
        <SampleBox
          id="1"
          colour="#eb4034"
          option={option}
          min="20%"
          max="100%"
          height="100%"
        />
        <SampleBox
          id="2"
          colour="#4c60e0"
          option={option}
          min="20%"
          max="100%"
          height="100%"
        />
        <SampleBox
          id="3"
          colour="#5ccf4a"
          option={option}
          min="20%"
          max="100%"
          height="100%"
        />
        <SampleBox
          id="4"
          colour="#f5a35b"
          option={option}
          min="20%"
          max="100%"
          height="100%"
        />
        <SampleBox
          id="5"
          colour="#eb6edc"
          option={option}
          min="20%"
          max="100%"
          height="100%"
        />
      </Box>
    </>
  );
};

export default FlexDirection;
