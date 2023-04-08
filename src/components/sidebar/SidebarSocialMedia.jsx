import { Box, IconButton } from "@mui/material";
import { socialMedia } from "../../constants/socialMedia";

const SidebarSocialMedia = () => {
  return (
    <Box component="div" sx={{ m: "5px auto" }}>
      {socialMedia.map((item, index) => (
        <IconButton key={index} aria-label={item.ariaLabel}>
          <a href={`${item.href}`} target="_blank" rel="noopener noreferrer">
            {item.icon}
          </a>
        </IconButton>
      ))}
    </Box>
  );
};

export default SidebarSocialMedia;
