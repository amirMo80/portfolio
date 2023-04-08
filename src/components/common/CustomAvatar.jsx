import { Avatar } from "@mui/material";

const CustomAvatar = ({ avatar, variant, size }) => {
  return (
    <Avatar
      variant={variant}
      src={avatar}
      sx={{
        width: size,
        height: size,
        mx: "auto",
        display: {
          xs: "none",
          sm: "none",
          md: "block",
          lg: "block",
          xl: "block",
        },
      }}
    />
  );
};

export default CustomAvatar;
