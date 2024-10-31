// app/layout.tsx

import "./globals.scss";
import { Metadata } from "next";
import React, { FC } from "react";

export const metadata: Metadata = {
  title: "Monoblade",
  icons: {
    icon: "/favicon.ico",
  },
  viewport: "width=device-width, initial-scale=1",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head></head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
