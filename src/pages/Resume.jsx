import { useState, useEffect } from "react";
import { Card, CardContent, Chip, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Helmet } from "react-helmet-async";
import { useTheme } from "@mui/material/styles";

import {
  AccountBoxRounded,
  WorkRounded,
  SchoolRounded,
} from "@mui/icons-material";
import { grey } from "@mui/material/colors";
import { CustomDivider } from "../components/common";
import { DevEduTimeline, DevExpTimeline } from "../components/pages";

const Resume = ({ helmetTitle }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    return () => {
      setLoading(false);
    };
  }, []);

  const theme = useTheme();
  return (
    <Card
      sx={{
        height: "100vh",
        backgroundColor: theme.palette.mode === "dark" ? grey[900] : grey[300],
        overflow: "scroll",
        "::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <CardContent>
        <CustomDivider
          text="رزومه"
          icon={<AccountBoxRounded sx={{ verticalAlign: "middle", mr: 1 }} />}
        />
        <Grid container sx={{ mt: 5 }}>
          <Grid xs={6}>
            <Chip
              sx={{ width: 160, backgroundColor: "primary.main" }}
              label={
                <Typography
                  variant="subtitle1"
                  color={
                    theme.palette.mode === "dark" ? grey[900] : "whitesmoke"
                  }
                >
                  تجربیات
                  <WorkRounded sx={{ verticalAlign: "middle", mr: 1 }} />
                </Typography>
              }
            />
            <DevExpTimeline loading={loading} />
          </Grid>
          <Grid xs={6}>
            <Chip
              sx={{ width: 160, backgroundColor: "primary.main" }}
              label={
                <Typography
                  variant="subtitle1"
                  color={
                    theme.palette.mode === "dark" ? grey[900] : "whitesmoke"
                  }
                >
                  تحصیلات
                  <SchoolRounded sx={{ verticalAlign: "middle", mr: 1 }} />
                </Typography>
              }
            />
            <DevEduTimeline loading={loading} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Resume;
