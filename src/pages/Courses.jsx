import { useState, useEffect } from "react";
import { Card, CardContent } from "@mui/material";

import { useTheme } from "@mui/material/styles";

import { Helmet } from "react-helmet-async";
import Grid from "@mui/material/Unstable_Grid2";
import { grey } from "@mui/material/colors";
import { SchoolRounded } from "@mui/icons-material";

import { CustomDivider } from "../components/common";
import { ShowCourses } from "../components/pages";

const Courses = ({ helmetTitle }) => {
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
          text="دوره های من"
          icon={<SchoolRounded sx={{ verticalAlign: "middle", mr: 1 }} />}
        />
        <Grid container>
          <ShowCourses loading={loading} />
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Courses;
