import Grid from "@mui/material/Unstable_Grid2";
import { grey } from "@mui/material/colors";
import { useTheme } from "@mui/material/styles";

const SidebarContainer = ({ children }) => {
  const theme = useTheme();

  return (
    <Grid
      xs={0}
      sm={0}
      md={3}
      lg={3}
      xl={3}
      sx={{
        backgroundColor: theme.palette.mode === "dark" ? grey[800] : grey[200],
        textAlign: "center",
        height: "100vh",
        overflowY: "auto",
        overflowX: "hidden",
        "::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      {children}
    </Grid>
  );
};

export default SidebarContainer;
