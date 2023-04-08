import { Typography, Slide } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from "@mui/lab";
import { devEdu } from "../../constants/details";
import { SchoolRounded } from "@mui/icons-material";

const DevEduTimeline = ({ loading }) => {
  return (
    <Timeline position="right" sx={{ direction: "ltr" }}>
      {devEdu.map((item, index) => (
        <Slide
          in={loading}
          direction="up"
          style={{
            transitionDelay: loading ? `${index + 3}99ms` : "0ms",
          }}
          key={index}
        >
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot variant="outlined" sx={{ color: "primary.main" }}>
                <SchoolRounded />
              </TimelineDot>
              <TimelineConnector sx={{ height: 50 }} />
            </TimelineSeparator>
            <TimelineContent
              sx={{
                height: 150,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <Typography variant="caption" color="text.primary">
                {item.year}
              </Typography>
              <Typography variant="body1" color="text.primaty">
                {item.cert}
              </Typography>
              <Typography variant="body1" color="text.primaty">
                {item.major}
              </Typography>
              <Typography variant="body2" color="text.primaty">
                {item.uni}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Slide>
      ))}
    </Timeline>
  );
};

export default DevEduTimeline;
