import { Box, Typography, LinearProgress } from "@mui/material";

const Skill = ({ color, name, value }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "end",
          justifyContent: "center",
          my: 1,
          width: 1,
        }}
      >
        <Typography
          color={`${color}.main`}
          variant="h6"
          sx={{ ml: 8, fontFamily: "Roboto" }}
        >
          {name}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Box
            component="span"
            sx={{ color: `${color}.main`, fontFamily: "Roboto" }}
          >
            {Math.round(value)}%
          </Box>
          <LinearProgress
            variant="determinate"
            value={value}
            color={color}
            sx={{ height: 10, width: 0.85, borderRadius: 2, mr: 2 }}
          />
        </Box>
      </Box>
    </>
  );
};

export default Skill;
