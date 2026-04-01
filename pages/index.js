import React, { useEffect, useMemo, useState } from "react";
import Button from "@mui/material/Button";
import {
  Box,
  Grid,
  Paper,
  Stack,
  Typography,
  Container,
  TextField,
  Divider,
} from "@mui/material";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { useInView } from "react-intersection-observer";

import "swiper/css";
import "swiper/css/navigation";
import { useRouter } from "next/router";
import ImageFrameUploader from "./components/ImageFrameUploader";
import { getAllPosts, getHomePage } from "@/utils/apiCalls";
import {
  impactStoryDescriptions,
  latestNews,
} from "@/public/assets/fallbackData/homePageFallbackData";
import HeroSlider from "./components/HomePage/HeroSlider";
import SliderBottomCounter from "./components/HomePage/SliderBottomCounter";
import MissionVision from "./components/HomePage/MissionVision";
import MapSection from "./components/HomePage/MapSection";
import YouthsTrained from "./components/HomePage/YouthsTrained";
import ImpactStories from "./components/HomePage/ImpactStories";
import Quizzes from "./components/HomePage/Quizzes";
import NewsAndBlogs from "./components/HomePage/NewsAndBlogs";
import GetInvolved from "./components/HomePage/GetInvolved";
import Gallery from "./components/HomePage/Gallery";

function Home() {
  // const getInvolvedOptions = [
  //   {
  //     image: "/assets/group_icon.png",
  //     title: "Join a SUN Youth Network Bangladesh!",
  //     description:
  //       "We are seeking youth organization committed to improving nutrition.",
  //     button: "SUN Youth Network Member",
  //     link: "/youth-organization",
  //   },
  //   {
  //     image: "/assets/public_icon.png",
  //     title: "Attend an event",
  //     description:
  //       "Join over 242 Youth Organization committed to improving nutrition through the SUN Youth Network Network. Access exclusive resources, networking opportunities, and more.",
  //     button: "Events",
  //   },
  //   {
  //     image: "/assets/event_icon.png",
  //     title: "Learn more",
  //     description:
  //       " Latest Youth activities around nutrition and connect with like-minded individuals.",
  //     button: "Resource",
  //     link: "/what-we-do/gallery",
  //   },
  //   {
  //     image: "/assets/email_icon.png",
  //     title: "Sign Up for Newsletter",
  //     description:
  //       "Stay updated with the latest news, resources, and events from SUN Youth Network Network by subscribing to our monthly newsletter.",
  //     button: "Sign up",
  //   },
  // ];

  const { ref: genderRatioRef, inView: genderRatioInView } = useInView({
    triggerOnce: true, // The animation will only trigger once
    threshold: 0.3, // Trigger when 30% of the component is visible
  });

  const [homePageData, setHomePageData] = useState(null);

  const getHomePageData = async () => {
    try {
      const res = await getHomePage();
      const data = res?.data;

      const allSections = data?.pageBy?.homePage?.homeSections ?? [];

      const finalData = {
        pageTitle: data?.pageBy?.title ?? "",
        pageUri: data?.pageBy?.uri ?? "/",
        heroSlider: allSections.filter(
          (section) =>
            section.__typename === "HomePageHomeSectionsHeroSliderLayout",
        ),
        counterSection: allSections.filter(
          (section) =>
            section.__typename === "HomePageHomeSectionsCounterSectionLayout",
        ),
        missionSection: allSections.filter(
          (section) =>
            section.__typename === "HomePageHomeSectionsMissionSectionLayout",
        ),
        mapSection: allSections.filter(
          (section) =>
            section.__typename === "HomePageHomeSectionsMapSectionLayout",
        ),
        featuredStatsSection: allSections.filter(
          (section) =>
            section.__typename ===
            "HomePageHomeSectionsFeaturedStatsSectionLayout",
        ),
        impactStoriesSection: allSections.filter(
          (section) =>
            section.__typename ===
            "HomePageHomeSectionsImpactStoriesSectionLayout",
        ),
        quizSection: allSections.filter(
          (section) =>
            section.__typename === "HomePageHomeSectionsQuizSectionLayout",
        ),
        newsBlogsSection: allSections.filter(
          (section) =>
            section.__typename === "HomePageHomeSectionsNewsBlogsSectionLayout",
        ),
        getInvolvedSection: allSections.filter(
          (section) =>
            section.__typename ===
            "HomePageHomeSectionsGetInvolvedSectionLayout",
        ),
      };

      // console.log("Home Page Data:", finalData);
      // console.log("Counter Section:", finalData.counterSection);
      setHomePageData(finalData);
      return finalData;
    } catch (error) {
      console.error("Error fetching home page data:", error);
    }
  };

  useEffect(() => {
    getHomePageData();
  }, []);

  const [blogs, setBlogs] = useState();
  const getBlogs = async () => {
    try {
      const res = await getAllPosts();
      const data = res?.data;

      if (!data) {
        console.error("Failed to fetch ALL POSTS data");
        return;
      }

      setBlogs(data);
    } catch (error) {
      console.error("Error fetching ALL POSTS data:", error);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  const impactStories = blogs?.posts?.nodes
    ?.filter((post) =>
      post.categories?.nodes?.some((cat) => cat.name === "Impact Stories"),
    )
    .reverse()
    .slice(0, 3);

  const homeBlogs = blogs?.posts?.nodes
    ?.filter(
      (p) =>
        p.categories.nodes?.some((cat) => cat.name === "Impact Stories") &&
        p.categories.nodes?.some((cat) => cat.name === "News and blogs"),
    )
    ?.reverse()
    ?.slice(0, 4);

  console.log("blogs", homeBlogs);

  

  return (
    <Box bgcolor={"#fff"}>
      <HeroSlider homePageData={homePageData} />
      <SliderBottomCounter homePageData={homePageData} />
      <MissionVision homePageData={homePageData} />
      <MapSection homePageData={homePageData} />
      <YouthsTrained homePageData={homePageData} />
      <ImpactStories
        homePageData={homePageData}
        impactStories={impactStories}
      />
      <Quizzes homePageData={homePageData} />
      <NewsAndBlogs homePageData={homePageData} newsBlogs={homeBlogs} />
      <GetInvolved homePageData={homePageData} />
      <Gallery />
      <Box sx={{ pb: 8, width: "95%", margin: "0 auto", maxWidth: "1700px" }}>
        {/* <Typography variant="h4" sx={{ mt: 8, textAlign: 'center', fontWeight: 500, textTransform: "capitalize", fontSize: 40 }}>
          Gender Ratio
        </Typography>
        <Grid container spacing={2} ref={genderRatioRef}>

          <Grid size={{ md: 6, xs: 12 }} >
            <DemographicCards Title={" Training "} inView={genderRatioInView} />
          </Grid>
          <Grid size={{ md: 6, xs: 12 }} >
            <DemographicCards Title={"Beneficiary"} inView={genderRatioInView} />
          </Grid>
        </Grid> */}

        {/* Heading */}
        {/* <Typography variant="h4" align="center" sx={{ fontWeight: 700, my: { xs: 4, md: 8 } }}>
          Youth Organizations Involved
        </Typography> */}

        {/* Top stats row */}
        {/* <Grid container spacing={2} justifyContent="center" sx={{ mb: { xs: 6, md: 10 } }}>
          {stats.map((s, idx) => (
            <Grid key={idx} size={{ xs: 12, sm: 6, md: 3 }} sx={{ position: 'relative', minHeight: 90 }}>
            
              <Typography
                sx={{
                  position: 'absolute',
                  top: -10,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  fontSize: { xs: 64, md: 120 },
                  fontWeight: 800,
                  color: 'text.primary',
                  opacity: 0.07,
                  lineHeight: 1,
                  userSelect: 'none',
                  pointerEvents: 'none',
                }}
              >
                {s.num}
              </Typography>

            
              <Box sx={{ position: 'relative', zIndex: 2, textAlign: 'center', mt: { xs: 4, md: 4 } }}>
                <Typography sx={{ fontWeight: 700 }}>{s.label}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid> */}

        {/* Features row: icons + title + desc */}
        {/* <Grid container spacing={4} justifyContent="center">
          {features.map((f, idx) => (
            <Grid key={idx} size={{ xs: 12, sm: 6, md: 3 }}>
              <Box sx={{ textAlign: 'center', px: 2 }}>
                
                <Box
                  sx={{
                    width: 120,
                    height: 120,
                    borderRadius: '50%',
                    mx: 'auto',
                    mb: 3,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: theme.palette.action.hover, 
                    boxShadow: 1,
                  }}
                >
                  <img
                    src={f.icon}
                    alt={f.title}
                    style={{ width: 56, height: 56, objectFit: 'contain' }}
                  />
                </Box>

                <Typography sx={{ fontWeight: 700, color: theme.palette.primary.main, mb: 1 }}>
                  {f.title}
                </Typography>

                <Typography sx={{ color: 'text.secondary', fontSize: 13, lineHeight: 1.6 }}>
                  {f.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid> */}

        {/* <Typography variant="h6" sx={{ textAlign: 'center', fontWeight: 400, my: 4, }}>
          Information collected from or submitted by, the Civil Society network and other relevant stakeholders.
        </Typography> */}
      </Box>
    </Box>
  );
}

export default Home;
