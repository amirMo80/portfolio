import { Typography, Slide } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from "@mui/lab";
import { devEXp } from "../../constants/details";
import { WorkRounded } from "@mui/icons-material";

const DevExpTimeline = ({ loading }) => {
  return (
    <Timeline position="right" sx={{ direction: "ltr" }}>
      {devEXp.map((item, index) => (
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
                <WorkRounded />
              </TimelineDot>
              <TimelineConnector sx={{ height: 50 }} />
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="caption" color="text.primary">
                {item.year}
              </Typography>
              <Typography variant="body1" color="text.primaty">
                {item.project}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Slide>
      ))}
    </Timeline>
  );
};

export default DevExpTimeline;
