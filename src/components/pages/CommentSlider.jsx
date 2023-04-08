import { Typography, Box, Avatar } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Slider from "react-slick";
import { userComments } from "../../constants/details";
import { grey } from "@mui/material/colors";

const CommentSlider = () => {
  const options = {
    dots: false,
    infinite: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };

  const theme = useTheme();

  return (
    <Slider {...options}>
      {userComments.map((user, index) => (
        <Box
          component="div"
          key={index}
          sx={{
            borderRadius: 3,
            width: 1 / 2,
            height: 350,
            backgroundColor:
              theme.palette.mode === "dark" ? grey[800] : grey[100],
          }}
        >
          <Box
            component="div"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Avatar
              src={user.avatar}
              variant="circular"
              sx={{ width: 100, height: 100, my: 2 }}
            />
            <Typography
              sx={{ color: "text.primary", fontWeight: "bold" }}
              variant="body1"
              gutterBottom
            >
              {user.fullname}
            </Typography>
            <Typography
              sx={{ color: "text.primary" }}
              variant="body2"
              gutterBottom
            >
              {user.jobTitle}
            </Typography>
            <Typography
              sx={{ color: "text.primary", mt: 1, width: 0.9 }}
              variant="caption"
            >
              {user.comment}
            </Typography>
          </Box>
        </Box>
      ))}
    </Slider>
  );
};

export default CommentSlider;
