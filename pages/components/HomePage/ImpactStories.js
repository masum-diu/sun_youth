import {
  impactStoryDescriptions,
  latestNews,
} from "@/public/assets/fallbackData/homePageFallbackData";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React, { useMemo } from "react";
import NextLink from "next/link";

const ImpactStories = ({ homePageData }) => {
  const impactStories = useMemo(() => {
    if (
      homePageData?.impactStoriesSection &&
      homePageData.impactStoriesSection.length > 0
    ) {
      return homePageData.impactStoriesSection
        .map((section) => {
          const story = section.stories?.nodes?.[0];
          if (story) {
            return {
              image:
                story.featuredImage?.node?.sourceUrl ||
                "/assets/minhajul/author.JPG",
              title: story.title,
              description: impactStoryDescriptions[story.title] || story.title,
              button: story.uri || "/impact-stories/1",
              subtile: "News",
            };
          }
          return null;
        })
        .filter(Boolean);
    }
    // Return fallback static data if no API data
    return latestNews;
  }, [homePageData]);

  

  return (
    <Box sx={{ py: 8, width: "95%", margin: "0 auto", maxWidth: "1700px" }}>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          fontWeight: 500,
          mb: 4,
          textTransform: "capitalize",
          fontSize: 40,
          color: "#B20933",
        }}
      >
        Impact Stories
      </Typography>

      <Grid container spacing={3}>
        {impactStories.slice(0, 3).map((option, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
            <Box>
              <img src={option.image} alt={option.title} width={"100%"} />
            </Box>
            <Stack direction="column" spacing={2}>
              <Typography
                variant="h6"
                sx={{
                  mt: 2,
                  fontWeight: 700,
                  fontSize: 17,
                  color: "#f5821f",
                }}
              >
                {option.subtile}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  mt: 2,
                  fontWeight: 700,
                  fontSize: 20,
                  color: "#B20933",
                }}
              >
                {option.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  mt: 2,
                  color: "text.secondary",
                  fontWeight: 500,
                  fontSize: 16,
                }}
              >
                {option.description}
              </Typography>

              <Button
                component={NextLink}
                href={option.button}
                size="small"
                sx={{
                  color: "#f5821f",
                  fontWeight: "bold",
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                Read More
              </Button>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ImpactStories;
