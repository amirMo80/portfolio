import { useContext } from "react";
import { Box, Fab } from "@mui/material";
import { grey } from "@mui/material/colors";
import { MenuRounded } from "@mui/icons-material";
import MainContext from "../../context";

const DrawerActionButton = () => {
  const { setDrawerOpen } = useContext(MainContext);

  return (
    <Box
      sx={{
        display: {
          xs: "block",
          sm: "block",
          md: "none",
          lg: "none",
          xl: "none",
        },
        position: "absolute",
      }}
    >
      <Fab
        sx={{ m: 2, backgroundColor: grey[800], color: "whitesmoke" }}
        onClick={() => setDrawerOpen(true)}
        size="small"
      >
        <MenuRounded />
      </Fab>
    </Box>
  );
};

export default DrawerActionButton;
