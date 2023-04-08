import { useContext } from "react";
import { Tabs, Tab } from "@mui/material";
import { grey } from "@mui/material/colors";
import MainContxet from "../../context";
import { tabData } from "../../constants/tabData";
import { useTheme } from "@mui/material/styles";

const SidebarTabs = () => {
  const { pageNumber, handlePageNumber, setDrawerOpen } =
    useContext(MainContxet);

  const theme = useTheme();

  const data = tabData();

  return (
    <Tabs
      value={pageNumber}
      onChange={handlePageNumber}
      orientation="vertical"
      variant="scrollable"
      scrollButtons
      allowScrollButtonsMobile
    >
      {data.map((tab, index) => (
        <Tab
          key={index}
          label={tab.label}
          icon={tab.icon}
          sx={{
            color: "text.primary",
            "&.MuiTab-root": {
              minHeight: 50,
              backgroundColor:
                theme.palette.mode === "dark" ? grey[900] : grey[300],
              my: 0.5,
              mx: 1,
              borderRadius: 1,
            },
          }}
          iconPosition="start"
          onClick={() => setDrawerOpen(false)}
          {...tab}
        />
      ))}
    </Tabs>
  );
};

export default SidebarTabs;
