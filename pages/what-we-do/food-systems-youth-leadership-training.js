import { Box, Button, Divider, Grid, Stack, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react'

function foodsystemsyouthleadershiptraining() {
  const router = useRouter();
  return (
    <React.Fragment>
      <Box sx={{ bgcolor: "#f5821f", height: 200, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", color: "#fff", }}>
        <Stack direction={"row"} alignItems="center" justifyContent="space-between"
          sx={{ width: "95%", maxWidth: "1700px", margin: "0 auto", }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>ABOUT US</Typography>
          <Box component="span" sx={{ fontSize: 14, color: "#fff", fontWeight: 600 }}>{router?.route}</Box>
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
            <Typography sx={{ fontWeight: 'bold', fontSize: 16, cursor: "pointer", color: router?.route === '/what-we-do/fosylx' ? "#f5821f" : "#000" }} onClick={() => router.push('/what-we-do/fosylx')}>FoSYLx</Typography>
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
              src="/assets/gainandsdf.png" // Replace with your actual image path
              alt="SUN Youth Network Bangladesh"
              sx={{ width: '100%', objectFit: 'cover', borderRadius: 2, mb: 3 }}
            />
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
               <span style={{fontWeight:700}}>Brief About Food Systems Youth Leadership Training</span> <br /> <br />
              Since the United Nations Food Systems Summit (UNFSS) 2021, young people have demonstrated strong leadership in advancing the food systems agenda and mobilizing individuals and organizations to engage in meaningful action. To achieve lasting transformation in food systems, it is essential to support this growing youth movement and recognize young people as capable contributors to sustainable change. Investing in youth leadership development not only strengthens individual capacities but also reinforces the idea that food systems transformation is a shared responsibility. At both national and global levels, empowered youth leaders can mobilize communities, influence decision-makers, and amplify youth voices to help build fairer, more sustainable, and more resilient food systems.

              The Food Systems Youth Leadership Training is designed to inspire and equip young individuals to become active leaders within their communities, with a particular focus on food systems transformation. The training aims to increase youth participation in food policy processes, ensuring their perspectives are meaningfully represented in decision-making spaces. Participants will also be encouraged to influence food businesses and promote healthier, more nutritious food and snack options. A key focus of the program is enabling participants to cascade their learning back to their communities, nurturing a new generation of food systems youth leaders committed to positive change.

              This three-day residential training combines interactive learning, peer exchange, and inspirational sessions to strengthen participants’ knowledge, skills, and leadership capacities. It also aims to build a strong and engaged community of youth leaders who support one another and work collectively to design and implement actions for food systems transformation.



            </Typography>


          </Grid>
        </Grid>

      </Box>

      <Grid container spacing={5} justifyContent="center" sx={{ width: "95%", maxWidth: "1200px", margin: "0 auto", my: 6 }}>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}   >
          <img src="/assets/Link1.png" alt="" />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}   >
          <img src="/assets/Link4.png" alt="" />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}   >
          <img src="/assets/Link3.png" alt="" />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}   >
          <img src="/assets/images.png" alt="" style={{ width: "210px", height: "120px", objectFit: 'contain', border: "1px solid #dedede", padding: "20px", borderRadius: 4 }} />
        </Grid>

      </Grid>
      <Box sx={{
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
      }}>
        <Typography variant="h4" sx={{ textAlign: 'center', mb: 4, fontWeight: 500, textTransform: "capitalize", fontSize: 40 }} >
          Get In Tuch
        </Typography>
        <Grid container spacing={3}  >

          <Grid size={{ xs: 12, sm: 6, md: 12 }} >
            <Stack maxWidth={900} mx={"auto"} direction={"column"} spacing={4} justifyContent={"center"} alignItems={"center"} height={"100%"} >
              <Typography variant="body1" fontWeight={500} fontSize={20}>Information collected from or submitted by, the Civil Society network and other relevant stakeholders.</Typography>
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

export default foodsystemsyouthleadershiptraining