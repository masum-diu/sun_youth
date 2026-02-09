import { fallbackCounters } from "@/public/assets/fallbackData/homePageFallbackData";
import { Grid, Typography } from "@mui/material";
import React from "react";

const SliderBottomCounter = ({ homePageData }) => {
  const counterData =
    homePageData?.counterSection?.length > 0
      ? homePageData.counterSection
      : fallbackCounters;

  return (
    <Grid
      container
      spacing={2}
      sx={{ bgcolor: "#f5821f", color: "#fff", py: 4 }}
    >
      {counterData?.map((counter, index) => (
        <Grid key={index} size={{ md: 3, xs: 12 }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, fontSize: 50, textAlign: "center" }}
          >
            {counter.countNumber}
          </Typography>
          <Typography
            variant="body1"
            sx={{ mt: 1, textAlign: "center", fontWeight: 400, fontSize: 20 }}
          >
            {counter.countLabel}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default SliderBottomCounter;