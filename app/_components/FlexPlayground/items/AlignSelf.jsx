import { Box, Radio, RadioGroup } from "@mui/joy";
import { useState } from "react";
import SampleItemBox from "./SampleItemBox";

const AlignSelf = ({ headingStyle, groupStyle }) => {
  const [option, setOption] = useState({ alignSelf: "center" });

  const handleChange = (e) => {
    setOption({ alignSelf: e.target.value });
    console.log(option);
  };

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
      <h3 style={headingStyle}>align-self</h3>
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
          value="baseline"
          label="baseline"
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
        <SampleItemBox id="1" colour="#eb4034" min="30%" height="30%" />
        <SampleItemBox
          id="2"
          colour="#4c60e0"
          option={option}
          min="30%"
          height="70%"
        />
        <SampleItemBox id="3" colour="#5ccf4a" min="30%" height="30%" />
      </Box>
    </>
  );
};

export default AlignSelf;
