import { Card, CardContent } from "@mui/material";

import { useTheme } from "@mui/material/styles";

import Grid from "@mui/material/Unstable_Grid2";
import { CodeRounded, CreateRounded, InfoRounded } from "@mui/icons-material";

import { DevInfo, Skills, DevWorkCount } from "../components/pages";

import avatar from "../assets/images/avatar-5.jpg";
import { CustomDivider, CustomAvatar } from "../components/common";

import { grey } from "@mui/material/colors";
import { Helmet } from "react-helmet-async";

const About = ({ helmetTitle }) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        height: "100vh",
        backgroundColor: theme.palette.mode === "dark" ? grey[900] : grey[300],
        overflowY: "scroll",
        "::-webkit-scrollbar": { display: "none" },
      }}
    >
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <CardContent>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Grid xs={0} sm={0} md={4} lg={4} xl={4}>
            <CustomAvatar avatar={avatar} variant="rounded" size={250} />
          </Grid>
          <Grid xs={12} sm={12} md={8} lg={8} xl={8}>
            <CustomDivider
              text="توسعه دهنده فرانت اند"
              icon={<CodeRounded sx={{ verticalAlign: "middle", mr: 1 }} />}
            />
            <DevInfo />
          </Grid>
        </Grid>
        <CustomDivider
          text="اطلاعات من"
          icon={<InfoRounded sx={{ verticalAlign: "middle", mr: 1 }} />}
        />
        <Grid container>
          <Grid
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              my: 5,
            }}
          >
            <DevWorkCount />
          </Grid>
        </Grid>
        <Grid container>
          <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
            <CustomDivider
              text="مهارت های من"
              icon={<CreateRounded sx={{ verticalAlign: "middle", mr: 1 }} />}
            />
            <Skills />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default About;
