import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import EventIcon from "@mui/icons-material/Event";
import GroupIcon from "@mui/icons-material/Group";
import PublicIcon from "@mui/icons-material/Public";

const YouthsTrained = ({ homePageData }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        position: "relative",
        pt: 6,
        pb: 0,
        height: { sm: "800px", lg: "620px", xs: "1280px" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        mt: { lg: 60, xs: 18 },
        bgcolor: "#f5821f",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: { lg: -400, xs: -120 }, // desktop same, mobile adjusted
          left: "50%",
          transform: "translateX(-50%)",
          width: { lg: "1008px", xs: "300px" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          src={
            homePageData?.featuredStatsSection?.[0]?.featuredImage?.node
              ?.sourceUrl || "/assets/gainandsdf.png"
          }
          alt="gain"
          sx={{
            width: { lg: "1008px", sm: 600, xs: 350 }, // desktop stays 100px
            height: "auto",
          }}
        />
      </Box>

      <Typography
        variant="body1"
        sx={{
          mt: { lg: 20, xs: 23 },
          mb: { lg: 0, xs: 4 },
          fontSize: { lg: 40, xs: 28 },
        }}
        color="#fff"
        fontWeight={500}
        textAlign={"center"}
      >
        {homePageData?.featuredStatsSection?.[0]?.sectionTitle ||
          "How Many Youths Have Been Trained"}
      </Typography>
      <Grid
        container
        spacing={3}
        sx={{ width: "95%", maxWidth: "1700px", margin: "0 auto", mb: 4 }}
      >
        {homePageData?.featuredStatsSection?.[0]?.stats.length > 0 &&
          homePageData.featuredStatsSection[0].stats.map((stat, index) => {
            console.log("icon stat:", stat);
            return (
              <Grid
                key={index}
                size={{ xs: 12, sm: 6, md: 3 }}
                textAlign={"center"}
              >
                <Box
                  sx={{
                    width: 100,
                    height: 100,
                    borderRadius: "50%",
                    mx: "auto",
                  }}
                >
                  <Box
                    component="img"
                    src={stat?.icon?.node?.sourceUrl}
                    alt={stat?.label}
                    sx={{ width: 100, height: 100, objectFit: "contain" }}
                  />
                </Box>
                <Typography
                  variant="h3"
                  color="#fff"
                  fontWeight={700}
                  fontSize={40}
                  textAlign={"center"}
                  mt={2}
                >
                  {stat.number}
                </Typography>
                <Typography
                  variant="body1"
                  color="#fff"
                  fontWeight={500}
                  fontSize={20}
                  textAlign={"center"}
                >
                  {stat.label}
                </Typography>
              </Grid>
            );
          })}
      </Grid>
    </Paper>
  );
};

export default YouthsTrained;
