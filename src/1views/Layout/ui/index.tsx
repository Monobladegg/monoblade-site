"use client";

import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import React, { FC } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head></head>
      <body style={{ backgroundColor: "#f07a18" }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default Layout;
