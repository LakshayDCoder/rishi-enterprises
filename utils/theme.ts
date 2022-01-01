import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#87888a",
    },
    secondary: {
      main: "#fcfbfa",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    h1: {
      fontSize: "1.6rem",
      fontWeight: 600,
      margin: "1rem 0",
    },
    h2: {
      fontSize: "1.4rem",
      fontWeight: 400,
      margin: "1rem 0",
    },
  },
});