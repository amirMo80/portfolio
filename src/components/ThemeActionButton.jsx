import { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { grey, yellow } from "@mui/material/colors";
import { WbSunnyRounded, NightlightOutlined } from "@mui/icons-material";
import MainContext from "../context/index";

const ThemeActionButton = () => {
  const { handleThemeChange } = useContext(MainContext);
  const theme = useTheme();

  return (
    <Box
      sx={{
        transform: "translateX(-5%)",
        my: 2,
        mx: 3,
        p: 1,
        backgroundColor:
          theme.palette.mode === "dark" ? yellow[700] : grey[700],
        color: theme.palette.mode === "dark" ? grey[800] : "whitesmoke",
        width: 95,
        borderRadius: 4,
        cursor: "pointer",
      }}
      component="div"
      onClick={handleThemeChange}
    >
      <Typography
        sx={{ display: "flex", justifyContent: "center" }}
        variant="body2"
      >
        {theme.palette.mode === "dark" ? (
          <WbSunnyRounded sx={{ mr: 1, fontSize: "1.2rem" }} />
        ) : (
          <NightlightOutlined sx={{ mr: 1, fontSize: "1.2rem" }} />
        )}
        {theme.palette.mode === "dark" ? "تم روشن" : "تم تیره"}
      </Typography>
    </Box>
  );
};

export default ThemeActionButton;
