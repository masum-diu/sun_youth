import { fallbackHeroSlides } from "@/public/assets/fallbackData/homePageFallbackData";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroSlider = ({ homePageData }) => {
  const heroSliderData =
    homePageData?.heroSlider?.length > 0
      ? homePageData.heroSlider
      : fallbackHeroSlides;
      
  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={false}
      modules={[ Navigation, Autoplay]}
    >
      {heroSliderData.map((slide, index) => {
        const firstEvent = slide.upcomingEvents?.nodes?.[0];

        return (
          <SwiperSlide key={index}>
            <Box
              sx={{
                backgroundImage: `
                linear-gradient(
                  rgba(38, 37, 37, 0.5),
                  rgba(8, 8, 8, 0.5)
                ),
                url('${slide.slideImage?.node?.sourceUrl || "/assets/slider1.jpg"}')
              `,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: "100%",
                minHeight: { lg: "85vh", xs: "652px" },
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
              }}
              role="img"
              aria-label={slide.slideImage?.node?.altText || "Hero background"}
            >
              <Stack
                sx={{ textAlign: { lg: "start", xs: "center" } }}
                direction={"column"}
                spacing={3}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 500,
                    fontSize: { lg: 60, xs: 30 },
                    color: "#FFF",
                  }}
                >
                  {slide.slideTitle || "SUN Youth Network Bangladesh"}
                </Typography>

                {slide.slideButton?.url && (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: { lg: "flex-start", xs: "center" },
                    }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => router.push(slide.slideButton.url)}
                      sx={{
                        width: 178,
                        height: 56,
                        fontSize: 17,
                        fontWeight: "500",
                        backgroundColor: "#b20933",
                        "&:hover": { backgroundColor: "#8a0726" },
                      }}
                    >
                      {slide.slideButton.title || "LEARN MORE"}
                    </Button>
                  </Box>
                )}

                {firstEvent && (
                  <Stack justifyContent={"flex-end"} alignItems={"flex-end"}>
                    <Paper
                      elevation={0}
                      sx={{
                        mt: 5,
                        px: 4,
                        py: 2,
                        backgroundColor: "#ffff",
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 0,
                        mx: { lg: "start", xs: "auto" },
                        width: { lg: 1008, xs: "fit-content" },
                      }}
                    >
                      <Stack
                        sx={{
                          flexDirection: { lg: "row", xs: "column" },
                          justifyContent: "space-between",
                          alignItems: { lg: "start", xs: "center" },
                          alignContent: { lg: "center", xs: "center" },
                        }}
                        spacing={2}
                      >
                        <Stack
                          sx={{
                            flexDirection: { lg: "row", xs: "column" },
                            alignItems: { lg: "start", xs: "center" },
                            justifyContent: "center",
                            alignContent: { lg: "center", xs: "center" },
                            gap: { lg: 3, xs: 0 },
                          }}
                          spacing={4}
                        >
                          <Box
                            component="img"
                            src={
                              firstEvent.featuredImage?.node?.sourceUrl ||
                              "/assets/slider1.jpg"
                            }
                            alt={
                              firstEvent.featuredImage?.node?.altText ||
                              "Event image"
                            }
                            sx={{ width: "143px", objectFit: "cover" }}
                          />
                          <Typography
                            variant="h6"
                            sx={{ fontWeight: 700, fontSize: 19 }}
                          >
                            {slide.upcomingEventsTitle || firstEvent.title}
                          </Typography>
                        </Stack>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 700,
                            fontSize: { lg: 40, xs: 20 },
                            color: "#f5821f",
                          }}
                        >
                          Upcoming Events
                        </Typography>
                      </Stack>
                    </Paper>
                  </Stack>
                )}
              </Stack>
            </Box>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HeroSlider;