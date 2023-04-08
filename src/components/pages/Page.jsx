import { Box } from "@mui/material";

const Page = ({ children, pageNumber, index, others }) => {
  return (
    <div
      rol="tabpanel"
      hidden={pageNumber !== index}
      id={`sidebar-tab-${index}`}
      aria-labelledby={`tabpanel-${index}`}
      {...others}
    >
      {pageNumber === index && <Box sx={{ height: "100vh" }}>{children}</Box>}
    </div>
  );
};

export default Page;
