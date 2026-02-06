"use client";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme";
import PermanentDrawerLeft from "./PermanentDrawerLeft";

// import { ThemeProvider } from 'next-themes'

export function Providers({ children }) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <PermanentDrawerLeft>{children}</PermanentDrawerLeft>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
