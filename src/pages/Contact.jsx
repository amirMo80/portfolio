import { useEffect, useState } from "react";
import { Card, CardContent, Slide } from "@mui/material";

import { useTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import Grid from "@mui/material/Unstable_Grid2";
import { CustomDivider } from "../components/common";

import { AccountCircleRounded } from "@mui/icons-material";

import { Helmet } from "react-helmet-async";

import contact from "../assets/images/contact.jpg";
import { ContactForm } from "../components/pages";

const Contact = ({ helmetTitle }) => {
  const theme = useTheme();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    return () => {
      setLoading(false);
    };
  }, []);

  return (
    <Card
      sx={{
        height: "100vh",
        overflowY: "scroll",
        "::-webkit-scrollbar": { display: "none" },
        backgroundColor: theme.palette.mode === "dark" ? grey[800] : grey[300],
      }}
    >
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <CardContent>
        <CustomDivider
          text="ارتباط با من"
          icon={
            <AccountCircleRounded sx={{ verticalAlign: "middle", mr: 1 }} />
          }
        />
        <Grid container sx={{ mt: 6, width: 0.8, mx: "auto" }}>
          <Slide in={loading} direction="up">
            <Grid xs={12} md={8}>
              <Card
                sx={{
                  p: 2,
                  minHeight: 450,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor:
                    theme.palette.mode === "dark" ? grey[900] : grey[100],
                }}
              >
                <ContactForm />
              </Card>
            </Grid>
          </Slide>
          <Slide in={loading} direction="up">
            <Grid
              xs={0}
              md={4}
              sx={{
                minHeight: 450,
                backgroundImage: `url(${contact})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left",
                objectFit: "contain",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "center",
                borderRadius: 1,
              }}
            />
          </Slide>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Contact;
