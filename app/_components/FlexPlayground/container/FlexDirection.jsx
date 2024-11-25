import { Radio, RadioGroup } from "@mui/joy";

const FlexDirection = ({ headingStyle, groupStyle }) => {
  return (
    <>
      <h3 style={headingStyle}>flex-direction</h3>
      <RadioGroup defaultValue="row" orientation="horizontal" sx={groupStyle}>
        <Radio value="row" label="row" size="sm" color="neutral" />
        <Radio
          value="row-reverse"
          label="row-reverse"
          size="sm"
          color="neutral"
        />
        <Radio value="column" label="column" size="sm" color="neutral" />
        <Radio
          value="column-reverse"
          label="column-reverse"
          size="sm"
          color="neutral"
        />
      </RadioGroup>
    </>
  );
};

export default FlexDirection;
