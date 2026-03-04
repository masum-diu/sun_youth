import { getInvolvedFallback } from "@/public/assets/fallbackData/homePageFallbackData";
import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import React, { useMemo } from "react";

const GetInvolved = ({ homePageData }) => {
  const getInvolvedOptions = useMemo(() => {
    // Check if getInvolvedSection exists and has cards
    if (
      homePageData?.getInvolvedSection?.[0]?.cards &&
      homePageData.getInvolvedSection[0].cards.length > 0
    ) {
      return homePageData.getInvolvedSection[0].cards.map((card) => {
        return {
          // Mapping API 'icon' to component 'image'
          image: card.icon?.node?.sourceUrl || "/assets/group_icon.png",
          title: card.title || "",
          description: card.description || "",
          // Mapping API 'buttonText' to component 'button'
          button: card.buttonText || "Learn More",
          // Mapping API 'buttonLink.url' to component 'link'
          link: card.buttonLink?.url || "#",
        };
      });
    }

    // Fallback static data
    return getInvolvedFallback;
  }, [homePageData]);
  return (
    <Box sx={{ py: 8, width: "95%", margin: "0 auto", maxWidth: "1700px" }}>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          fontWeight: 700,
          mb: 15,
          color: "#B20933",
        }}
      >
        Get Involved
      </Typography>

      <Grid sx={{ gap: { lg: 3, xs: "24px" } }} container spacing={3}>
        {getInvolvedOptions.map((option, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Paper
              key={index}
              elevation={3}
              sx={{
                position: "relative",
                pt: 6,
                pb: 0,
                borderRadius: 2,
                height: {sm:"450px",md:"580px" ,lg:"400px", xl:"520px"},
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: { xl: -80, lg: -50, xs:20 },
                  left: "50%",
                  transform: "translateX(-50%)",
                  bgcolor: "#f7f3ef",
                  width: { xl: "100%", xs: "100px" },
                  maxWidth: "178px",
                  height: { xl: 178, xs: 100 },
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
                }}
              >
                <Box
                  sx={{
                    width: { xl: "100px", xs: "50px" },
                    height: { xl: "100px", xs: "50px" },
                    objectFit: "contain",
                  }}
                  component="img"
                  src={option.image}
                  alt={option.title}
                />
              </Box>
              <Stack
                direction="column"
                spacing={2}
                height={"100%"}
                sx={{ px: 3, alignItems: 'center', marginTop: {xl:'0px',lg:'60px', xs:'90px'}, justifyContent: {xl:'center'} }}
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
                  {option.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    mt: 2,
                    color: "text.secondary",
                    fontWeight: 500,
                    fontSize: 16,
                    textAlign: 'center'
                  }}
                >
                  {option.description}
                </Typography>
              </Stack>
              <Button
                variant="contained"
  fullWidth
  onClick={() => router.push(option.link)}
  sx={{
    mt: 3,
    backgroundColor: "#f5821f",
    "&:hover": { backgroundColor: "#b20933" },
    borderRadius: 0,
    py: 1.5,
    textTransform: "capitalize",
    fontSize: 18,
    fontWeight: 700,
    borderEndEndRadius: 8,
    borderEndStartRadius: 8,
    height: 43,
    textWrap: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    lineHeight: "4px",  
    display: "block",      // needed for textOverflow to work
      // vertically centers text since display is now block
  }}
              >
                {option.button}
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default GetInvolved;
