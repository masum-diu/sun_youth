import { getBkbtPage } from "@/utils/apiCalls";
import {
  Box,
  Button,
  Divider,
  Grid,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function bkbt() {
  const [pageData, setPageData] = useState();
   const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
  const router = useRouter();

  const parseBkbtData = (sections) => {
    return sections.reduce(
      (acc, item) => {
        switch (item.__typename) {
          case "BkbtBkbtSectionSectionTitleLayout":
            acc.sectionTitle = item.sliderTitle || "";
            break;

          case "BkbtBkbtSectionButtonSectionLayout":
            acc.mainButton = {
              title: item.button?.title || "",
              url: item.button?.url || "",
              target: item.button?.target || "",
            };
            break;

          case "BkbtBkbtSectionImageSectionLayout":
            acc.imageSection = {};
            break;

          case "BkbtBkbtSectionButtonLayout":
            acc.actionButton = {
              title: item.slideButton?.title || "",
              url: item.slideButton?.url || "",
              target: item.slideButton?.target || "",
            };
            break;

          case "BkbtBkbtSectionLogoLayout":
            acc.logos.push({
              imageUrl: item.logo?.node?.sourceUrl || "",
              altText: item.logo?.node?.altText || "",
            });
            break;

          case "BkbtBkbtSectionMessageSectionLayout":
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
        mainButton: null,
        imageSection: null,
        actionButton: null,
        logos: [],
        messageSection: null,
      },
    );
  };

  const getPageData = async () => {
    try {
      const res = await getBkbtPage();
      const data = res?.data;
      console.log('bkbt data:',data)

      if (!data) {
        console.error("Failed to fetch BKBT page data");
        return;
      }

      const rawSections = data?.page?.bkbt?.bkbtSection || [];
      const parsedData = parseBkbtData(rawSections);

      setPageData(parsedData);
    } catch (error) {
      console.error("Error fetching BKBT page data:", error);
    }
  };

  useEffect(() => {
    getPageData();
  }, []);

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

  console.log(pageData);

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
            {pageData?.secondTitle}
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
              src="/assets/bkbt.jpeg" // Replace with your actual image path
              alt="SUN Youth Network Network Bangladesh"
              sx={{ width: "100%", objectFit: "cover", borderRadius: 2, mb: 3 }}
            />
            <Typography
              variant="body1"
              paragraph
              sx={{ lineHeight: 1.8, textAlign: "justify" }}
            >
              Bhalo Khabo Bhalo Thakbo (BKBT), which translates to 'Eat Well,
              Live Well,' is a nationwide campaign dedicated to promoting
              healthy eating habits and improving nutrition among the youth of
              Bangladesh. Launched by the SUN Youth Network Network, BKBT aims
              to create a mass movement that empowers young people to make
              informed dietary choices and advocate for better food systems in
              their communities.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ lineHeight: 1.8, textAlign: "justify" }}
            >
              The campaign utilizes a multi-faceted approach, including social
              media engagement, interactive workshops, community-level
              activations, and partnerships with educational institutions.
              Through these activities, BKBT raises awareness about the
              importance of a balanced diet, the risks of malnutrition, and the
              benefits of consuming safe and nutritious food. By fostering a
              generation of health-conscious leaders, the campaign is not just
              about individual well-being but about building a healthier, more
              resilient future for Bangladesh.
            </Typography>
            <Stack direction="row" spacing={2} alignItems="center" mt={2}>
              <Button
                variant="contained"
                href={pageData?.actionButton?.url}
                target="_blank"
                sx={{
                  backgroundColor: "#f5821f",
                  "&:hover": { backgroundColor: "#e0711b" },
                }}
              >
                {pageData?.actionButton?.title}
              </Button>
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
        {/* <Grid size={{ xs: 12, sm: 6, md: 3 }}   >
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
          {pageData?.messageSection?.messageTitle || "get tuch"}
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
                {pageData?.messageSection?.description ||
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

export default bkbt;
