import React, { useState } from "react";
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
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import EventIcon from '@mui/icons-material/Event';
import GroupIcon from '@mui/icons-material/Group';
import PublicIcon from '@mui/icons-material/Public';
import { useInView } from "react-intersection-observer";

import theme from "@/utils/theme";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import BangladeshMap from "./components/BangladeshMap";
import NextLink from "next/link";
import { useRouter } from "next/router";
import ImageFrameUploader from "./components/ImageFrameUploader";

function Home() {
  const router = useRouter();
  const getInvolvedOptions = [
    {
      image: "/assets/group_icon.png",
      title: "Join a SUN Youth Network Bangladesh!",
      description:
        "We are seeking youth organization committed to improving nutrition.",
      button: "SUN Youth Network Member",
      link: "/youth-organization"
    },
    {
      image: "/assets/public_icon.png",
      title: "Attend an event",
      description:
        "Join over 242 Youth Organization committed to improving nutrition through the SUN Youth Network Network. Access exclusive resources, networking opportunities, and more.",
      button: "Events",
    },
    {
      image: "/assets/event_icon.png",
      title: "Learn more",
      description:
        " Latest Youth activities around nutrition and connect with like-minded individuals.",
      button: "Resource",
      link: "/what-we-do/gallery"
    },
    {
      image: "/assets/email_icon.png",
      title: "Sign Up for Newsletter",
      description:
        "Stay updated with the latest news, resources, and events from SUN Youth Network Network by subscribing to our monthly newsletter.",
      button: "Sign up",
    },
  ];
  const listItems = [
    {
      image: "/assets/governace.jpg",
      title: "Mission",
      description:
        "The mission of the SUN Youth Network Network Bangladesh is to empower and mobilize youth and adolescents to lead meaningful action on nutrition, strengthen youth voices in policy and community spaces, and support sustained commitment to advancing national and global nutrition goals.",

    },
    {
      image: "/assets/governace.jpeg",
      title: "Governance",
      description:
        "SUN Youth Network Network Bangladesh consists of youth-led organizations, youth-led clubs in universities and communities who are intensively working and interested in contributing to nutrition outcome development.",

    },
    {
      image: "/assets/governace2.jpeg",
      title: "Focal Point",
      description:
        "The focal point of the SUN Youth Network Network Bangladesh serves as the primary coordinator and liaison, ensuring effective communication, coordination, and implementation of network activities in alignment with national priorities and the Sun Movement.",

    },
  ];
  const latestNews = [
    {
      image: "/assets/minhajul/author.JPG",

      title: "Nutritious Khichuri for 10 Taka",
      description:
        "Nutritious Khichuri for 10 Taka: How a Young Boy from Lalmonirhat is Feeding Hope",
      button: "/impact-stories/1",
      subtile: "News",
    },
    {
      image: "/assets/joya-rani/author.jpg",
      title: "HeartWise Nutrition",
      description:
        "HeartWise Nutrition: A Young Leader’s Journey to Make Nutrition Inclusive in Bangladesh",
      button: "/impact-stories/2",
      subtile: "News",
    },
    {
      image: "/assets/rabby/1.jpg",
      title: "Reviving the Soul of the Soil",
      description:
        "Reviving the Soul of the Soil: Rabby’s Journey to Restoring Land and Hope in Sirajganj",
      button: "/impact-stories/3",
      subtile: "News",
    },
    {
      image: "/assets/faizur/author.jpg",
      title: "From Market Stalls to Mindsets",
      description:
        "From Market Stalls to Mindsets: How One Youth Is Transforming Diets in Bangladesh",
      button: "/impact-stories/4",
      subtile: "News",
    },
  ];

  const stats = [
    { num: "", label: "Projects" },
    { num: "", label: "Locations" },
    { num: "10", label: "Years" },
    { num: 15, label: "Countries" },
  ],
    features = [
      {
        icon: "/assets/goal.png",
        title: "Lorem Ipsum is simply dummy",
        desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      },
      {
        icon: "/assets/goal.png",
        title: "Lorem Ipsum is simply dummy",
        desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      },
      {
        icon: "/assets/goal.png",
        title: "Lorem Ipsum is simply dummy",
        desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      },
      {
        icon: "/assets/goal.png",
        title: "Lorem Ipsum is simply dummy",
        desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      },
    ];

  const { ref: genderRatioRef, inView: genderRatioInView } = useInView({
    triggerOnce: true, // The animation will only trigger once
    threshold: 0.3, // Trigger when 30% of the component is visible
  });

  const [hoveredInfo, setHoveredInfo] = useState({
    show: false,
    name: "",
    data: null,
    x: 0,
    y: 0,
  });

  const [gallery, setGallery] = useState([])
  const handleAddToGallery = (dataUrl) => {
    setGallery((prev) => [dataUrl, ...prev])
  }

  // Sample data for divisions, you can replace this with your actual data
  const divisionData = {
    Rangpur: [
      {
        category:
          "Food Systems Youth Leadership Training (Community Level Training)",
        location: "Panchagarh",
        district: "Panchagarh",
        date: "22, 23, 24 February 2024",
        participants: 30,
      },
      {
        category: "Training of Trainers (TOT)",
        location: "Rangpur",
        district: "Rangpur",
        date: "30 April – 03 May 2025",
        participants: 30,
      },
      {
        category: "Food Systems Youth Leadership Training",
        location: "Lalmonirhat",
        district: "Lalmonirhat",
        date: "10, 11, 12 April 2025",
        participants: 30,
      },
      {
        category: "Food Systems Youth Leadership Training",
        location: "Dinajpur",
        district: "Dinajpur",
        date: "05, 06, 07 September 2025",
        participants: 30,
      },
      {
        category: "Food Systems Youth Leadership Training",
        location: "Bogura",
        district: "Bogura",
        date: "06, 07, 08 November 2025",
        participants: 30,
      },
      {
        category: "Food Systems Youth Leadership Training",
        location: "Begum Rokeya University, Rangpur",
        district: "Rangpur",
        date: "23, 24, 25 November 2026",
        participants: 36,
      },
      {
        category: "Food Systems Youth Leadership Training",
        location: "Carmichael College, Rangpur",
        district: "Rangpur",
        date: "02, 03, 04 December 2025",
        participants: 35,
      },
    ],

    Dhaka: [
      {
        category: "Food Systems Youth Leadership Training",
        location: "Bishwo Shahitto Kendro",
        district: "Dhaka",
        date: "14, 15, 16 September 2024",
        participants: 30,
      },
      {
        category: "Training of Trainers (TOT)",
        location: "Dhaka",
        district: "Dhaka",
        date: "06–09 December 2024",
        participants: 25,
      },
      {
        category: "Food Systems Youth Leadership Training",
        location: "Daffodil International University",
        district: "Dhaka",
        date: "26–28 January 2025",
        participants: 30,
      },
      {
        category: "Food Systems Youth Leadership Training",
        location: "Sher-e-Bangla Agricultural University",
        district: "Dhaka",
        date: "10–12 April 2025",
        participants: 30,
      },
      {
        category: "Food Systems Youth Leadership Training",
        location: "DUET, Gazipur",
        district: "Gazipur",
        date: "12–14 April 2025",
        participants: 33,
      },
      {
        category: "Food Systems Youth Leadership Training",
        location: "State University",
        district: "Dhaka",
        date: "09–11 October 2025",
        participants: 30,
      },
      {
        category: "Food Systems Youth Leadership Training",
        location: "Manikganj",
        district: "Manikganj",
        date: "14–16 November 2025",
        participants: 35,
      },
    ],

    Chattogram: [
      {
        category: "Food Systems Youth Leadership Training",
        location: "CVASU",
        district: "Chattogram",
        date: "06–08 February 2025",
        participants: 25,
      },
      {
        category: "Food Systems Youth Leadership Training",
        location: "Cox's Bazar International University",
        district: "Cox's Bazar",
        date: "27 Feb – 01 March 2025",
        participants: 22,
      },
      {
        category: "Food Systems Youth Leadership Training",
        location: "Noakhali",
        district: "Noakhali",
        date: "14–16 September 2025",
        participants: 33,
      },
      {
        category: "Food Systems Youth Leadership Training",
        location: "Bandarban",
        district: "Bandarban",
        date: "22–24 September 2025",
        participants: 28,
      },
      {
        category: "Food Systems Youth Leadership Training",
        location: "Cumilla",
        district: "Cumilla",
        date: "02–04 December 2025",
        participants: 36,
      },
    ],

    Khulna: [
      {
        category: "Food Systems Youth Leadership Training",
        location: "Khulna University",
        district: "Khulna",
        date: "30 Jan – 01 Feb 2025",
        participants: 31,
      },
      {
        category: "Food Systems Youth Leadership Training",
        location: "Jhenaidah",
        district: "Jhenaidah",
        date: "12–14 September 2025",
        participants: 31,
      },
      {
        category: "Food Systems Youth Leadership Training",
        location: "Jessore",
        district: "Jessore",
        date: "19–21 November 2025",
        participants: 35,
      },
      {
        category: "Food Systems Youth Leadership Training",
        location: "Satkhira (Tala)",
        district: "Satkhira",
        date: "17–19 December 2025",
        participants: 36,
      },
    ],

    Barishal: [
      {
        category: "Food Systems Youth Leadership Training",
        location: "University of Barishal",
        district: "Barishal",
        date: "26–28 February 2025",
        participants: 35,
      },
      {
        category: "Food Systems Youth Leadership Training",
        location: "Patuakhali Science & Technology University",
        district: "Patuakhali",
        date: "13–15 April 2025",
        participants: 33,
      },
    ],

    Sylhet: [
      {
        category: "Food Systems Youth Leadership Training",
        location: "Habiganj",
        district: "Habiganj",
        date: "26–28 February 2025",
        participants: 30,
      },
      {
        category: "Food Systems Youth Leadership Training",
        location: "Sylhet Agricultural University",
        district: "Sylhet",
        date: "16–18 October 2025",
        participants: 29,
      },
    ],

    Rajshahi: [
      {
        category: "Food Systems Youth Leadership Training",
        location: "Rajshahi University",
        district: "Rajshahi",
        date: "28–30 August 2025",
        participants: 30,
      },
      {
        category: "Food Systems Youth Leadership Training",
        location: "Pabna",
        district: "Pabna",
        date: "10–12 December 2025",
        participants: 35,
      },
    ],
  };

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
    setHoveredInfo({ show: false, name: "", data: null, x: 0, y: 0 });
  };

  const pins = {
    Rangpur: [
      { cx: 325, cy: 110, label: "Dinajpur" },
      { cx: 300, cy: 70, label: "Panchagarh" },
      { cx: 355, cy: 90, label: "Lalmonirhat" },
      { cx: 330, cy: 180, label: "Bogura" },
    ],
    Chattogram: [
      // Corrected from 'Chittagong' to match data key
      { cx: 480, cy: 300, label: "Cumilla" },
      { cx: 460, cy: 330, label: "Noakhali" },
      { cx: 530, cy: 380, label: "CVASU" },
      { cx: 560, cy: 430, label: "Bandarban" },
      { cx: 530, cy: 480, label: "Cox's Bazar" },
    ],
    Dhaka: [
      { cx: 410, cy: 280, label: "Dhaka" },
      { cx: 420, cy: 250, label: "Gazipur" },
      { cx: 380, cy: 290, label: "Manikganj" },
    ],
    Khulna: [
      { cx: 350, cy: 360, label: "Khulna" },
      { cx: 330, cy: 320, label: "Jhenaidah" },
      { cx: 320, cy: 340, label: "Jessore" },
      { cx: 330, cy: 400, label: "Satkhira" },
    ],
    Barisal: [
      { cx: 410, cy: 380, label: "Barishal" },
      { cx: 420, cy: 430, label: "Patuakhali" },
    ],
    Sylhet: [
      { cx: 510, cy: 200, label: "Sylhet" },
      { cx: 490, cy: 230, label: "Habiganj" },
    ],
    Rajshahi: [
      { cx: 290, cy: 210, label: "Rajshahi" },
      { cx: 350, cy: 230, label: "Pabna" },
    ],
  };
  return (
    <Box bgcolor={"#fff"}>
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 4000, // 4 seconds পর পর slide change
          disableOnInteraction: false, // user touch করলেও auto চলবে
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Pagination, Navigation, Autoplay]}
      >
        <SwiperSlide>
          <Box
            sx={{
              backgroundImage: `
            linear-gradient(
              rgba(38, 37, 37, 0.5),
              rgba(8, 8, 8, 0.5)
            ),
            url('/assets/slider1.jpg')
          `,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: { lg: "100%", xs: "436px" },
              minHeight: { lg: "85vh", xs: "652px" },
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
            }}
            role="img"
            aria-label="Hero background"
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
                SUN Youth Network Bangladesh
              </Typography>
              {/* <Typography
                variant="h3"
                sx={{
                  fontWeight: 600,
                  fontSize: { lg: 45, xs: 25 },
                  color: theme.palette.secondary.main,
                }}
              >
                THEN AND NOW
              </Typography> */}

              <Box
                sx={{
                  display: "flex",
                  justifyContent: { lg: "flex-start", xs: "center" },
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    width: 178,
                    height: 56,
                    fontSize: 17,
                    fontWeight: "500",
                    backgroundColor: "#b20933",
                    "&:hover": { backgroundColor: "#b20933" },
                  }}
                >
                  learn more
                </Button>
              </Box>
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
                    mx: { lg: 'start', xs: 'auto' },
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
                      <img
                        src="/assets/slider1.jpg"
                        style={{ width: "143px", objectFit: "cover" }}
                      />
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 700, fontSize: 19 }}
                      >
                        {/* 70th GEF Council <br />
                        Meeting – Dec. 2025 */}
                        FOSYLx Training – 2026
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
            </Stack>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Box
            sx={{
              backgroundImage: `
            linear-gradient(
              rgba(38, 37, 37, 0.5),
              rgba(8, 8, 8, 0.5)
            ),
            url('/assets/slider2.jpg')
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
            aria-label="Hero background"
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
                SUN Youth Network Bangladesh
              </Typography>
              {/* <Typography
                variant="h3"
                sx={{
                  fontWeight: 600,
                  fontSize: { lg: 45, xs: 25 },
                  color: theme.palette.secondary.main,
                }}
              >
                THEN AND NOW
              </Typography> */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { lg: "flex-start", xs: "center" },
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => (route)}
                  sx={{
                    width: 178,
                    height: 56,
                    fontSize: 17,
                    fontWeight: "500",
                    backgroundColor: "#b20933",
                    "&:hover": { backgroundColor: "#b20933" },

                  }}
                >
                  learn more
                </Button>
              </Box>
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
                    mx: 'auto',
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
                      <img
                        src="/assets/slider1.jpg"
                        style={{ width: "143px", objectFit: "cover" }}
                        alt=""
                      />
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 700, fontSize: 19 }}
                      >
                        {/* 70th GEF Council <br />
                      Meeting – Dec. 2025 */}
                        FOSYLx Training – 2026
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
            </Stack>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Box
            sx={{
              backgroundImage: `
            linear-gradient(
              rgba(38, 37, 37, 0.5),
              rgba(8, 8, 8, 0.5)
            ),
            url('/assets/slider3.jpg')
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
            aria-label="Hero background"
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
                SUN Youth Network Bangladesh
              </Typography>
              {/* <Typography
                variant="h3"
                sx={{
                  fontWeight: 600,
                  fontSize: { lg: 45, xs: 25 },
                  color: theme.palette.secondary.main,
                }}
              >
                THEN AND NOW
              </Typography> */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { lg: "flex-start", xs: "center" },
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    width: 178,
                    height: 56,
                    fontSize: 17,
                    fontWeight: "500",
                    backgroundColor: "#b20933",
                    "&:hover": { backgroundColor: "#b20933" },
                  }}
                >
                  learn more
                </Button>
              </Box>
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
                    mx: 'auto',
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
                      <img
                        src="/assets/slider1.jpg"
                        style={{ width: "143px", objectFit: "cover" }}
                      />
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 700, fontSize: 19 }}
                      >
                        {/* 70th GEF Council <br />
                      Meeting – Dec. 2025 */}
                        FOSYLx Training – 2026
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
            </Stack>
          </Box>
        </SwiperSlide>
      </Swiper>

      <Grid
        container
        spacing={2}
        sx={{ bgcolor: "#f5821f", color: "#fff", py: 4 }}
      >
        <Grid size={{ md: 3, xs: 12 }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, fontSize: 50, textAlign: "center" }}
          >
            55
          </Typography>
          <Typography
            variant="body1"
            sx={{ mt: 1, textAlign: "center", fontWeight: 400, fontSize: 20 }}
          >
            Facilitators Trained
          </Typography>
        </Grid>
        <Grid size={{ md: 3, xs: 12 }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, fontSize: 50, textAlign: "center" }}
          >
            1518
          </Typography>
          <Typography
            variant="body1"
            sx={{ mt: 1, textAlign: "center", fontWeight: 400, fontSize: 20 }}
          >
            Youth Capacitated
          </Typography>
        </Grid>
        <Grid size={{ md: 3, xs: 12 }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, fontSize: 50, textAlign: "center" }}
          >
            214
          </Typography>
          <Typography
            variant="body1"
            sx={{ mt: 1, textAlign: "center", fontWeight: 400, fontSize: 20 }}
          >
            Youth-Led Collective Actions
          </Typography>
        </Grid>
        <Grid size={{ md: 3, xs: 12 }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, fontSize: 50, textAlign: "center" }}
          >
            40
          </Typography>
          <Typography
            variant="body1"
            sx={{ mt: 1, textAlign: "center", fontWeight: 400, fontSize: 20 }}
          >
            Districts
          </Typography>
        </Grid>
      </Grid>

      {/* this section get involved */}
      <Box sx={{ width: "95%", margin: "0 auto", maxWidth: "1700px" }}>
        <Grid sx={{ mt: { lg: 10, xs: 3 } }} container spacing={3}>
          {listItems.map((option, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Paper
                key={index}
                elevation={3}
                sx={{
                  pt: 2,
                  pb: 4,
                  borderRadius: 2,
                  height: "331px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                  backgroundImage: `
      linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.6),
        rgba(0, 0, 0, 0.94)
      ),
      url('${option.image}')
    `,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  color: "#fff",
                }}
              >
                <Stack
                  direction="column"
                  spacing={2}
                  justifyContent={"flex-end"}
                  alignItems={"flex-start"}
                  height={"100%"}
                  sx={{ px: 3 }}
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
                    sx={{ mt: 2, fontWeight: 500, fontSize: 14 }}
                  >
                    {option.description}
                  </Typography>
                  <Typography
                    variant="body2"
                    fullWidth
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
                    {option.button}
                  </Typography>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
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
              sx={{
                position: "absolute",
                top: `${hoveredInfo.y - 150}px`, // Adjust position relative to cursor
                left: `${hoveredInfo.x - 450}px`, // Adjust position relative to cursor
                p: 2,
                bgcolor: "rgba(0, 0, 0, 0.8)",
                color: "white",
                borderRadius: 2,
                pointerEvents: "none", // Prevent the tooltip from capturing mouse events
                zIndex: 1300, // Ensure it's above other elements
                minWidth: 200,
                maxHeight: 300, // Set a max height for the modal
                overflowY: "auto", // Enable vertical scrolling
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: theme.palette.primary.main, fontWeight: "bold" }}
              >
                {hoveredInfo.name}
              </Typography>
              {Array.isArray(hoveredInfo.data) &&
                hoveredInfo.data.length > 0 ? (
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
                      <Divider
                        sx={{ my: 1, bgcolor: "rgba(255,255,255,0.5)" }}
                      />
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
              alignItems={"center"}
              height={"100%"}
            >
              <Typography
                sx={{ fontSize: { lg: 35, xs: 24 }, pt: { lg: 0, xs: "30px" } }}
                variant="body1"
                color="initial"
                fontWeight={500}
              >
                Food system youth leadership Training
              </Typography>
              <Typography sx={{ pb: 2 }} variant="body1" color="#7c7c7c" textAlign={"justify"}>
                The Food Systems Youth Leadership Training program is designed to nurture young leaders and inspire meaningful, hands-on engagement in food systems through a structured and participatory approach. The program begins with a careful selection process to identify motivated and committed youth participants. This is followed by an intensive three-day training that enhances leadership capacities, strengthens systems thinking, and builds practical knowledge of food systems. After the training, participants implement a six-month community-based collective action project, where they apply their learning to address real-world food system challenges. Throughout the process, continuous follow-up, monitoring, and learning documentation are conducted to track progress, capture key insights, and ensure impactful, sustainable outcomes.s
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
              pins={pins}
            />
          </Grid>
        </Grid>
      </Box>
      <Paper
        elevation={0}
        sx={{
          position: "relative",
          pt: 6,
          pb: 0,
          height: { lg: "620px", xs: "1080px" },
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
            src="/assets/gainandsdf.png"
            alt="gain"
            sx={{
              width: { lg: "1008px", xs: 400 }, // desktop stays 100px
              height: "auto",
            }}
          />
        </Box>

        <Typography
          variant="body1"
          sx={{
            mt: { lg: 20, xs: 8 },
            mb: { lg: 0, xs: 4 },
            fontSize: { lg: 40, xs: 24 },
          }}
          color="#fff"
          fontWeight={500}
          textAlign={"center"}
        >
          How Many Youths Have Been Trained{" "}
        </Typography>
        <Grid
          container
          spacing={3}
          sx={{ width: "95%", maxWidth: "1700px", margin: "0 auto", mb: 4 }}
        >
          <Grid size={{ xs: 12, sm: 6, md: 3 }} textAlign={"center"}>
            <Box sx={{ width: 100, height: 100, border: '3px solid #fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto' }}>
              <MonetizationOnIcon sx={{ color: '#fff', fontSize: 60 }} />
            </Box>
            <Typography
              variant="h3"
              color="#fff"
              fontWeight={700}
              fontSize={40}
              textAlign={"center"}
              mt={2}
            >
              47+
            </Typography>
            <Typography
              variant="body1"
              color="#fff"
              fontWeight={500}
              fontSize={20}
              textAlign={"center"}
            >
              Received Grand
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }} textAlign={"center"}>
            <Box sx={{ width: 100, height: 100, border: '3px solid #fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto' }}>
              <EventIcon sx={{ color: '#fff', fontSize: 60 }} />
            </Box>
            <Typography
              variant="h3"
              color="#fff"
              fontWeight={700}
              fontSize={40}
              textAlign={"center"}
              mt={2}
            >
              839+
            </Typography>
            <Typography
              variant="body1"
              color="#fff"
              fontWeight={500}
              fontSize={20}
              textAlign={"center"}
            >
              Number of Event Organized
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }} textAlign={"center"}>
            <Box sx={{ width: 100, height: 100, border: '3px solid #fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto' }}>
              <GroupIcon sx={{ color: '#fff', fontSize: 60 }} />
            </Box>
            <Typography
              variant="h3"
              color="#fff"
              fontWeight={700}
              fontSize={40}
              textAlign={"center"}
              mt={2}
            >
              1L+
            </Typography>
            <Typography
              variant="body1"
              color="#fff"
              fontWeight={500}
              fontSize={20}
              textAlign={"center"}
            >
              Beneficially Reach
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }} textAlign={"center"}>
            <Box sx={{ width: 100, height: 100, border: '3px solid #fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto' }}>
              <PublicIcon sx={{ color: '#fff', fontSize: 60 }} />
            </Box>
            <Typography
              variant="h3"
              color="#fff"
              fontWeight={700}
              fontSize={40}
              textAlign={"center"}
              mt={2}
            >
              1.1M+
            </Typography>
            <Typography
              variant="body1"
              color="#fff"
              fontWeight={500}
              fontSize={20}
              textAlign={"center"}
            >
              Social Media Reach
            </Typography>
          </Grid>
        </Grid>
      </Paper>
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
          {latestNews.slice(0, 3).map((option, index) => (
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
                  sx={{ mt: 2, fontWeight: 700, fontSize: 20, color: "#B20933" }}
                >
                  {option.title}
                </Typography>
                {/* 
                <Typography variant="body2" sx={{ mt: 2, color: 'text.secondary', fontWeight: 500, fontSize: 16 }}>
                {option.button}
                </Typography>
                */}
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

        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontWeight: 500,
            my: 6,
            textTransform: "capitalize",
            fontSize: 40, color: "#B20933"
          }}
        >Quizzes
        </Typography>

        <Grid
          container
          bgcolor="#B20933"
          alignItems="stretch"   // 🔥 important
        >
          <Grid
            size={{ xs: 12, sm: 6, md: 6 }}
            sx={{ display: "flex" }}
          >
            <img
              src="/assets/femle.png"
              alt="Youth taking a quiz"
              style={{
                width: "100%",
                height: "100%",     // 🔥 important
                objectFit: "cover"  // image stretch না হয়ে সুন্দর থাকবে
              }}
            />
          </Grid>

          <Grid
            size={{ xs: 12, sm: 6, md: 6 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "#B20933",
              textAlign: "center",

            }}
          >
            <Typography
              variant="h4"
              sx={{ fontWeight: 700, color: "#fff", mb: 2 }}
            >
              Test Your Knowledge!
            </Typography>

            <Typography variant="body1" sx={{ color: "#fff", mb: 3 }}>
              Engage with our interactive quizzes to learn more about nutrition and youth development.
            </Typography>

            <Button
              variant="contained"
              onClick={() =>
                window.open(
                  "https://quiz-point-client.vercel.app/quizzes",
                  "_blank"
                )
              }
              sx={{
                backgroundColor: theme.palette.primary.main,
                "&:hover": {
                  backgroundColor: "#d4701c",
                },
                py: 1.5,
                px: 4,
                fontSize: 18,
                fontWeight: 600,
              }}
            >
              Take a Quiz
            </Button>
          </Grid>
        </Grid>

        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontWeight: 500,
            my: 6,
            textTransform: "capitalize",
            fontSize: 40, color: "#B20933"
          }}
        >
          News and blogs
        </Typography>
        <Grid container spacing={3}>
          {latestNews.map((option, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
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
                  sx={{ mt: 2, fontWeight: 700, fontSize: 20, color: "#B20933" }}
                >
                  {option.title}
                </Typography>
                {/* <Typography variant="body2" sx={{ mt: 2, color: 'text.secondary', fontWeight: 500, fontSize: 16 }}>
                {option.button}
              </Typography> */}
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
      <Box sx={{ py: 8, width: "95%", margin: "0 auto", maxWidth: "1700px" }}>
        <Typography
          variant="h4"
          sx={{ textAlign: "center", fontWeight: 700, mb: 15, color: "#B20933" }}
        >
          Get Involved
        </Typography>

        <Grid sx={{ gap: { lg: 3, xs: "80px" } }} container spacing={3}>
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
                  height: "520px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: { lg: -80, sm: -50, xs: -50 },
                    left: "50%",
                    transform: "translateX(-50%)",
                    bgcolor: "#f7f3ef",
                    width: { lg: "100%", xs: "100px" },
                    maxWidth: "178px",
                    height: { lg: 178, xs: 100 },
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
                  }}
                >
                  <Box
                    sx={{
                      width: { lg: "100px", xs: "50px" },
                      height: { lg: "100px", xs: "50px" },
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
                  justifyContent={"center"}
                  alignItems={"center"}
                  height={"100%"}
                  sx={{ px: 3 }}
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
                  }}
                >
                  {option.button}
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box
        sx={{ width: "95%", margin: "0 auto", maxWidth: "1700px" }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            mb: 4,
            fontWeight: 500,
            textTransform: "capitalize",
            fontSize: 40,
          }}
        >
          Gallery
        </Typography>
        <Grid container spacing={3} mb={2}>
          <Grid size={{ xs: 12, sm: 6, md: 12 }}>

            <ImageFrameUploader onUpload={handleAddToGallery} />
          </Grid>

          {/* {gallery.map((src, idx) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={idx}>
              <Paper sx={{ p: 1, textAlign: 'center' }}>
                <img src={src} alt={`upload-${idx}`} style={{ width: '100%', objectFit: 'cover', borderRadius: 6 }} />
                <Button size="small" onClick={() => setGallery(g => g.filter((_, i) => i !== idx))} sx={{ mt: 1 }}>Remove</Button>
              </Paper>
            </Grid>
          ))} */}

        </Grid>
      </Box>
    </Box>
  );
}

export default Home;
