import { Radio, RadioGroup } from "@mui/joy";

const AlignItems = ({ headingStyle, groupStyle }) => {
  return (
    <>
      <h3 style={headingStyle}>align-items</h3>
      <RadioGroup
        defaultValue="center"
        orientation="horizontal"
        sx={groupStyle}
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
    </>
  );
};

export default AlignItems;
