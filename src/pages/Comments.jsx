import { Box, Card, CardContent } from "@mui/material";

import { useTheme } from "@mui/material/styles";

import { ForumRounded } from "@mui/icons-material";
import { grey } from "@mui/material/colors";
import { Helmet } from "react-helmet-async";
import { CustomDivider } from "../components/common";
import { CommentSlider } from "../components/pages";

const Comments = ({ helmetTitle }) => {
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
          text="نظرات دانشجویان"
          icon={<ForumRounded sx={{ verticalAlign: "middle", mr: 1 }} />}
        />
        <Box
          component="div"
          sx={{
            width: 0.5,
            mx: "auto",
            mt: 15,
          }}
        >
          <CommentSlider />
        </Box>
      </CardContent>
    </Card>
  );
};
export default Comments;
