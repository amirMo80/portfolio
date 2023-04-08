import { Box, Typography } from "@mui/material";
import { FavoriteRounded, CopyrightRounded } from "@mui/icons-material";

const SidebarFooter = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: 100,
      }}
    >
      <Typography variant="subtitle2" color="text.primary" sx={{ mb: 2 }}>
        طراحی شده با{" "}
        <FavoriteRounded
          sx={{ verticalAlign: "middle", color: "tomato", width: 20 }}
        />
      </Typography>
      <Typography variant="caption" color="text.primary">
        کپی رایت 1402 <CopyrightRounded sx={{ verticalAlign: "middle" }} />
      </Typography>
    </Box>
  );
};

export default SidebarFooter;
