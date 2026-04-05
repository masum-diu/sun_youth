import { fallbackMissionData } from "@/public/assets/fallbackData/homePageFallbackData";
import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import React, { useMemo } from "react";

const MissionVision = ({ homePageData }) => {
  // Memoize the mission data to prevent recalculation on every render
  const missionData = useMemo(() => {
    return homePageData?.missionSection?.length > 0
      ? homePageData.missionSection
      : fallbackMissionData;
  }, [homePageData?.missionSection]);

  return (
    <Box sx={{ width: "95%", margin: "0 auto", maxWidth: "1700px" }}>
      <Grid sx={{ mt: { lg: 10, xs: 3 } }} container spacing={3}>
        {missionData.map((option, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
            <Paper
              elevation={3}
              sx={{
                borderRadius: 2,
                height: "331px",
                overflow: "hidden",
                position: "relative",
                color: "#fff",
                cursor: "pointer",
                "&:hover .bg-zoom": {
                  transform: "scale(1.1)",
                },
              }}
            >
              {/* Background image layer */}
              <Box
                className="bg-zoom"
                sx={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `url('${option?.cardBackground?.node?.sourceUrl || "/assets/governace.jpg"}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  transition: "transform 0.4s ease",
                  zIndex: 0,
                }}
              />

              {/* Dark overlay */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(0,0,0,0.50)",
                  zIndex: 1,
                }}
              />

              {/* Content */}
              <Stack
                direction="column"
                spacing={2}
                justifyContent="flex-end"
                alignItems="flex-start"
                height="100%"
                sx={{ px: 3, pb: 4, pt: 2, position: "relative", zIndex: 2 }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    mt: 2,
                    fontWeight: 700,
                    textAlign: "center",
                    fontSize: 20,
                  }}
                >
                  {option?.cardTitle || "Title"}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ mt: 2, fontWeight: 500, fontSize: 14 }}
                >
                  {option?.cardDescription || "Description not available"}
                </Typography>
                {/* <Typography
          variant="body2"
          sx={{
            mt: 3,
            borderRadius: 0,
            py: 1.5,
            textTransform: "uppercase",
            fontSize: 14,
            fontWeight: 700,
            borderEndEndRadius: 8,
            borderEndStartRadius: 8,
            cursor: "pointer",
            color: "#f5821f",
          }}
        >
          {option?.button || "Learn More"}
        </Typography> */}
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MissionVision;
