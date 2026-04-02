import {
  impactStoryDescriptions,
  latestNews,
} from "@/public/assets/fallbackData/homePageFallbackData";
import { Box, Grid, Stack, Typography } from "@mui/material";
import React, { useMemo } from "react";
import NextLink from "next/link";

const NewsAndBlogs = ({ homePageData, newsBlogs }) => {
  const newsAndBlogs = useMemo(() => {
    if (
      homePageData?.newsBlogsSection &&
      homePageData.newsBlogsSection.length > 0
    ) {
      return homePageData.newsBlogsSection
        .map((section) => {
          const story = section.items?.nodes?.[0];
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

  console.log("newsBlogs", newsBlogs);

  return (
    <Box sx={{ pb: 8, width: "95%", margin: "0 auto", maxWidth: "1700px" }}>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          fontWeight: 500,
          mb: 4,
          mt:2,
          textTransform: "capitalize",
          fontSize: 40,
          color: "#B20933",
        }}
      >
        News and blogs
      </Typography>
      <Grid container spacing={3}>
        {newsBlogs
          ? newsBlogs.map((option, index) => (
              <Grid
                component={NextLink}
                href={"/resources/news-blogs/" + option?.slug}
                size={{ xs: 12, sm: 6, md: 3 }}
                sx={{
                  textDecoration: "none",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
                key={index}
              >
                <Box>
                  <img
                    src={option?.featuredImage?.node?.sourceUrl}
                    alt={option.title}
                    width={"100%"}
                  />
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
                    News
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
                    dangerouslySetInnerHTML={{ __html: option.excerpt }}
                  />
                </Stack>
              </Grid>
            ))
          : newsAndBlogs.map((option, index) => (
              <Grid
                component={NextLink}
                href={"/1234"}
                size={{ xs: 12, sm: 6, md: 3 }}
                sx={{
                  textDecoration: "none",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
                key={index}
              >
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
                </Stack>
              </Grid>
            ))}
      </Grid>
    </Box>
  );
};

export default NewsAndBlogs;
