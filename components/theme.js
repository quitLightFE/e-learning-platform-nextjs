import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#eb36d9",
    },
  },
  typography: {
    fontFamily: "var(--font-rubik), Arial, sans-serif",
    body1: { fontWeight: 300 },
  },
});

export default theme;
