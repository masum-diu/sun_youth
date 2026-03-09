import { getFoyslxPage } from "@/utils/apiCalls";
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

function youthvoicessummit() {
  const [pageData, setPageData] = useState();
  const router = useRouter();
  const parseFosylxSection = (sections) => {
    return sections.reduce(
      (acc, item) => {
        switch (item.__typename) {
          case "FosylxFosylxSectionSectionTitleLayout":
            acc.sectionTitle = item.sliderTitle || "";
            break;

          case "FosylxFosylxSectionButtonSectionLayout":
            acc.sideButton = {
              title: item.sideButton?.title || "",
              url: item.sideButton?.url || "",
              target: item.sideButton?.target || "",
            };
            break;

          case "FosylxFosylxSectionImageSectionLayout":
            acc.imageSection = {
              imageUrl: item.slideImage?.node?.sourceUrl || "",
              imageAlt: item.slideImage?.node?.altText || "",
              description: item.description || "",
            };
            break;

          case "FosylxFosylxSectionLogoLayout":
            acc.logos.push({
              imageUrl: item.logo?.node?.sourceUrl || "",
              imageAlt: item.logo?.node?.altText || "",
            });
            break;

          case "FosylxFosylxSectionMessageSectionLayout":
            acc.messageSection = {
              messageTitle: item.messageTitle || "",
              description: item.description || "",
              yourName: item.yourName || null,
              yourEmail: item.yourEmail || null,
              message: item.message || null,
            };
            break;

          default:
            break;
        }

        return acc;
      },
      {
        sectionTitle: "",
        sideButton: null,
        imageSection: null,
        logos: [],
        messageSection: null,
      },
    );
  };
  const getPageData = async () => {
    try {
      const res = await getFoyslxPage();
      const data = res?.data;

      if (!data) {
        console.error("Failed to fetch FOSYLX page data");
        return;
      }

      const rawSections = data?.page?.fosylx?.fosylxSection || [];
      const parsedData = parseFosylxSection(rawSections);

      setPageData(parsedData);
    } catch (error) {
      console.error("Error fetching FOSYLX page data:", error);
    }
  };

  useEffect(() => {
    getPageData();
  }, []);

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
            {pageData?.sectionTitle || "Loading..."}
          </Typography>
          {/* {router?.asPath
              ?.split("-")
              ?.map(word => word.charAt(0).toUpperCase() + word.slice(1))
              ?.join(" ")} */}
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
                  router?.route === "/what-we-do/gallery" ? "#f5821f" : "#000",
              }}
              onClick={() => router.push("/what-we-do/gallery")}
            >
              Gallery
            </Typography>
            <Divider
              orientation="horizontal"
              variant="fullWidth"
              sx={{ my: 2 }}
            />
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: 16,
                cursor: "pointer",
                color:
                  router?.route === "/what-we-do/bkbt" ? "#f5821f" : "#000",
              }}
              onClick={() => router.push("/what-we-do/bkbt")}
            >
              BKBT
            </Typography>
            <Divider
              orientation="horizontal"
              variant="fullWidth"
              sx={{ my: 2 }}
            />
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: 16,
                cursor: "pointer",
                color:
                  router?.route ===
                  "/what-we-do/food-systems-youth-leadership-training"
                    ? "#f5821f"
                    : "#000",
              }}
              onClick={() =>
                router.push(
                  "/what-we-do/food-systems-youth-leadership-training",
                )
              }
            >
              Food Systems Youth Leadership Training
            </Typography>
            <Divider
              orientation="horizontal"
              variant="fullWidth"
              sx={{ my: 2 }}
            />
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: 16,
                cursor: "pointer",
                color:
                  router?.route === "/what-we-do/fosylx" ? "#f5821f" : "#000",
              }}
              onClick={() => router.push("/what-we-do/fosylx")}
            >
              FOSYLx
            </Typography>
            <Divider
              orientation="horizontal"
              variant="fullWidth"
              sx={{ my: 2 }}
            />
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: 16,
                cursor: "pointer",
                color:
                  router?.route === "/what-we-do/impact-fellowship"
                    ? "#f5821f"
                    : "#000",
              }}
              onClick={() => router.push("/what-we-do/impact-fellowship")}
            >
              IMPACT Fellowship
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
              src={pageData?.imageSection?.imageUrl || "/assets/fosilack.jpeg"} // Replace with your actual image path
              alt="SUN Youth Network Network Bangladesh"
              sx={{ width: "100%", objectFit: "cover", borderRadius: 2, mb: 3 }}
            />
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              {pageData?.imageSection?.description ||
                `The Food Systems Youth Leadership (FoSYLx) Online Training is a
              comprehensive, three-day capacity-building initiative designed to
              equip young leaders with essential knowledge, leadership skills,
              and practical tools for meaningful engagement in food systems
              transformation through online platforms. The training enhances
              youth understanding of food systems, nutrition challenges, and the
              critical role of young people as change agents in promoting
              healthier and more sustainable food environments. A central
              component of FoSYLx is the Future Action Workshop, which enables
              participants to translate learning into structured community
              engagement, collective action, and policy advocacy. The Future
              Action Workshop was conducted over three days, from 28 to 30
              December 2025, at BRAC CDM, Savar, with sessions adapted for
              online delivery. During this period, youth participants engaged in
              interactive presentations, group discussions, and practical
              exercises to analyze local food and nutrition challenges and
              develop actionable plans aligned with national priorities, which
              could be shared and implemented digitally. The workshop emphasized
              collaboration, leadership, and accountability, empowering
              participants to design community-based initiatives and strengthen
              their capacity to engage with stakeholders and policy processes.
              Through this intensive training, FoSYLx cultivated a cohort of
              committed youth leaders prepared to drive collective action and
              advocacy for healthier, safer, and more sustainable food systems
              across Bangladesh via online.`}
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Grid
        container
        spacing={5}
        justifyContent="center"
        sx={{ width: "95%", maxWidth: "1200px", margin: "0 auto", my: 6 }}
      >
      {
      pageData?.logos?.map((logo,index) => <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
          <img src={logo?.imageUrl || "/assets/Link1.png"} alt="" />
        </Grid>)
      }
      </Grid>
      <Box
        sx={{
          py: 6,
          px: { lg: 0, xs: 3 },
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
          {pageData?.messageSection?.messageTitle || "Get In Tuch"}
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
                {pageData?.messageSection?.description || `Information collected from or submitted by, the SUN Youth
                Network Network and other relevant stakeholders.`}
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

export default youthvoicessummit;
