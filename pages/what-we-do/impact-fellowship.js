import { Box, Button, Divider, Grid, Stack, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react'

function impactfellowship() {
  const router = useRouter();
  return (
    <React.Fragment>
      <Box sx={{ bgcolor: "#f5821f", height: 200, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", color: "#fff", }}>
        <Stack direction={"row"} alignItems="center" justifyContent="space-between"
          sx={{ width: "95%", maxWidth: "1700px", margin: "0 auto", }}>
          {/* <Typography variant="h5" sx={{ fontWeight: 'bold' }}>WHAT WE DO</Typography>
           {router?.asPath
              ?.split("-")
              ?.map(word => word.charAt(0).toUpperCase() + word.slice(1))
              ?.join(" ")} */}
        </Stack>

      </Box>

      <Box sx={{ width: "95%", maxWidth: "1700px", margin: "0 auto" }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 3 }} p={2} sx={{ borderRight: { md: "5px solid #f5821f" }, pr: 2, bgcolor: "#f7f3ef", height: "fit-content" }} >
            <Typography sx={{ fontWeight: 'bold', fontSize: 16, cursor: "pointer", color: router?.route === '/what-we-do/gallery' ? "#f5821f" : "#000" }} onClick={() => router.push('/what-we-do/gallery')}>Gallery</Typography>
            <Divider
              orientation="horizontal"
              variant="fullWidth"
              sx={{ my: 2 }}
            />
            <Typography sx={{ fontWeight: 'bold', fontSize: 16, cursor: "pointer", color: router?.route === '/what-we-do/bkbt' ? "#f5821f" : "#000" }} onClick={() => router.push('/what-we-do/bkbt')}>BKBT</Typography>
            <Divider
              orientation="horizontal"
              variant="fullWidth"
              sx={{ my: 2 }}
            />
            <Typography sx={{ fontWeight: 'bold', fontSize: 16, cursor: "pointer", color: router?.route === '/what-we-do/food-systems-youth-leadership-training' ? "#f5821f" : "#000" }} onClick={() => router.push('/what-we-do/food-systems-youth-leadership-training')}>Food Systems Youth Leadership Training</Typography>
            <Divider
              orientation="horizontal"
              variant="fullWidth"
              sx={{ my: 2 }}
            />
            <Typography sx={{ fontWeight: 'bold', fontSize: 16, cursor: "pointer", color: router?.route === '/what-we-do/fosylx' ? "#f5821f" : "#000" }} onClick={() => router.push('/what-we-do/fosylx')}>FOSYLx</Typography>
            <Divider
              orientation="horizontal"
              variant="fullWidth"
              sx={{ my: 2 }}
            />
            <Typography sx={{ fontWeight: 'bold', fontSize: 16, cursor: "pointer", color: router?.route === '/what-we-do/impact-fellowship' ? "#f5821f" : "#000" }} onClick={() => router.push('/what-we-do/impact-fellowship')}>IMPACT Fellowship</Typography>
            <Divider
              orientation="horizontal"
              variant="fullWidth"
              sx={{ my: 2 }}
            />

          </Grid>
          <Grid size={{ xs: 12, md: 9 }} py={2} pl={{ md: 4 }}>

            <Box
              component="img"
              src="/assets/impcactfull.jpeg" // Replace with your actual image path
              alt="SUN Youth Network Network Bangladesh"
              sx={{ width: '100%', objectFit: 'cover', borderRadius: 2, mb: 3 }}
            />
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              The IMPACT Fellowship is a six-month youth leadership programme designed to develop a new generation of public health and nutrition leaders capable of addressing Bangladesh’s evolving nutrition challenges, including maternal and child nutrition, anemia, micronutrient deficiencies, and diet-related non-communicable diseases (NCDs).
              The fellowship combines expert-led training, practical workshops, peer learning, and community engagement to bridge academic knowledge with real-world impact and policy advocacy. Two cohorts of the fellowship were successfully held, with a total of 60 participants: 30 in Rangpur and 30 in Rajshahi. Fellows were drawn from diverse backgrounds, including medicine, public health, nutrition, agriculture, and food systems, reflecting a multisectoral approach to tackling nutrition challenges. During the training, participants developed leadership skills, learned evidence-based approaches, and gained practical tools to design and implement nutrition interventions.
              Following the training, all 60 fellows are actively engaged in community-level initiatives, translating their learning into tangible actions that promote healthier diets, safe food environments, and improved nutrition outcomes across their local communities. By fostering youth leadership, collaboration, and advocacy, the IMPACT Fellowship is creating a cohort of empowered young leaders committed to driving sustainable change in Bangladesh’s food and nutrition landscape.

            </Typography>


          </Grid>
        </Grid>

      </Box>

      <Grid container spacing={5} justifyContent="center" sx={{ width: "95%", maxWidth: "1200px", margin: "0 auto", my: 6 }}>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <img src="/assets/Link1.png" alt="" />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <img src="/assets/images.png" alt="" style={{ width: "210px", height: "120px", objectFit: 'contain', border: "1px solid #dedede", padding: "20px", borderRadius: 4 }} />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <img src="/assets/Link4.png" alt="" />
        </Grid>

      </Grid>
      <Box sx={{
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
      }}>
        <Typography variant="h4" sx={{ textAlign: 'center', mb: 4, fontWeight: 500, textTransform: "capitalize", fontSize: 40 }} >
          Get In Tuch
        </Typography>
        <Grid container spacing={3}  >

          <Grid size={{ xs: 12, sm: 6, md: 12 }} >
            <Stack maxWidth={900} mx={"auto"} direction={"column"} spacing={4} justifyContent={"center"} alignItems={"center"} height={"100%"} >
              <Typography variant="body1" fontWeight={500} fontSize={20}>Information collected from or submitted by, the SUN Youth Network Network and other relevant stakeholders.</Typography>
              <Stack direction={"row"} spacing={2} width={"100%"} >
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
              <textarea placeholder="Your Message" style={{ width: "100%", height: 150, borderRadius: 5, border: "1px solid #ccc", padding: 10 }} />
              <Button variant="contained" size="small" color="error" fontWeight={500} sx={{ width: 178, height: 48, backgroundColor: '#f5821f', '&:hover': { backgroundColor: '#f5821f' } }} >
                Send Message
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  )
}

export default impactfellowship