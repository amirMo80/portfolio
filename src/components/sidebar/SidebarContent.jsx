import { Box, Divider } from "@mui/material";
import { grey } from "@mui/material/colors";
import { SidebarTabs, SidebarHeader, SidebarFooter } from "./";


const SidebarContent = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        mt: 2,
      }}
    >
      <SidebarHeader />
      <Divider variant="middle" color={grey[800]} sx={{ mt: 2 }} />
      <SidebarTabs />
      <Divider variant="middle" color={grey[800]} />
      <SidebarFooter />
    </Box>
  );
};
export default SidebarContent;
