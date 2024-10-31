// src/1views/Home/ui/index.tsx

import { Box, Typography } from "@mui/material";
import React, { FC } from "react";

// Стили для элементов
const avatarStyle = {
  width: 200,
  height: 200,
  borderRadius: "50%",
  objectFit: "cover",
};

const titleShadowStyle = { textShadow: "2px 2px 4px rgba(0,0,0,0.6)" };

const stackImageStyle = {
  width: 160,
  height: 160,
  objectFit: "contain",
  backgroundColor: "transparent",
};

// Компонент для отображения аватара и названия
const AvatarSection: FC = () => (
  <Box padding={4} display="flex" alignItems="center" marginBlock={2} justifyContent="center" bgcolor="#121212" gap={2} borderRadius={2}>
    <Box component="img" src="/avatar-main.png" alt="Avatar" title="Avatar" sx={avatarStyle} />
    <Box>
      <Typography variant="h3" component="h1" sx={titleShadowStyle}>
        Monoblade
      </Typography>
      <Typography variant="h4" component="h2" color="text.secondary" sx={titleShadowStyle}>
        Fullstack Developer from Ukraine
      </Typography>
    </Box>
  </Box>
);

// Компонент для отображения биографии
const BioSection: FC = () => (
  <Box display="flex" alignItems="center" flexDirection="column" justifyContent="center" marginBlock={2}bgcolor="#121212" padding={4} borderRadius={2}>
    <Typography variant="h4" marginBottom={2} color="#fff">My Bio</Typography>
    <Typography textAlign="center" variant="h5" sx={{ ...titleShadowStyle, color: "#fff" }}>
      I'm a 17-year-old full-stack developer from Ukraine, actively contributing to open-source projects. I began learning programming in early 2024 and quickly adapt to new projects and technologies.
    </Typography>
  </Box>
);

// Компонент для отображения стека технологий
const StackSection: FC = () => (
  <Box display="flex" alignItems="center" flexDirection="column" marginBlock={2} padding={4} borderRadius={2} bgcolor="#121212">
    <Typography variant="h4" marginBottom={2}>My Stack</Typography>
    <Box display="flex" alignItems="center" justifyContent="space-around" width="100%" marginBottom={2}>
      <Typography variant="h5" sx={titleShadowStyle}>Frontend</Typography>
      <Typography variant="h5" sx={titleShadowStyle}>Backend</Typography>
    </Box>
    <Box display="flex" alignItems="center" justifyContent="space-around" width="100%">
      <Box component="img" src="/next-js-logo.png" alt="NextJS" title="NextJS" sx={stackImageStyle} />
      <Box component="img" src="/zustand-logo.png" alt="Zustand" title="Zustand" sx={stackImageStyle} />
      <Box component="img" src="/node-js-logo.png" alt="NodeJS" title="NodeJS" sx={stackImageStyle} />
      <Box component="img" src="/express-js-logo.png" alt="ExpressJS" title="ExpressJS" sx={stackImageStyle} />
    </Box>
  </Box>
);

const Home: FC = () => (
  <Box padding={2} bgcolor="#f07a18">
    <AvatarSection />
    <BioSection />
    <StackSection />
  </Box>
);

export default Home;
