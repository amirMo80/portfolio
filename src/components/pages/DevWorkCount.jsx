import { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Zoom, Typography } from "@mui/material";
import CountUp from "react-countup";

import { grey } from "@mui/material/colors";

import { devWorkCount } from "../../constants/details";

const DevWorkCount = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    return () => {
      setLoading(false);
    };
  }, []);

  const theme = useTheme();

  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        width: 0.8,
      }}
    >
      {devWorkCount.map((item, index) => (
        <Zoom
          in={loading}
          style={{
            transitionDelay: loading ? `${index + 3}99ms` : "0ms",
          }}
          key={index}
        >
          <Box
            component="div"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
              width: 0.4,
              height: 200,
              backgroundColor: item.color,
              m: 1,
              borderRadius: 1,
            }}
          >
            <Box
              component="span"
              sx={{
                color: theme.palette.mode === "dark" ? grey[900] : null,
              }}
            >
              {item.icon}
            </Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: theme.palette.mode === "dark" ? grey[900] : null,
              }}
            >
              {item.title}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                color: theme.palette.mode === "dark" ? grey[900] : null,
              }}
            >
              <CountUp start={0} end={item.total} duration={3} />
            </Typography>
          </Box>
        </Zoom>
      ))}
    </Box>
  );
};

export default DevWorkCount;
