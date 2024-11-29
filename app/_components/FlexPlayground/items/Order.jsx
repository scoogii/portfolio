import { Box, Input } from "@mui/joy";
import { useState } from "react";
import SampleItemBox from "./SampleItemBox";

const Order = ({ headingStyle, groupStyle }) => {
  const [option1, setOption1] = useState({ order: 1 });
  const [option2, setOption2] = useState({ order: 2 });
  const [option3, setOption3] = useState({ order: 3 });
  const [option4, setOption4] = useState({ order: 4 });
  const [option5, setOption5] = useState({ order: 5 });

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
      <h3 style={headingStyle}>order</h3>

      <Box sx={groupStyle} style={{ gap: "20px" }}>
        <Box sx={optionContainerStyle}>
          <h3>Item 1</h3>
          <Input
            type="number"
            defaultValue={option1["order"]}
            slotProps={{
              input: {
                min: 0,
                step: 1,
              },
            }}
            sx={inputStyle}
            onChange={(e) => {
              setOption1({ order: e.target.value });
            }}
          />
        </Box>

        <Box sx={optionContainerStyle}>
          <h3>Item 2</h3>
          <Input
            type="number"
            defaultValue={option2["order"]}
            slotProps={{
              input: {
                min: 0,
                step: 1,
              },
            }}
            sx={inputStyle}
            onChange={(e) => {
              setOption2({ order: e.target.value });
            }}
          />
        </Box>

        <Box sx={optionContainerStyle}>
          <h3>Item 3</h3>
          <Input
            type="number"
            defaultValue={option3["order"]}
            slotProps={{
              input: {
                min: 0,
                step: 1,
              },
            }}
            sx={inputStyle}
            onChange={(e) => {
              setOption3({ order: e.target.value });
            }}
          />
        </Box>

        <Box sx={optionContainerStyle}>
          <h3>Item 4</h3>
          <Input
            type="number"
            defaultValue={option4["order"]}
            slotProps={{
              input: {
                min: 0,
                step: 1,
              },
            }}
            sx={inputStyle}
            onChange={(e) => {
              setOption4({ order: e.target.value });
            }}
          />
        </Box>

        <Box sx={optionContainerStyle}>
          <h3>Item 5</h3>
          <Input
            type="number"
            defaultValue={option5["order"]}
            slotProps={{
              input: {
                min: 0,
                step: 1,
              },
            }}
            sx={inputStyle}
            onChange={(e) => {
              setOption5({ order: e.target.value });
            }}
          />
        </Box>
      </Box>

      <Box sx={containerStyle}>
        <SampleItemBox
          id="1"
          colour="#eb4034"
          option={option1}
          min="20%"
          height="100%"
        />
        <SampleItemBox
          id="2"
          colour="#4c60e0"
          option={option2}
          min="20%"
          height="100%"
        />
        <SampleItemBox
          id="3"
          colour="#5ccf4a"
          option={option3}
          min="20%"
          height="100%"
        />
        <SampleItemBox
          id="4"
          colour="#f5a35b"
          option={option4}
          min="20%"
          height="100%"
        />
        <SampleItemBox
          id="5"
          colour="#eb6edc"
          option={option5}
          min="20%"
          height="100%"
        />
      </Box>
    </>
  );
};

export default Order;
