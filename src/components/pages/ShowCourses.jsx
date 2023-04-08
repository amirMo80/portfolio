import {
  Slide,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  CardActions,
  Typography,
  Button,
} from "@mui/material";

import { useTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import EllipsisText from "react-ellipsis-text";
import { courses } from "../../constants/courses";
import Grid from "@mui/material/Unstable_Grid2";

const ShowCourses = ({ loading }) => {
  const theme = useTheme();
  return (
    <>
      {courses.map((course, index) => (
        <Grid key={index} xs={12} sm={6} xl={4} sx={{ px: 2, mb: 4 }}>
          <Slide
            in={loading}
            direction="up"
            style={{
              transitionDelay: loading ? `${index + 3}99ms` : "0ms",
            }}
          >
            <Card
              sx={{
                maxWidth: 320,
                height: 400,
                mx: "auto",
                backgroundColor:
                  theme.palette.mode === "dark" ? grey[700] : grey[200],
                color: "whitesmoke",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  width="250"
                  height="200"
                  src={course.image}
                  alt={course.info}
                />
                <CardContent>
                  <Typography
                    color="text.primary"
                    variant="body1"
                    textAlign="left"
                    gutterBottom
                  >
                    {course.title}
                  </Typography>
                  <Typography
                    color="text.primary"
                    variant="subtitle2"
                    textAlign="left"
                    sx={{ direction: "ltr", lineHeight: 2 }}
                  >
                    <EllipsisText text={course.info} length={100} />
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  sx={{ color: "text.primary" }}
                  href={course.link}
                  target="_blank"
                >
                  اطلاعات بیشتر
                </Button>
              </CardActions>
            </Card>
          </Slide>
        </Grid>
      ))}
    </>
  );
};

export default ShowCourses;
