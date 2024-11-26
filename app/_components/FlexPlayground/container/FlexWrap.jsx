import { Box, Radio, RadioGroup } from "@mui/joy";
import { useState } from "react";
import SampleBox from "../SampleBox";

const FlexWrap = ({ headingStyle, groupStyle }) => {
  const [option, setOption] = useState("nowrap");

  const handleChange = (e) => {
    setOption(e.target.value);
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    flexWrap: option,
    justifyContent: "start",
    alignItems: "center",
    width: "90%",
    minHeight: "100px",
    border: "1px solid #2b3c5e",
    borderRadius: "12px",
    padding: "10px",
    marginBottom: "30px",
    gap: "10px",
  };

  return (
    <>
      <h3 style={headingStyle}>flex-wrap</h3>
      <RadioGroup
        defaultValue="nowrap"
        orientation="horizontal"
        sx={groupStyle}
        onChange={(e) => {
          handleChange(e);
        }}
      >
        <Radio
          value="nowrap"
          label="nowrap"
          size="sm"
          color="neutral"
          variant="solid"
        />
        <Radio
          value="wrap"
          label="wrap"
          size="sm"
          color="neutral"
          variant="solid"
        />
        <Radio
          value="wrap-reverse"
          label="wrap-reverse"
          size="sm"
          color="neutral"
          variant="solid"
        />
      </RadioGroup>

      <Box sx={containerStyle}>
        <SampleBox
          id="1"
          colour="#eb5034"
          option={option}
          min="30%"
          max="30%"
          height={option === "nowrap" ? "100%" : "40%"}
        />
        <SampleBox
          id="2"
          colour="#4c60e0"
          option={option}
          min="30%"
          max="30%"
          height={option === "nowrap" ? "100%" : "40%"}
        />
        <SampleBox
          id="3"
          colour="#5ccf4a"
          option={option}
          min="30%"
          max="30%"
          height={option === "nowrap" ? "100%" : "40%"}
        />
        <SampleBox
          id="4"
          colour="#f5a35b"
          option={option}
          min="30%"
          max="30%"
          height={option === "nowrap" ? "100%" : "40%"}
        />
        <SampleBox
          id="5"
          colour="#eb6edc"
          option={option}
          min="30%"
          max="30%"
          height={option === "nowrap" ? "100%" : "40%"}
        />
      </Box>
    </>
  );
};

export default FlexWrap;
