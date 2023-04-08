import { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import { Drawer } from "@mui/material";
import { grey } from "@mui/material/colors";
import { SidebarContent } from "../sidebar";
import MainContext from "../../context";

const SidebarDrawer = () => {
  const { drawerOpen, setDrawerOpen } = useContext(MainContext);
  const theme = useTheme();
  return (
    <Drawer
      open={drawerOpen}
      onClose={() => setDrawerOpen(false)}
      variant="temporary"
      sx={{
        ".MuiDrawer-paper": {
          width: 300,
          backgroundColor:
            theme.palette.mode === "dark" ? grey[900] : grey[200],
        },
        display: {
          xs: "block",
          sm: "block",
          md: "none",
          lg: "none",
          xl: "none",
        },
      }}
    >
      <SidebarContent />
    </Drawer>
  );
};

export default SidebarDrawer;
