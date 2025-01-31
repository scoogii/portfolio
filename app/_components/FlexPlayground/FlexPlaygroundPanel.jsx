import { Box, Divider } from "@mui/joy";
import FlexDirection from "./container/FlexDirection";
import FlexWrap from "./container/FlexWrap";
import JustifyContent from "./container/JustifyContent";
import AlignItems from "./container/AlignItems";
import AlignContent from "./container/AlignContent";
import AlignSelf from "./items/AlignSelf";
import FlexGrow from "./items/FlexGrow";
import FlexShrink from "./items/FlexShrink";
import FlexBasis from "./items/FlexBasis";
import Order from "./items/Order";

const FlexPlaygroundPanel = () => {
  const boxStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
    width: "100%",
    height: "100%",
    overflowY: "auto",
    overflowX: "hidden",
  };

  const contentStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    border: "1px solid #2b3c5e",
    borderRadius: "14px",
    padding: "20px 10px 20px",
    gap: "10px",
    marginBottom: "20px",
  };

  const headingStyle = {
    textAlign: "center",
    marginBottom: "5px",
  };

  const subHeadingStyle = {
    width: "100%",
    textAlign: "left",
    marginLeft: "30px",
  };

  const radioGroupStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "10px",
    marginBottom: "10px",
  };

  return (
    <Box sx={boxStyle}>
      <h1 style={{ textAlign: "center" }}>Flexbox Playground</h1>

      <Divider sx={{ background: "#2b3c5e", margin: "5px 0 30px" }} />

      <h2 style={headingStyle}>Flex Container</h2>
      <Box sx={contentStyle} style={{ marginBottom: "30px" }}>
        <FlexDirection
          headingStyle={subHeadingStyle}
          groupStyle={radioGroupStyle}
        />

        <FlexWrap headingStyle={subHeadingStyle} groupStyle={radioGroupStyle} />

        <JustifyContent
          headingStyle={subHeadingStyle}
          groupStyle={radioGroupStyle}
        />

        <AlignItems
          headingStyle={subHeadingStyle}
          groupStyle={radioGroupStyle}
        />

        <AlignContent
          headingStyle={subHeadingStyle}
          groupStyle={radioGroupStyle}
        />
      </Box>

      <h2 style={headingStyle}>Flex Items</h2>
      <Box sx={contentStyle}>
        <AlignSelf
          headingStyle={subHeadingStyle}
          groupStyle={radioGroupStyle}
        />

        <FlexGrow headingStyle={subHeadingStyle} groupStyle={radioGroupStyle} />

        <FlexShrink
          headingStyle={subHeadingStyle}
          groupStyle={radioGroupStyle}
        />

        <FlexBasis
          headingStyle={subHeadingStyle}
          groupStyle={radioGroupStyle}
        />

        <Order headingStyle={subHeadingStyle} groupStyle={radioGroupStyle} />
      </Box>
    </Box>
  );
};

export default FlexPlaygroundPanel;
