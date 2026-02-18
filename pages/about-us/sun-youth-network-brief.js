import { getAboutPage } from "@/utils/apiCalls";
import {
  Box,
  Button,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function Sunyouthnetworkbrief() {
  const [aboutPageData, setAboutPageData] = useState(null);

  const getAboutUsPageData = async () => {
    try {
      const res = await getAboutPage();
      const data = res?.data;

      const allSections = data?.pageBy?.aboutUs?.aboutUsSection ?? [];

      console.log(data);

      const finalData = {
        pageTitle: data?.pageBy?.title ?? "",
        pageId: data?.pageBy?.id ?? "",
        aboutTitle: allSections.filter(
          (section) =>
            section.__typename === "AboutUsAboutUsSectionAboutUsTitleLayout",
        ),
        buttonSection: allSections.filter(
          (section) =>
            section.__typename === "AboutUsAboutUsSectionButtonSectionLayout",
        ),
        imageSection: allSections.filter(
          (section) =>
            section.__typename === "AboutUsAboutUsSectionImageSectionLayout",
        ),
        imageDescriptionSections: allSections.filter(
          (section) =>
            section.__typename ===
            "AboutUsAboutUsSectionImageDescriptionLayout",
        ),
        visionSection: allSections.filter(
          (section) =>
            section.__typename ===
            "AboutUsAboutUsSectionVisionOfSunYouthSectionLayout",
        ),
        logoSections: allSections.filter(
          (section) => section.__typename === "AboutUsAboutUsSectionLogoLayout",
        ),
        messageSection: allSections.filter(
          (section) =>
            section.__typename === "AboutUsAboutUsSectionMessageSectionLayout",
        ),
      };

      console.log("About Us Page Data:", finalData);
      console.log(
        "Image Description Sections:",
        finalData.imageDescriptionSections,
      );
      setAboutPageData(finalData);
      return finalData;
    } catch (error) {
      console.error("Error fetching about us page data:", error);
    }
  };

  useEffect(() => {
    getAboutUsPageData();
  }, []);

  const router = useRouter();

  const pageTitle = aboutPageData?.aboutTitle[0].title;
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
            {pageTitle}
          </Typography>
          {/* <Box
            component="span"
            sx={{ fontSize: 14, color: "#fff", fontWeight: 600 }}
          >
            {router?.asPath
              ?.split("-")
              ?.map(word => word.charAt(0).toUpperCase() + word.slice(1))
              ?.join(" ")}
          </Box> */}
        </Stack>
      </Box>

      <Box sx={{ width: "95%", maxWidth: "1700px", margin: "0 auto" }}>
        <Grid container spacing={2}>
          <Grid
            size={{ xs: 12, md: 3 }}
            p={2}
            sx={{
              borderRight: { md: "5px solid #f5821f" },
              pr: 2,
              bgcolor: "#f7f3ef",
              height: "fit-content",
            }}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: 16,
                cursor: "pointer",
                color:
                  router?.route === "/about-us/Sun-youth-network-brief"
                    ? "#f5821f"
                    : "#000",
              }}
              onClick={() => router.push("/about-us/Sun-youth-network-brief")}
            >
              SUN Youth Network Bangladesh Brief
            </Typography>

            <Divider
              orientation="horizontal"
              variant="fullWidth"
              sx={{ my: 2 }}
            />
            {/* 
              
              
              
            <Typography sx={{ fontWeight: 'bold', fontSize: 16, cursor: "pointer", color: router?.route === '/about-us/government-mohfw' ? "#f5821f" : "#000" }} onClick={() => router.push('/about-us/government-mohfw')}>Government (MoHFW)</Typography>

            <Divider
              orientation="horizontal"
              variant="fullWidth"
              sx={{ my: 2 }}
              />
            <Typography sx={{ fontWeight: 'bold', fontSize: 16, cursor: "pointer", color: router?.route === '/about-us/Sun-movement' ? "#f5821f" : "#000" }} onClick={() => router.push('/about-us/Sun-movement')}>Sun Movement</Typography>
            
            <Divider
              orientation="horizontal"
              variant="fullWidth"
              sx={{ my: 2 }}
              />
            <Typography sx={{ fontWeight: 'bold', fontSize: 16, cursor: "pointer", color: router?.route === '/about-us/secretariat-gain' ? "#f5821f" : "#000" }} onClick={() => router.push('/about-us/secretariat-gain')}>Secretariat (GAIN) info and logo</Typography>
            <Divider
            orientation="horizontal"
            variant="fullWidth"
            sx={{ my: 2 }}
            />
            
            */}
          </Grid>
          <Grid size={{ xs: 12, md: 9 }} py={2} pl={{ md: 4 }}>
            <Box
              component="img"
              src="/assets/governace2.jpeg" // Replace with your actual image path
              alt="SUN Youth Network Network Bangladesh"
              sx={{ width: "100%", objectFit: "cover", borderRadius: 2, mb: 3 }}
            />
            {aboutPageData?.imageDescriptionSections?.map((content) => {
              const title = content.slideTitle;
              const description = content.slideDescription;
              return (
                <>
                  <Typography
                    variant="h5"
                    fontWeight={700}
                    fontSize={16}
                    color="#f5821f"
                  >
                    {title}
                  </Typography>
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{ lineHeight: 1.8 }}
                  >
                    {description}
                  </Typography>
                </>
              );
            })}
            
          </Grid>
        </Grid>
      </Box>

      {/*  */}

      <Box bgcolor={"#f7f3ef"} py={2}>
        <Grid
          container
          spacing={5}
          justifyContent="center"
          sx={{ width: "95%", maxWidth: "1700px", margin: "0 auto", my: 6 }}
        >
          {/* <Grid
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
                    Purpose of SUN Youth Network Bangladesh
                  </Typography>
                </Stack>
              </Stack>
              <Typography variant="body1" fontWeight={400} fontSize={14}>
                The purpose of the SUN Youth Network Bangladesh is to serve as a
                dynamic platform that mobilizes and empowers youth and
                adolescents to take meaningful action in addressing nutritional
                challenges in Bangladesh. As an integral part of the Sun
                Movement in Bangladesh, the network aims to foster sustained
                public, political, and financial commitment by building a
                strong, coordinated youth constituency. This network will
                actively contribute to advancing and implementing the national
                nutrition and global agenda, ensuring that youth voices are at
                the forefront of policy, programmatic, and community-level
                efforts to improve nutrition outcomes across the country.
              </Typography>
            </Stack>
          </Grid> */}
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
                    Vision of SUN Youth Network Bangladesh
                  </Typography>
                </Stack>
              </Stack>
              <Typography variant="body1" fontWeight={400} fontSize={14}>
                A Bangladesh free from hunger and malnutrition, where empowered
                youth lead the way in creating a healthier, nourished, and more
                equitable future for all.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <Grid
        container
        spacing={5}
        justifyContent="center"
        sx={{
          width: "95%",
          maxWidth: "1200px",
          margin: "0 auto",
          my: 6,
          textAlign: "center",
        }}
      >
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <img src="/assets/Link1.png" alt="" />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <img
            src="/assets/images.png"
            alt=""
            style={{
              width: "210px",
              height: "120px",
              objectFit: "contain",
              border: "1px solid #dedede",
              padding: "20px",
              borderRadius: 4,
            }}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <img src="/assets/Link4.png" alt="" />
        </Grid>
        {/* <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <img src="/assets/Link3.png" alt="" />
        </Grid> */}
      </Grid>
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
        <Grid
          container
          spacing={3}
          sx={{ width: "95%", maxWidth: "1700px", mx: "auto" }}
        >
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
                Information collected from or submitted by, the SUN Youth
                Network Bangladesh and other relevant stakeholders.
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
    </React.Fragment>
  );
}

export default Sunyouthnetworkbrief;
