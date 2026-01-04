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
import { useInView } from "react-intersection-observer";

import theme from "@/utils/theme";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import BangladeshMap from "./components/BangladeshMap";
import NextLink from "next/link";

function Home() {
  const getInvolvedOptions = [
    {
      image: "/assets/group_icon.png",
      title: "Join a Sun Youth Network!",
      description:
        "Our dynamic networks is seeking youth organization committed to improving nutrition.",
      button: "Sun Youth network Member",
    },
    {
      image: "/assets/public_icon.png",
      title: "Attend an event",
      description:
        "Join over 242 businesses committed to improving nutrition through the Sun Youth Network. Access exclusive resources, networking opportunities, and more.",
      button: "Events",
    },
    {
      image: "/assets/event_icon.png",
      title: "Learn more",
      description:
        "Participate in our webinars, workshops, and conferences to learn about the latest in business and nutrition, and connect with like-minded Youth.",
      button: "Resource",
    },
    {
      image: "/assets/email_icon.png",
      title: "Sign Up for Newsletter",
      description:
        "Stay updated with the latest news, resources, and events from Sun Youth Network by subscribing to our monthly newsletter.",
      button: "Sign up",
    },
  ];
  const listItems = [
    {
      image: "/assets/governace.jpg",
      title: "Mission",
      description:
        "The mission of the SUN Youth Network Bangladesh is to empower and mobilize youth and adolescents to lead meaningful action on nutrition, strengthen youth voices in policy and community spaces, and support sustained commitment to advancing national and global nutrition goals.",
      button: "Read More",
    },
    {
      image: "/assets/governace.jpg",
      title: "Governance",
      description:
        "SUN Youth Network Bangladesh consists of youth-led organizations, youth-led clubs in universities and communities who are intensively working and interested in contributing to nutrition outcome development.",
      button: "Read More",
    },
    {
      image: "/assets/governace.jpg",
      title: "Focal Points",
      description:
        "The focal point of the SUN Youth Network Bangladesh serves as the primary coordinator and liaison, ensuring effective communication, coordination, and implementation of network activities in alignment with national priorities and the SUN Movement.",
      button: "Read More",
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
              width: "100%",
              minHeight: "85vh",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
            }}
            role="img"
            aria-label="Hero background"
          >
            <Stack direction={"column"} spacing={3}>
              <Typography
                variant="h3"
                sx={{ fontWeight: 500, fontSize: 60, color: "#FFF" }}
              >
                SUN Youth Bangladesh
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 600,
                  fontSize: 45,
                  color: theme.palette.secondary.main,
                }}
              >
                THEN AND NOW
              </Typography>
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
                    width: 1008,
                  }}
                >
                  <Stack
                    direction={"row"}
                    spacing={2}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Stack direction={"row"} spacing={4} alignItems={"center"}>
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
                        Fosylx Training – 2024
                      </Typography>
                    </Stack>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 700, fontSize: 40, color: "#f5821f" }}
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
              minHeight: "85vh",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
            }}
            role="img"
            aria-label="Hero background"
          >
            <Stack direction={"column"} spacing={3}>
              <Typography
                variant="h3"
                sx={{ fontWeight: 500, fontSize: 60, color: "#FFF" }}
              >
                SUN Youth Bangladesh
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 600,
                  fontSize: 45,
                  color: theme.palette.secondary.main,
                }}
              >
                THEN AND NOW
              </Typography>
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
                    width: 1008,
                  }}
                >
                  <Stack
                    direction={"row"}
                    spacing={2}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Stack direction={"row"} spacing={4} alignItems={"center"}>
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
                        Fosylx Training – 2024
                      </Typography>
                    </Stack>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 700, fontSize: 40, color: "#f5821f" }}
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
              minHeight: "85vh",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
            }}
            role="img"
            aria-label="Hero background"
          >
            <Stack direction={"column"} spacing={3}>
              <Typography
                variant="h3"
                sx={{ fontWeight: 500, fontSize: 60, color: "#FFF" }}
              >
                SUN Youth bangladesh
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 600,
                  fontSize: 45,
                  color: theme.palette.secondary.main,
                }}
              >
                THEN AND NOW
              </Typography>
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
                    width: 1008,
                  }}
                >
                  <Stack
                    direction={"row"}
                    spacing={2}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Stack direction={"row"} spacing={4} alignItems={"center"}>
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
                        Fosylx Training – 2024
                      </Typography>
                    </Stack>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 700, fontSize: 40, color: "#f5821f" }}
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
            40 Districts
          </Typography>
          <Typography
            variant="body1"
            sx={{ mt: 1, textAlign: "center", fontWeight: 400, fontSize: 20 }}
          >
            Geographic Coverage
          </Typography>
        </Grid>
      </Grid>

      {/* this section get involved */}
      <Box sx={{ py: 8, width: "95%", margin: "0 auto", maxWidth: "1700px" }}>
        <Grid container spacing={3} mt={15}>
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
        rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.9)
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
      <Box mt={15} bgcolor={"#f8f7f5"}>
        <Typography
          variant="body1"
          color="initial"
          fontWeight={700}
          fontSize={19}
          sx={{
            bgcolor: "#f5821f",
            maxWidth: 873,
            textAlign: "right",
            pr: 5,
            py: 1,
            color: "#fff",
          }}
        >
          The map of SUN youth Bangladesh
        </Typography>{" "}
        <Grid
          container
          spacing={3}
          sx={{
            width: "95%",
            maxWidth: "1700px",
            margin: "0 auto",
            position: "relative",
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

          <Grid size={{ xs: 12, sm: 6, md: 6 }}>
            <Stack
              direction={"column"}
              spacing={4}
              justifyContent={"center"}
              alignItems={"center"}
              height={"100%"}
            >
              <Typography
                variant="body1"
                color="initial"
                fontWeight={500}
                fontSize={45}
              >
                Food system youth leadership Training
              </Typography>
              <Typography variant="body1" color="#7c7c7c">
                The program is designed to build youth leadership and encourage
                practical engagement in food systems through a structured and
                participatory approach. It begins with a selection process to
                identify motivated young participants, followed by an intensive
                three-day Food Systems Youth Leadership Training that
                strengthens leadership skills, systems thinking, and practical
                knowledge. Participants then carry out a six-month collective
                action project at the community level, applying their learning
                to real-world challenges. Continuous follow-up, monitoring, and
                learning documentation support progress tracking, capture key
                lessons, and ensure meaningful and sustainable outcomes.
              </Typography>
              {/* <Stack direction={"row"} spacing={2} width={"100%"} >
                <Button variant="contained" color="error" fontWeight={500}  >
                  full view
                </Button>
              </Stack> */}
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 6 }}>
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
          mt: { lg: 60, xs: 10 },
          bgcolor: "#f5821f",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: { lg: -400, xs: -120 }, // desktop same, mobile adjusted
            left: "50%",
            transform: "translateX(-50%)",
            width: { lg: "100%", xs: "300px" },
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
              width: { lg: "100%", xs: 400 }, // desktop stays 100px
              height: "auto",
            }}
          />
        </Box>

        <Typography
          variant="body1"
          sx={{
            mt: { lg: 25, xs: 8 },
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
            <img
              src="/assets/icons2.png"
              alt=""
              style={{
                border: "3px solid #fff",
                padding: 10,
                borderRadius: "50%",
              }}
            />
            <Typography
              variant="h3"
              color="#fff"
              fontWeight={700}
              fontSize={40}
              textAlign={"center"}
            >
              5000+
            </Typography>
            <Typography
              variant="body1"
              color="#fff"
              fontWeight={500}
              fontSize={20}
              textAlign={"center"}
            >
              Volunteer Helpers{" "}
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }} textAlign={"center"}>
            <img
              src="/assets/icons1.png"
              alt=""
              style={{
                border: "3px solid #fff",
                padding: 10,
                borderRadius: "50%",
              }}
            />
            <Typography
              variant="h3"
              color="#fff"
              fontWeight={700}
              fontSize={40}
              textAlign={"center"}
            >
              1200+
            </Typography>
            <Typography
              variant="body1"
              color="#fff"
              fontWeight={500}
              fontSize={20}
              textAlign={"center"}
            >
              Donated
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }} textAlign={"center"}>
            <img
              src="/assets/icons3.png"
              alt=""
              style={{
                border: "3px solid #fff",
                padding: 10,
                borderRadius: "50%",
              }}
            />
            <Typography
              variant="h3"
              color="#fff"
              fontWeight={700}
              fontSize={40}
              textAlign={"center"}
            >
              300+
            </Typography>
            <Typography
              variant="body1"
              color="#fff"
              fontWeight={500}
              fontSize={20}
              textAlign={"center"}
            >
              Products & Gifts
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }} textAlign={"center"}>
            <img
              src="/assets/icons2.png"
              alt=""
              style={{
                border: "3px solid #fff",
                padding: 10,
                borderRadius: "50%",
              }}
            />
            <Typography
              variant="h3"
              color="#fff"
              fontWeight={700}
              fontSize={40}
              textAlign={"center"}
            >
              50+
            </Typography>
            <Typography
              variant="body1"
              color="#fff"
              fontWeight={500}
              fontSize={20}
              textAlign={"center"}
            >
              Volunteer Helpers
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
                  sx={{ mt: 2, fontWeight: 700, fontSize: 20 }}
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
            fontSize: 40,
          }}
        >
          Youth engagement and impact
        </Typography>

        <Grid container spacing={5} justifyContent="center" sx={{ mt: 12 }}>
          <Grid size={{ xs: 12, sm: 6, md: 6 }}>
            <img src="/assets/femle.png" alt="" width={"100%"} />
          </Grid>
          <Grid
            size={{ xs: 12, sm: 6, md: 6 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Stack direction={"column"}>
              <Stack direction={"row"} spacing={3} mb={2} width={"100%"}>
                <Box
                  sx={{
                    width: 45,
                    height: 45,
                    bgcolor: "  #f5821f",
                    borderRadius: "50%",
                  }}
                ></Box>
                <Stack direction={"column"} width={"100%"}>
                  <Typography
                    variant="h5"
                    fontWeight={700}
                    fontSize={25}
                    color="#f5821f"
                  >
                    Enabling Policy Environment
                  </Typography>
                  <Typography variant="body1" fontWeight={400} fontSize={14}>
                    The program strengthens a sustainable Youth Network in
                    Bangladesh aligned with national priorities and the global
                    SUN movement, while advocating for policies that support
                    nutrition goals.
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
            <Stack direction={"column"} alignItems={"center"}>
              <Stack direction={"row"} spacing={3} mb={2} width={"100%"}>
                <Box
                  sx={{
                    width: 45,
                    height: 45,
                    bgcolor: "  #f5821f",
                    borderRadius: "50%",
                  }}
                ></Box>
                <Stack direction={"column"} width={"100%"}>
                  <Typography
                    variant="h5"
                    fontWeight={700}
                    fontSize={25}
                    color="#f5821f"
                  >
                    Food Systems and Nutrition Action
                  </Typography>
                  <Typography variant="body1" fontWeight={400} fontSize={14}>
                    It promotes evidence-based nutrition practices, supports
                    youth-led innovations and social enterprises, and encourages
                    healthy lifestyles among youth and adolescents.
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
            <Stack direction={"column"}>
              <Stack direction={"row"} spacing={3} mb={2} width={"100%"}>
                <Box
                  sx={{
                    width: 45,
                    height: 45,
                    bgcolor: "  #f5821f",
                    borderRadius: "50%",
                  }}
                ></Box>
                <Stack direction={"column"} width={"100%"}>
                  <Typography
                    variant="h5"
                    fontWeight={700}
                    fontSize={25}
                    color="#f5821f"
                  >
                    Nutrition Financing and Advocacy
                  </Typography>
                  <Typography variant="body1" fontWeight={400} fontSize={14}>
                    The initiative works with SUN Networks to engage
                    policymakers, promote youth participation, and support
                    increased investment in effective nutrition policies and
                    programs.
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontWeight: 500,
            my: 6,
            textTransform: "capitalize",
            fontSize: 40,
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
                  sx={{ mt: 2, fontWeight: 700, fontSize: 20 }}
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
          sx={{ textAlign: "center", fontWeight: 700, mb: 15 }}
        >
          Get Involved
        </Typography>

        <Grid container spacing={3}>
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
                    top: -80,
                    left: "50%",
                    transform: "translateX(-50%)",
                    bgcolor: "#f7f3ef",
                    width: "100%",
                    maxWidth: "178px",
                    height: 178,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
                  }}
                >
                  <img
                    src={option.image}
                    alt={option.title}
                    width={92}
                    height={84}
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
                  sx={{
                    mt: 3,
                    backgroundColor: "#f5821f",
                    "&:hover": { backgroundColor: "#f5821f" },
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
        sx={{
          py: 6,
          color: "#fff",
          backgroundImage: `
    linear-gradient(
      rgba(178, 9, 51, 0.6),
      rgba(178, 9, 51, 0.6)
    ),
    url('/assets/sky-lac-leman.jpg')
  `,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
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
          Get In Tuch
        </Typography>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, sm: 6, md: 12 }}>
            <Stack
              maxWidth={900}
              mx={"auto"}
              direction={"column"}
              spacing={4}
              justifyContent={"center"}
              alignItems={"center"}
              height={"100%"}
            >
              <Typography variant="body1" fontWeight={500} fontSize={20}>
                Information collected from or submitted by, the Sun Youth
                network Bangladesh and other relevant stakeholders.
              </Typography>
              <Stack direction={"row"} spacing={2} width={"100%"}>
                <TextField
                  type="text"
                  placeholder="Full Name"
                  fullWidth
                  variant="outlined"
                  sx={{
                    input: { color: "#fff" },
                    "& .MuiOutlinedInput-root fieldset": {
                      borderColor: "#fff",
                    },
                    "& .MuiOutlinedInput-root:hover fieldset": {
                      borderColor: "#fff",
                    },
                    "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                      borderColor: "#fff",
                    },
                    "& input::placeholder": {
                      color: "#fff",
                      opacity: 0.7,
                    },
                  }}
                />

                <TextField
                  type="email"
                  placeholder="Your Email"
                  fullWidth
                  variant="outlined"
                  sx={{
                    input: { color: "#fff" },
                    "& .MuiOutlinedInput-root fieldset": {
                      borderColor: "#fff",
                    },
                    "& .MuiOutlinedInput-root:hover fieldset": {
                      borderColor: "#fff",
                    },
                    "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                      borderColor: "#fff",
                    },
                    "& input::placeholder": {
                      color: "#fff",
                      opacity: 0.7,
                    },
                  }}
                />
              </Stack>
              <textarea
                placeholder="Your Message"
                style={{
                  width: "100%",
                  height: 150,
                  borderRadius: 5,
                  border: "1px solid #ccc",
                  padding: 10,
                }}
              />
              <Button
                variant="contained"
                size="small"
                color="error"
                fontWeight={500}
                sx={{
                  width: 178,
                  height: 48,
                  backgroundColor: "#f5821f",
                  "&:hover": { backgroundColor: "#f5821f" },
                }}
              >
                Send Message
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Home;
