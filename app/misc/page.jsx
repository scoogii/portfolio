"use client";

import { useMediaQuery } from "@mui/material";
import Nav from "../_components/Nav";
import { Box, Tab, TabList, TabPanel, Tabs } from "@mui/joy";
import FlexPlaygroundPanel from "../_components/FlexPlayground/FlexPlaygroundPanel";
import MarkdownToPDFPanel from "../_components/MarkdownToPDF/MarkdownToPDFPanel";

const Misc = () => {
  const smallScreen = useMediaQuery("(max-width: 900px)");

  const bodyStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "start",
    height: "calc(100vh - 70px)",
    gap: "20px",
    marginTop: "70px",
    color: "black",
  };

  const tabWrapperStyle = {
    width: "100%",
    height: "100%",
    background: "transparent",
  };

  const tabListStyle = {
    display: "flex",
    gap: 0.5,
    background: "#1b202e",
    padding: "5px",
    minWidth: { xs: "150px", sm: "210px", lg: "260px" },
    borderRight: smallScreen ? "none" : "2px solid #2b3c5e",
    borderBottom: smallScreen ? "2px solid #2b3c5e" : "none",
    overflow: "auto",
    scrollSnapType: "x mandatory",
    "&::-webkit-scrollbar": { display: "none" },
  };

  const tabStyle = {
    display: { xs: "inline-block", md: "flex" },
    textAlign: "center",
    borderRadius: "12px",
    minWidth: { xs: "140px", sm: "200px", lg: "250px" },
    overflow: { xs: "hidden", md: "auto" },
    whiteSpace: { xs: "nowrap", md: "normal" },
    textOverflow: "ellipsis",
  };

  const tabPanelStyle = {
    height: { xs: "0", md: "100%" },
    color: "white",
    background: "transparent",
    padding: "0px",
  };

  return (
    <>
      <Box sx={bodyStyle}>
        <Nav />

        <Tabs
          aria-label="tabs"
          orientation={smallScreen ? "horizontal" : "vertical"}
          size={smallScreen ? "sm" : "md"}
          defaultValue={0}
          sx={tabWrapperStyle}
        >
          <TabList disableUnderline sx={tabListStyle}>
            <Tab disableIndicator sx={tabStyle}>
              Flex Playground
            </Tab>

            <Tab disableIndicator sx={tabStyle}>
              Markdown to PDF
            </Tab>
          </TabList>

          <TabPanel value={0} sx={tabPanelStyle}>
            <FlexPlaygroundPanel />
          </TabPanel>

          <TabPanel value={1} sx={tabPanelStyle}>
            <MarkdownToPDFPanel />
          </TabPanel>
        </Tabs>
      </Box>
    </>
  );
};

export default Misc;
