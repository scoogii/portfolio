import { Radio, RadioGroup } from "@mui/joy";

const FlexWrap = ({ headingStyle, groupStyle }) => {
  return (
    <>
      <h3 style={headingStyle}>flex-wrap</h3>
      <RadioGroup
        defaultValue="nowrap"
        orientation="horizontal"
        sx={groupStyle}
      >
        <Radio value="nowrap" label="nowrap" size="sm" color="neutral" />
        <Radio value="wrap" label="wrap" size="sm" color="neutral" />
        <Radio
          value="wrap-reverse"
          label="wrap-reverse"
          size="sm"
          color="neutral"
        />
      </RadioGroup>
    </>
  );
};

export default FlexWrap;
