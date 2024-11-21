"use client";

import { useMediaQuery } from "@mui/material";
import Nav from "../_components/Nav";
import { Box, Tab, TabList, TabPanel, Tabs } from "@mui/joy";

const Misc = () => {
  const smallScreen = useMediaQuery("(max-width: 600px)");

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
    ".JoyTabs-root": { color: "red" },
    ".JoyTabs-root.selected": { color: "red" },
  };

  const tabListStyle = {
    gap: 0.5,
    bgcolor: "#1c2230",
    width: { xs: "100%", sm: "200px", lg: "250px" },
    overflow: "auto",
    scrollSnapType: "x mandatory",
    "&::-webkit-scrollbar": { display: "none" },
    ".JoyTabList-root": { color: "red" },
    ".JoyTabList-root.selected": { color: "red" },
  };

  const tabStyle = {
    font: "inherit",
    ".JoyTab-root": { color: "red" },
    ".JoyTab-root.selected": { color: "red" },
  };

  const tabPanelStyle = {
    color: "white",
    background: "transparent",
  };

  return (
    <>
      <Box sx={bodyStyle}>
        <Nav />

        <Tabs
          aria-label="tabs"
          orientation={smallScreen ? "horizontal" : "vertical"}
          size={smallScreen ? "sm" : "lg"}
          defaultValue={0}
          sx={tabWrapperStyle}
        >
          <TabList disableUnderline sx={tabListStyle}>
            <Tab disableIndicator sx={tabStyle}>
              Flex Playground
            </Tab>
            <Tab disableIndicator sx={tabStyle}>
              Markdown to pdf converter
            </Tab>
          </TabList>

          <TabPanel value={0} sx={tabPanelStyle}>
            <span style={{ font: "inherit" }}>This is tab pane one</span>
          </TabPanel>

          <TabPanel value={1} sx={tabPanelStyle}>
            <span style={{ font: "inherit" }}>This is tab pane two</span>
          </TabPanel>

          <TabPanel value={2} sx={tabPanelStyle}>
            This is tab pane three
          </TabPanel>
        </Tabs>
      </Box>
    </>
  );
};

export default Misc;
