import React, { useMemo, useState } from "react";
import BangladeshMap from "../BangladeshMap";
import { Box, Divider, Grid, Paper, Stack, Typography } from "@mui/material";
import { divisionMap, fallbackDivisionData } from "@/public/assets/fallbackData/homePageFallbackData";
import theme from "@/utils/theme";

const MapSection = ({ homePageData }) => {
      const [isOverTooltip, setIsOverTooltip] = useState(false);
    
      const getDivisionFromDistrict = (district) => {
    
    return divisionMap[district] || "Other";
  };
  const [hoveredInfo, setHoveredInfo] = useState({
    show: false,
    name: "",
    data: null,
    x: 0,
    y: 0,
  });
  const divisionData = useMemo(() => {
    if (
      homePageData?.mapSection?.[0]?.points &&
      homePageData.mapSection[0].points.length > 0
    ) {
      const transformedData = {};

      homePageData.mapSection[0].points.forEach((point) => {
        const division = getDivisionFromDistrict(point.district);

        if (!transformedData[division]) {
          transformedData[division] = [];
        }

        transformedData[division].push({
          category: point.category,
          location: point.location,
          district: point.district,
          date: point.trainingDate,
          participants: point.participants,
        });
      });

      console.log("Transformed Division Data:", transformedData);
      return transformedData;
    }

    // Return fallback data if no API data available
    return fallbackDivisionData;
  }, [homePageData]);

  const handleMapHover = (divisionName, event) => {
    if (divisionData[divisionName]) {
      setHoveredInfo({
        show: true,
        name: divisionName,
        data: divisionData[divisionName],
        x: event.clientX,
        y: event.clientY,
      });
    }
  };

  const handleMapLeave = () => {
    // Don't close if mouse is over tooltip
    if (!isOverTooltip) {
      setHoveredInfo({ show: false, name: "", data: null, x: 0, y: 0 });
    }
  };
  return (
    <Box bgcolor={"#f8f7f5"}>
      <Typography
        variant="body1"
        color="initial"
        fontWeight={700}
        fontSize={19}
        sx={{
          mt: { lg: 10, xs: 3 },
          bgcolor: "#f5821f",
          maxWidth: 873,
          textAlign: "right",
          pr: 5,
          py: 1,
          color: "#fff",
        }}
      >
        The map of SUN Youth Network Bangladesh
      </Typography>{" "}
      <Grid
        container
        spacing={3}
        sx={{
          width: "95%",
          maxWidth: "1700px",
          margin: "0 auto",
          position: "relative",
          flexDirection: { lg: "row", xs: "column-reverse" },
        }}
      >
        {hoveredInfo.show && (
          <Paper
            elevation={4}
            onMouseEnter={() => setIsOverTooltip(true)}
            onMouseLeave={() => {
              setIsOverTooltip(false);
              setHoveredInfo({
                show: false,
                name: "",
                data: null,
                x: 0,
                y: 0,
              });
            }}
            sx={{
              position: "absolute",
              top: `${hoveredInfo.y - 150}px`,
              left: `${hoveredInfo.x - 450}px`,
              p: 2,
              bgcolor: "rgba(0, 0, 0, 0.8)",
              color: "white",
              borderRadius: 2,
              pointerEvents: "auto", // Changed to auto so it's scrollable
              zIndex: 1300,
              minWidth: 200,
              maxHeight: 300,
              overflowY: "auto",
              "&::-webkit-scrollbar": {
                width: "8px",
              },
              "&::-webkit-scrollbar-track": {
                background: "rgba(255,255,255,0.1)",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "rgba(255,255,255,0.3)",
                borderRadius: "4px",
                "&:hover": {
                  background: "rgba(255,255,255,0.5)",
                },
              },
            }}
          >
            <Typography
              variant="h6"
              sx={{ color: theme.palette.primary.main, fontWeight: "bold" }}
            >
              {hoveredInfo.name}
            </Typography>
            {Array.isArray(hoveredInfo.data) && hoveredInfo.data.length > 0 ? (
              hoveredInfo.data.map((item, index) => (
                <Box key={index} sx={{ mt: index > 0 ? 1.5 : 0 }}>
                  <Typography variant="body2" color="#fff">
                    Category: {item.category}
                  </Typography>
                  <Typography variant="body2" color="#fff">
                    Location: {item.location}
                  </Typography>
                  <Typography variant="body2" color="#fff">
                    District: {item.district}
                  </Typography>
                  <Typography variant="body2" color="#fff">
                    Training Date: {item.date}
                  </Typography>
                  <Typography variant="body2" color="#fff">
                    Total Participants: {item.participants}
                  </Typography>
                  {index < hoveredInfo.data.length - 1 && (
                    <Divider sx={{ my: 1, bgcolor: "rgba(255,255,255,0.5)" }} />
                  )}
                </Box>
              ))
            ) : (
              <Typography variant="body2" color="#fff">
                No data available
              </Typography>
            )}
          </Paper>
        )}

        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Stack
            direction={"column"}
            spacing={4}
            justifyContent={"center"}
            alignItems={"flex-start"}
            height={"100%"}
            sx={{ width: "100%", pr: 0 }}
          >
            <Typography
              sx={{ fontSize: { lg: 35, xs: 24 }, pt: { lg: 0, xs: "30px" } }}
              variant="body1"
              color="initial"
              fontWeight={500}
            >
              {homePageData?.mapSection[0]?.leftTitle ||
                "Food system youth leadership Training"}
            </Typography>
            <Typography
              sx={{ pb: 2, width: "122%" }}
              variant="body1"
              color="#7c7c7c"
              textAlign={"justify"}
            >
              {homePageData?.mapSection[0]?.leftDescription ||
                `The Food Systems Youth Leadership Training program is designed
                to nurture young leaders and inspire meaningful, hands-on
                engagement in food systems through a structured and
                participatory approach. The program begins with a careful
                selection process to identify motivated and committed youth
                participants. This is followed by an intensive three-day
                training that enhances leadership capacities, strengthens
                systems thinking, and builds practical knowledge of food
                systems. After the training, participants implement a six-month
                community-based collective action project, where they apply
                their learning to address real-world food system challenges.
                Throughout the process, continuous follow-up, monitoring, and
                learning documentation are conducted to track progress, capture
                key insights, and ensure impactful, sustainable outcomes.s`}
            </Typography>
            {/* <Stack direction={"row"} spacing={2} width={"100%"} >
                <Button variant="contained" color="error" fontWeight={500}  >
                  full view
                </Button>
              </Stack> */}
          </Stack>
        </Grid>
        <Grid sx={{ mt: { lg: 0, xs: 10 } }} size={{ xs: 11, sm: 6, md: 8 }}>
          {/* <img src="/assets/bangladesh.png" alt="" width={"100%"} /> */}
          <BangladeshMap
            onSelect={(division) => console.log(division)}
            onHover={handleMapHover}
            onLeave={handleMapLeave}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MapSection;
