import { lightTheme, darkTheme } from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { HelmetProvider } from "react-helmet-async";
import Grid from "@mui/material/Unstable_Grid2";

const cacheRTL = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const MainLayout = ({ children, mode }) => {
  const theme = mode === "dark" ? darkTheme : lightTheme;
  return (
    <CacheProvider value={cacheRTL}>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <Grid container sx={{ height: "100vh" }}>
            {children}
          </Grid>
        </HelmetProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MainLayout;
