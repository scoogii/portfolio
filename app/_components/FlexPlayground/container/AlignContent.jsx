import { Box, Radio, RadioGroup } from "@mui/joy";
import { useState } from "react";
import SampleBox from "../SampleBox";

const AlignContent = ({ headingStyle, groupStyle }) => {
  const [option, setOption] = useState("center");

  const handleChange = (e) => {
    setOption(e.target.value);
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: option,
    width: "90%",
    minHeight: "200px",
    border: "1px solid #2b3c5e",
    borderRadius: "12px",
    padding: "10px",
    marginBottom: "10px",
    gap: "10px",
  };

  return (
    <>
      <h3 style={headingStyle}>align-content</h3>
      <RadioGroup
        defaultValue="center"
        orientation="horizontal"
        sx={groupStyle}
        onChange={(e) => {
          handleChange(e);
        }}
      >
        <Radio
          value="center"
          label="center"
          size="sm"
          color="neutral"
          variant="solid"
        />
        <Radio
          value="flex-start"
          label="flex-start"
          size="sm"
          color="neutral"
          variant="solid"
        />
        <Radio
          value="flex-end"
          label="flex-end"
          size="sm"
          color="neutral"
          variant="solid"
        />
        <Radio
          value="space-between"
          label="space-between"
          size="sm"
          color="neutral"
          variant="solid"
        />
        <Radio
          value="space-around"
          label="space-around"
          size="sm"
          color="neutral"
          variant="solid"
        />
        <Radio
          value="stretch"
          label="stretch"
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
          min="15%"
          max="15%"
          height="50%"
        />
        <SampleBox
          id="2"
          colour="#4c60e0"
          option={option}
          min="15%"
          max="15%"
          height="50%"
        />
        <SampleBox
          id="3"
          colour="#5ccf4a"
          option={option}
          min="15%"
          max="15%"
          height="50%"
        />
        <SampleBox
          id="4"
          colour="#f5a35b"
          option={option}
          min="15%"
          max="15%"
          height="50%"
        />
        <SampleBox
          id="5"
          colour="#eb6edc"
          option={option}
          min="15%"
          max="15%"
          height="50%"
        />
      </Box>
    </>
  );
};

export default AlignContent;
