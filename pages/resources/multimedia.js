import React, { useEffect, useState } from "react";
import { Box, Typography, Stack, Grid, Card, CardContent } from "@mui/material";
import { useRouter } from "next/router";
import { getMultimediaPage } from "@/utils/apiCalls";

// Sample video data. Replace with your actual YouTube video IDs and details.
const videoData = [
  {
    id: "42EBvazc5AU",
    title: "Scaling Up Nutrition (Sun) Youth Network Bangladesh Launched",
    description:
      "The Scaling Up Nutrition (Sun) Youth Network Bangladesh was officially launched on December 8, 2024, in Dhaka, marking a significant step towards empowering young leaders in the fight against malnutrition.",
  },
  {
    id: "vCNLrZHQ_1I",
    title:
      "PUSHTI Canteen Launched in Lalmonirhat | Ensuring Nutritious Food for Students",
    description:
      "To promote safe and nutritious meals in educational institutions, the PUSHTI Canteen initiative was officially inaugurated on January 15, 2025, at the Lalmonirhat Deputy Commissioner’s Office.",
  },
  {
    id: "tfdMZ0PhYUE",
    title:
      "Food Systems Youth Leadership Training (TOT) | Dhaka Final Highlights",
    description:
      "The Food Systems Youth Leadership Training, organized under the SUN Youth Network Network Bangladesh with support from GAIN and the Ministry of Health and Family Welfare, brought together passionate young leaders from across the country for a transformative 4-day residential program",
  },
];

function MultimediaPage() {
  const [pageData, setPageData] = useState();
  const router = useRouter();

  const getYoutubeId = (url) => {
    if (!url) return "";

    const regExp =
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&?/]+)/;
    const match = url.match(regExp);

    return match ? match[1] : "";
  };

  const parseMultimediaSection = (sections) => {
    return sections.reduce(
      (acc, item) => {
        switch (item.__typename) {
          case "MultimediaMultimediaSectionHeaderSectionLayout":
            acc.headerTitle = item.title || "";
            break;

          case "MultimediaMultimediaSectionMutimediaGallerySectionLayout":
            acc.galleryTitle = item.title || "";
            break;

          case "MultimediaMultimediaSectionMediaSectionLayout":
            acc.videos.push({
              id: getYoutubeId(item.videoLink?.url),
              title: item.mediaTitle || item.videoLink?.title || "",
              description: item.description || "",
              url: item.videoLink?.url || "",
              target: item.videoLink?.target || "",
            });
            break;

          default:
            break;
        }

        return acc;
      },
      {
        headerTitle: "",
        galleryTitle: "",
        videos: [],
      },
    );
  };

  const getPageData = async () => {
    try {
      const res = await getMultimediaPage();
      const data = res?.data;

      if (!data) {
        console.error("Failed to fetch multimedia page data");
        return;
      }

      const rawSections = data?.page?.multimedia?.multimediaSection || [];
      const parsedData = parseMultimediaSection(rawSections);

      setPageData(parsedData);
    } catch (error) {
      console.error("Error fetching multimedia page data:", error);
    }
  };

  useEffect(() => {
    getPageData();
  }, []);

  console.log(pageData);
  return (
    <React.Fragment>
      <Box
        sx={{
          bgcolor: "#f5821f",
          height: 200,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          color: "#fff",
        }}
      >
        <Stack
          direction={"row"}
          alignItems="center"
          justifyContent="space-between"
          sx={{ width: "95%", maxWidth: "1700px", margin: "0 auto" }}
        >
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
             {pageData?.headerTitle || "Loading..."}
          </Typography>
          {/* {router?.asPath
              ?.split("-")
              ?.map(word => word.charAt(0).toUpperCase() + word.slice(1))
              ?.join(" ")} */}
        </Stack>
      </Box>

      <Box sx={{ width: "95%", maxWidth: "1700px", margin: "40px auto" }}>
        <Typography
          variant="h4"
          component="h1"
          sx={{ fontWeight: "bold", mb: 4 }}
        >
          {pageData?.galleryTitle || "Multimedia Gallery"}
        </Typography>
        <Grid container spacing={4}>
          {pageData?.videos?.map((video) => (
            <Grid key={video.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: 3,
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    paddingTop: "56.25%" /* 16:9 Aspect Ratio */,
                  }}
                >
                  <iframe
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      border: 0,
                    }}
                    src={`https://www.youtube.com/embed/${getYoutubeId(video.url)}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="h2"
                    sx={{ fontWeight: "bold" }}
                  >
                    {video.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {video.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </React.Fragment>
  );
}

export default MultimediaPage;
