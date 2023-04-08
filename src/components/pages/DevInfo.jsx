import { Typography } from "@mui/material";
import { KeyboardArrowLeftRounded } from "@mui/icons-material";

const Info = ({ children }) => {
  return (
    <Typography
      variant="body1"
      color="black"
      sx={{ textAlign: "left", my: 2.5, mx: 5, color: "text.primary" }}
    >
      {children}
      <KeyboardArrowLeftRounded
        sx={{
          verticalAlign: "middle",
          color: "primary.main",
          fontSize: "1.6rem",
        }}
      />
    </Typography>
  );
};

const DevInfo = () => {
  return (
    <>
      <Info>نام و نام خانوادگی : امیرحسین محمدزاده</Info>
      <Info>سن : 21</Info>
      <Info>شهر : تهران</Info>
      <Info>amir@gmail.com : ایمیل</Info>
      <Info>شماره موبایل : 09197663726</Info>{" "}
    </>
  );
};

export default DevInfo;
