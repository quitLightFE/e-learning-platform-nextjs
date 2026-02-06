"use client";
import { faPersonChalkboard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Card, Grid, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

let coursesData = [
  {
    title: "Javascript",
    icon: <FontAwesomeIcon icon={faPersonChalkboard} />,
    path: "/javascript",
  },
  {
    title: "Python",
    icon: <FontAwesomeIcon icon={faPersonChalkboard} />,
    path: "/python",
  },
  {
    title: "C#",
    icon: <FontAwesomeIcon icon={faPersonChalkboard} />,
    path: "/csharp",
  },
  {
    title: "Java",
    icon: <FontAwesomeIcon icon={faPersonChalkboard} />,
    path: "/java",
  },
];

export default function courses() {
  const router = useRouter();
  return (
    <>
      <Typography variant="h6">Courses</Typography>
      <Grid container sx={{ mt: 3 }} spacing={2}>
        {coursesData.map((item) => (
          <Grid p={3} key={item.title} size={{ xs: 6, sm: 12, md: 3 }}>
            <Card
              sx={{
                p: 3,
                textAlign: "center",
                bgcolor: "#eb36d955",
              }}
              onClick={() => router.push("courses" + item.path)}
            >
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  borderRadius: "50%",
                  mb: 2,
                  bgcolor: "blue",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginInline: "auto",
                  "& svg": {
                    color: "white",
                  },
                }}
              >
                {item.icon}
              </Box>
              <Typography variant="h6">{item.title}</Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
