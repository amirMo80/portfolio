import { useState, useEffect } from "react";
import { Divider, Chip, Typography, Slide } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

const CustomDivider = ({ text, icon }) => {
  const theme = useTheme();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    return () => {
      setLoading(false);
    };
  }, []);

  return (
    <Slide in={loading} direction="down" style={{ transitionDelay: 250 }}>
      <Divider
        variant="middle"
        textAlign="right"
        sx={{
          "&::before , &::after": {
            borderColor: "primary.main",
          },
          mb: 3,
          py: 2,
        }}
      >
        <Chip
          sx={{ width: 230 }}
          color="primary"
          label={
            <Typography
              variant="body1"
              color={theme.palette.mode === "dark" ? grey[900] : "whitesmoke"}
            >
              {text}
              {icon}
            </Typography>
          }
        />
      </Divider>
    </Slide>
  );
};

export default CustomDivider;
