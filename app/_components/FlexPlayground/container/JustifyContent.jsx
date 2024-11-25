import { Radio, RadioGroup } from "@mui/joy";

const JustifyContent = ({ headingStyle, groupStyle }) => {
  return (
    <>
      <h3 style={headingStyle}>justify-content</h3>
      <RadioGroup
        defaultValue="center"
        orientation="horizontal"
        sx={groupStyle}
      >
        <Radio value="center" label="center" size="sm" color="neutral" />
        <Radio
          value="flex-start"
          label="flex-start"
          size="sm"
          color="neutral"
        />
        <Radio value="flex-end" label="flex-end" size="sm" color="neutral" />
        <Radio
          value="space-around"
          label="space-around"
          size="sm"
          color="neutral"
        />
        <Radio
          value="space-between"
          label="space-between"
          size="sm"
          color="neutral"
        />
      </RadioGroup>
    </>
  );
};

export default JustifyContent;
