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
import React from "react";

function sunyouthnetworkbrief() {
  const router = useRouter();
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
            ABOUT US
          </Typography>
          <Box
            component="span"
            sx={{ fontSize: 14, color: "#fff", fontWeight: 600 }}
          >
            {router?.route}
          </Box>
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
                  router?.route === "/about-us/sun-youth-network-brief"
                    ? "#f5821f"
                    : "#000",
              }}
              onClick={() => router.push("/about-us/sun-youth-network-brief")}
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
            <Typography sx={{ fontWeight: 'bold', fontSize: 16, cursor: "pointer", color: router?.route === '/about-us/sun-movement' ? "#f5821f" : "#000" }} onClick={() => router.push('/about-us/sun-movement')}>SUN Movement</Typography>
            
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
              src="/assets/gainandsdf.png" // Replace with your actual image path
              alt="SUN Youth Network Bangladesh"
              sx={{ width: "100%", objectFit: "cover", borderRadius: 2, mb: 3 }}
            />
              <Typography
                variant="h5"
                fontWeight={700}
                fontSize={16}
                color="#f5821f"
              >
                SUN Youth Network
              </Typography>
              <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
                The SUN Youth Network was established to support the formation
                and evolution of Youth organizations, and youth-led clubs in SUN
                countries, as well as facilitate communication and coordination
                across SUN CSO Network, SUN UN Network, SUN Donor Network, SUN
                Business Network, SUN Academia Network, and the broader SUN
                Movement.
              </Typography>

              <Typography
                variant="h5"
                fontWeight={700}
                fontSize={16}
                color="#f5821f"
              >
                Purpose of the network
              </Typography>
              <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
                The primary purpose of the SUN Youth Network is to encourage the
                alignment of Youth Organisations’ strategies, programmes and
                resources with country plans for scaling up nutrition. The SUN
                Youth Network aims to achieve this through strengthening the
                support available for and capacity of national and local youth
                organizations. It is responsible for encouraging effective
                engagement from adolescents, youth and youth organizations in
                the SUN process at national and global levels and supports SUN
                countries to advocate for the development of ambitious plans. It
                also contributes to the implementation and rolling out of
                national costed plans.
              </Typography>

              <Typography
                variant="h5"
                fontWeight={700}
                fontSize={16}
                color="#f5821f"
              >
                SUN Youth Network Bangladesh
              </Typography>

              <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
                The Government of the People's Republic of Bangladesh signed up
                for the Scaling Up Nutrition (SUN) Global Movement in September
                2012. The SUN Secretariat Bangladesh has taken the initiative to
                establish the SUN Youth Network in Bangladesh in January 2024
                with the aim of uniting youth organizations to ensure a voice is
                given to a range of small, dependent, regional and national
                organizations to further the aim of the SUN movement. The
                network also aims to build the capacity of youth and promote
                community actions. The Ministry of Health and Family Welfare,
                Government of the People's Republic of Bangladesh, has endorsed
                the Scaling Up Nutrition (SUN) Youth Network Bangladesh to
                officially commence its activities, effective from 01 November
                2024. This initiative aims to systematically engage youth and
                amplify their voices in the nutrition, food, and health sectors
                to influence programmatic and policy agendas in alignment with
                Bangladesh's priorities and the Scaling Up Nutrition Strategy
                3.0. The Global Alliance for Improved Nutrition (GAIN) serves as
                the secretariat for the Scaling Up Nutrition (SUN) Youth Network
                Bangladesh.
              </Typography>
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
                    Purpose of SUN Youth Network Bangladesh
                  </Typography>
                </Stack>
              </Stack>
              <Typography variant="body1" fontWeight={400} fontSize={14}>
                The purpose of the SUN Youth Network Bangladesh is to serve as a
                dynamic platform that mobilizes and empowers youth and
                adolescents to take meaningful action in addressing nutritional
                challenges in Bangladesh. As an integral part of the SUN
                Movement in Bangladesh, the network aims to foster sustained
                public, political, and financial commitment by building a
                strong, coordinated youth constituency. This network will
                actively contribute to advancing and implementing the national
                nutrition and global agenda, ensuring that youth voices are at
                the forefront of policy, programmatic, and community-level
                efforts to improve nutrition outcomes across the country.
              </Typography>
            </Stack>
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
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <img src="/assets/Link1.png" alt="" />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <img src="/assets/Link4.png" alt="" />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <img src="/assets/Link3.png" alt="" />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <img src="/assets/Link2.png" alt="" />
        </Grid>
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
                Information collected from or submitted by, the Civil Society
                network and other relevant stakeholders.
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

export default sunyouthnetworkbrief;
