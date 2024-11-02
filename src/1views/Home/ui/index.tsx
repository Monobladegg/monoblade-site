// src/views/Home/ui/index.tsx

"use client";

import React, { FC } from "react";
import {
  Box,
  Link,
  Typography,
  Grid,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";

// Technology data
const frontendTechnologies = [
  { src: "/logos/next-js-logo.png", alt: "NextJS", title: "NextJS" },
  { src: "/logos/zustand-logo.png", alt: "Zustand", title: "Zustand" },
  {
    src: "/logos/redux-toolkit-logo.png",
    alt: "Redux Toolkit",
    title: "Redux Toolkit",
  },
  {
    src: "/logos/hcj-logo.png",
    alt: "HTML & CSS & JS",
    title: "HTML & CSS & JS",
  },
  { src: "/logos/react.png", alt: "React", title: "React" },
  { src: "/logos/typescript.png", alt: "TypeScript", title: "TypeScript" },
];

const backendTechnologies = [
  { src: "/logos/node-js-logo.png", alt: "NodeJS", title: "NodeJS" },
  { src: "/logos/express-js-logo.png", alt: "ExpressJS", title: "ExpressJS" },
  { src: "/logos/mongo-db-logo.png", alt: "MongoDB", title: "MongoDB" },
  {
    src: "/logos/postgre-sql-logo.png",
    alt: "PostgreSQL",
    title: "PostgreSQL",
  },
  { src: "/logos/firebase.png", alt: "Firebase", title: "Firebase" },
  { src: "/logos/docker.png", alt: "Docker", title: "Docker" }
];

// Grouped technologies
const technologyGroups = [
  {
    title: "Frontend",
    technologies: frontendTechnologies,
  },
  {
    title: "Backend",
    technologies: backendTechnologies,
  },
];

// Component for rendering technology images
const TechnologyImage: FC<{ src: string; alt: string; title: string }> = ({
  src,
  alt,
  title,
}) => (
  <Box
    component="img"
    src={src}
    alt={alt}
    title={title}
    sx={{
      width: { xs: 60, sm: 80, md: 100 },
      height: { xs: 60, sm: 80, md: 100 },
      objectFit: "contain",
      backgroundColor: "transparent",
    }}
  />
);

// Component for displaying avatar and title
const AvatarSection: FC = () => {
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box padding={4} marginY={2} bgcolor="#121212" borderRadius={2}>
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="center"
        direction={isSmUp ? "row" : "column"}
      >
        <Grid item>
          <Box
            component="img"
            src="/avatar-main.png"
            alt="Avatar"
            title="Avatar"
            sx={{
              width: isSmUp ? 200 : 150,
              height: isSmUp ? 200 : 150,
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </Grid>
        <Grid item>
          <Typography
            variant={isSmUp ? "h3" : "h4"}
            component="h1"
            sx={{ textShadow: "2px 2px 4px rgba(0,0,0,0.6)", color: "#fff" }}
          >
            Monoblade
          </Typography>
          <Typography
            variant={isSmUp ? "h4" : "h5"}
            component="h2"
            color="text.secondary"
            sx={{ textShadow: "2px 2px 4px rgba(0,0,0,0.6)" }}
          >
            Fullstack Developer from Ukraine
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

// Component for displaying bio
const BioSection: FC = () => (
  <Box
    display="flex"
    alignItems="center"
    flexDirection="column"
    justifyContent="center"
    marginY={2}
    bgcolor="#121212"
    padding={4}
    borderRadius={2}
  >
    <Typography
      textAlign="center"
      variant="h3"
      marginBlock={2}
      sx={{ color: "#fff" }}
    >
      About me
    </Typography>
    <Typography
      textAlign="center"
      variant="h5"
      sx={{ textShadow: "2px 2px 4px rgba(0,0,0,0.6)", color: "#fff" }}
    >
      I'm a 17-year-old full-stack developer from Ukraine. I quickly adapt to
      new projects and technologies.
    </Typography>
    <Typography
      textAlign="center"
      variant="h3"
      marginBlock={2}
      sx={{ color: "#fff" }}
    >
      My Experience
    </Typography>
    <Typography
      textAlign="center"
      variant="h5"
      sx={{
        textShadow: "2px 2px 4px rgba(0,0,0,0.6)",
        marginBottom: 4,
        color: "#fff",
      }}
    >
      I started learning programming in early 2024. In July, I secured a
      position as a frontend developer at the open-source company{" "}
      <Link
        href="https://github.com/montelibero-org/stellar-multisig"
        target="_blank"
      >
        MTL Stellar Multisig
      </Link>
      .
    </Typography>
  </Box>
);

// Component for displaying the technology stack
const StackSection: FC = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      display="flex"
      flexDirection="column"
      marginY={2}
      padding={4}
      borderRadius={2}
      bgcolor="#121212"
    >
      <Typography
        variant="h3"
        marginBottom={4}
        sx={{ color: "#fff", textAlign: "center" }}
      >
        My Stack
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {technologyGroups.map((group) => (
          <Grid item xs={12} md={6} key={group.title}>
            <Box>
              <Typography
                variant="h4"
                sx={{
                  textShadow: "2px 2px 4px rgba(0,0,0,0.6)",
                  marginBottom: 2,
                  textAlign: "center",
                  color: "#fff",
                }}
              >
                {group.title}
              </Typography>
              <Stack
                direction="row"
                flexWrap="wrap"
                justifyContent="center"
                alignItems="center"
                gap={2}
              >
                {group.technologies.map((tech) => (
                  <TechnologyImage
                    key={tech.title}
                    src={tech.src}
                    alt={tech.alt}
                    title={tech.title}
                  />
                ))}
              </Stack>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const Home: FC = () => (
  <Box padding={2}>
    <AvatarSection />
    <BioSection />
    <StackSection />
  </Box>
);

export default Home;
