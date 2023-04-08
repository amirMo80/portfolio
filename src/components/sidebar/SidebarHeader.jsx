import { Typography } from "@mui/material";

import avatar from "../../assets/images/avatar-6.jpg";
import ThemeActionButton from "../ThemeActionButton";
import SidebarSocialMedia from "./SidebarSocialMedia";
import { CustomAvatar } from "../common";

const SidebarHeader = () => {
  return (
    <>
      <ThemeActionButton />
      <CustomAvatar avatar={avatar} variant="circular" size={120} />
      <Typography variant="h5" color="text.primary">
        امیرحسین محمدزاده
      </Typography>
      <Typography variant="caption" color="text.primary">
        برنامه نویس فرانت اند
      </Typography>

      <SidebarSocialMedia />
    </>
  );
};

export default SidebarHeader;
