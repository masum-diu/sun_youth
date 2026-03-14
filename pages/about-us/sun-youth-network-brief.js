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
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const getAboutUsPageData = async () => {
    try {
      const res = await getAboutPage();
      const data = res?.data;

      const allSections = data?.pageBy?.aboutUs?.aboutUsSection ?? [];

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

  const handleSubmit = async () => {
    if (!fullName || !email || !message) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_CONTACT_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          full_name: fullName,
          email: email,
          message: message,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Success:", data);
        alert("Message sent successfully!");

        // Clear form
        setFullName("");
        setEmail("");
        setMessage("");
      } else {
        console.error("Error:", response.status);
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const pageTitle = aboutPageData?.aboutTitle[0].title;
  const image = aboutPageData?.imageSection[0]?.slideImage?.node?.sourceUrl;
  console.log(aboutPageData);
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
        </Stack>
      </Box>

      <Box
        sx={{
          width: "95%",
          maxWidth: "1700px",
          margin: "0 auto",
          pt: { xs: 0, md: 3 },
        }}
      >
        <Grid container spacing={2} alignItems="flex-start">
          {" "}
          {/* add alignItems */}
          <Grid
            size={{ xs: 12, md: 3 }}
            p={2}
            sx={{
              borderRight: { md: "5px solid #f5821f" },
              borderBottom: { xs: "5px solid #f5821f", md: "none" }, // border on bottom for mobile
              pr: 2,
              bgcolor: "#f7f3ef",
              height: "fit-content",
              position: { md: "sticky" }, // optional: makes sidebar sticky
              top: { md: 20 },
            }}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: 16,
                cursor: "pointer",
                color:
                  router?.route === "/about-us/sun-youth-network-brief"
                    ? "#f5821f"
                    : "#000",
              }}
              onClick={() => router.push("/about-us/sun-youth-network-brief")}
            >
              {aboutPageData?.buttonSection?.slideButton ||
                "SUN Youth Network Bangladesh Brief"}
            </Typography>

            <Divider
              orientation="horizontal"
              variant="fullWidth"
              sx={{ my: 2 }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 9 }} py={2} pl={{ md: 4 }}>
            <Box
              component="img"
              src={image || "/assets/governace2.jpeg"}
              alt="SUN Youth Network Network Bangladesh"
              sx={{ width: "100%", objectFit: "cover", borderRadius: 2, mb: 3 }}
            />
            {aboutPageData?.imageDescriptionSections ? (
              aboutPageData?.imageDescriptionSections?.map((content, index) => {
                const title = content.slideTitle;
                const description = content.slideDescription;
                return (
                  <React.Fragment key={index}>
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
                  </React.Fragment>
                );
              })
            ) : (
              <>
                <Typography
                  variant="h5"
                  fontWeight={700}
                  fontSize={16}
                  color="#f5821f"
                >
                  SUN Youth Network Bangladesh
                </Typography>
                <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
                  The SUN Youth Network Bangladesh was established to support
                  the formation and evolution of Youth organizations, and
                  youth-led clubs in Sun countries, as well as facilitate
                  communication and coordination across Sun CSO Network, Sun UN
                  Network, Sun Donor Network, Sun Business Network, Sun Academia
                  Network, and the broader Sun Movement.
                </Typography>
              </>
            )}
          </Grid>
        </Grid>
      </Box>

      <Box bgcolor={"#f7f3ef"} py={2}>
        <Grid
          container
          spacing={5}
          justifyContent="center"
          sx={{ width: "95%", maxWidth: "1700px", margin: "0 auto", my: 6 }}
        >
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
                    bgcolor: "#f5821f",
                    borderRadius: "50%",
                    flexShrink: 0,
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
        sx={{ width: "95%", maxWidth: "1200px", margin: "0 auto", my: 6 }}
      >
        {aboutPageData?.logoSections?.map((logo, index) => {
          console.log("image", logo?.logo?.node?.sourceUrl);

          return (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
              <img
                src={logo?.logo?.node?.sourceUrl || "/assets/Link1.png"}
                alt=""
              />
            </Grid>
          );
        })}
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
          {aboutPageData?.messageSection[0]?.messageTitle || "get tuch"}
        </Typography>
        <Grid
          container
          spacing={3}
          sx={{ width: "95%", maxWidth: "1700px", mx: "auto" }}
        >
          <Grid size={{ xs: 12, sm: 12, md: 12 }}>
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
                {aboutPageData?.messageSection[0]?.description ||
                  "Information collected from or submitted by, the SUN Youth Network Bangladesh and other relevant stakeholders."}
              </Typography>
              <Stack direction={"row"} spacing={2} width={"100%"}>
                <TextField
                  type="text"
                  placeholder="Full Name"
                  fullWidth
                  variant="outlined"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={{
                  width: "100%",
                  height: 150,
                  borderRadius: 5,
                  border: "1px solid #ccc",
                  padding: 10,
                  color: "#000",
                }}
              />
              <Button
                variant="contained"
                size="small"
                color="error"
                onClick={handleSubmit}
                sx={{
                  width: 178,
                  height: 48,
                  backgroundColor: "#f5821f",
                  "&:hover": { backgroundColor: "#d66f19" },
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
