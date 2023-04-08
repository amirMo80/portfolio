import { blue, lightBlue, orange, red, yellow } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
    direction: "rtl",
    typography: {
        fontFamily: "IRANSans ,Vazir , Roboto",
    },
    palette: {
        mode: "dark",
        blue: { main: blue[500] },
        red: { main: red[500] },
        orange: { main: orange[500] },
        lightBlue: { main: lightBlue[500] },
        yellow: { main: yellow[600] }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 576,
            md: 768,
            lg: 992,
            xl: 1200
        }
    }
})


export const lightTheme = createTheme({
    direction: "rtl",
    typography: {
        fontFamily: "IRANSans ,Vazir , Roboto",
    },
    palette: {
        mode: "light",
        blue: { main: blue[500] },
        red: { main: red[500] },
        orange: { main: orange[500] },
        lightBlue: { main: lightBlue[500] },
        yellow: { main: yellow[600] }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 576,
            md: 768,
            lg: 992,
            xl: 1200
        }
    }
})