import { Box, Button, Divider, Grid, Stack, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react'

function Sunmovement() {
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
                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, md: 3 }} p={2} sx={{height: "fit-content", borderRight: { md: "5px solid #f5821f" }, pr: 2, bgcolor: "#f7f3ef" }} >
                        <Typography sx={{ fontWeight: 'bold', fontSize: 16, cursor: "pointer", color: router?.route === '/about-us/Sun-youth-network-brief' ? "#f5821f" : "#000" }} onClick={() => router.push('/about-us/Sun-youth-network-brief')}>SUN Youth Network Network Bangladesh Brief</Typography>
                        <Divider
                            orientation="horizontal"
                            variant="fullWidth"
                            sx={{ my: 2 }}
                        />
                        <Typography sx={{ fontWeight: 'bold', fontSize: 16, cursor: "pointer", color: router?.route === '/about-us/government-mohfw' ? "#f5821f" : "#000"}} onClick={() => router.push('/about-us/government-mohfw')}>Government (MoHFW)</Typography>
                        <Divider
                            orientation="horizontal"
                            variant="fullWidth"
                            sx={{ my: 2 }}
                        />
                        <Typography sx={{ fontWeight: 'bold', fontSize: 16, cursor: "pointer" ,color: router?.route === '/about-us/Sun-movement' ? "#f5821f" : "#000"}} onClick={() => router.push('/about-us/Sun-movement')}>Sun Movement</Typography>
                        <Divider
                            orientation="horizontal"
                            variant="fullWidth"
                            sx={{ my: 2 }}
                        />
                        <Typography sx={{ fontWeight: 'bold', fontSize: 16, cursor: "pointer", color: router?.route === '/about-us/secretariat-gain' ? "#f5821f" : "#000"}} onClick={() => router.push('/about-us/secretariat-gain')}>Secretariat (GAIN) info and logo</Typography>
                        <Divider
                            orientation="horizontal"
                            variant="fullWidth"
                            sx={{ my: 2 }}
                        />

                    </Grid>
                    <Grid size={{ xs: 12, md: 9 }} py={2} >
                        <Box
                                     component="img"
                                     src="/assets/gainandsdf.png" // Replace with your actual image path
                                     alt="SUN Youth Network Network Bangladesh"
                                     sx={{ width: '100%', objectFit: 'cover', borderRadius: 2, mb: 3 }}
                                   />
                                   <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
                                     This is where you can add a detailed description of the SUN Youth Network Network Bangladesh. You can talk about its history, goals, and the impact it has made. This text will serve as an introduction before the mission and vision statements.
                                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus minus ratione Sunt quaerat veniam dolorem, aliquam dignissimos quasi quia iure quisquam animi neque iusto vitae fuga consequatur illo officia! Vitae eum ea repudiandae, magnam perferendis quibusdam totam explicabo consequatur asperiores! Aspernatur minus iusto natus magni commodi unde tempora accusamus aliquid qui? Similique debitis dignissimos eveniet corrupti cumque nobis necessitatibus nesciunt recusandae voluptates tenetur quam magni doloremque, reprehenderit, earum labore eaque nostrum soluta? Esse voluptate, earum facilis sequi inventore quasi asperiores nostrum, non aut provident nemo temporibus amet accusantium quisquam quos cupiditate a quis! Labore esse facere, possimus est iusto cum dolores nihil, sit illo doloremque nesciunt molestiae voluptate exercitationem, adipisci laudantium dolore expedita ratione deleniti! Id deleniti recusandae, ullam eligendi quos illum iusto velit nostrum commodi neque doloribus. Magnam quasi voluptates, quam exercitationem eligendi fuga est et, reprehenderit eius doloribus id. Libero voluptas rem optio. Unde saepe omnis officiis explicabo temporibus dicta totam nesciunt sed, numquam perspiciatis facilis necessitatibus praesentium corrupti assumenda amet minima autem corporis et quis voluptatum aliquam! Nostrum doloremque tempore assumenda voluptatibus, eaque accusamus dicta Sunt. Laborum nesciunt facere tempore quibusdam delectus. At culpa quasi esse, ducimus consequuntur incidunt temporibus fuga quidem tempora vero delectus, aut expedita?
                       
                                   </Typography>
                    </Grid>
                </Grid>
            </Box>
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

export default Sunmovement