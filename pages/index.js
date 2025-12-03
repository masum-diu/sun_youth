import React from 'react'
import Button from '@mui/material/Button'
import { Box, Grid, Paper, Stack, Typography, Container } from '@mui/material'

function Home() {
  const getInvolvedOptions = [
    { image: "/assets/group_icon.png", title: "Join a SBN National Network!", description: "Our dynamic networks across Africa, Asia, and Latin America are seeking businesses committed to improving nutrition to join as members.", button: "SBN National Member" },
    { image: "/assets/public_icon.png", title: "Attend an event", description: "Join over 300 businesses committed to improving nutrition through the SBN Business Membership. Access exclusive resources, networking opportunities, and more.", button: "Events" },
    { image: "/assets/event_icon.png", title: "Learn more", description: "Participate in our webinars, workshops, and conferences to learn about the latest in business and nutrition, and connect with like-minded professionals.", button: "Resource" },
    { image: "/assets/email_icon.png", title: "Sign Up for Newsletter", description: "Stay updated with the latest news, resources, and events from SBN by subscribing to our monthly newsletter.", button: "Sign up" },

  ]
  const listItems = [
    {
      image: "/assets/governace.jpg", title: "Mission", description: "Strengthening civil society partnership with the GEF by enhancing informed participation, contributing to policy development and local action.", button: "Read More"
    },
    {
      image: "/assets/governace.jpg", title: "Governance", description: "Strengthening civil society partnership with the GEF by enhancing informed participation, contributing to policy development and local action.", button: "Read More"
    },
    {
      image: "/assets/governace.jpg", title: "Focal Points", description: "Strengthening civil society partnership with the GEF by enhancing informed participation, contributing to policy development and local action.", button: "Read More"
    },
  ]
  const latestNews=[
    {
    image:"/assets/governace.jpg",title:"GEF-9 Replenishment Meeting in Botswana Highlights CSO Roles in Driving Global Environmental Action",description:"Strengthening civil society partnership with the GEF by enhancing informed participation, contributing to policy development and local action.",button:"By GSO Admin . October 12, 2023",subtile:"News"
  },
    {
    image:"/assets/governace.jpg",title:"GEF-9 Replenishment Meeting in Botswana Highlights CSO Roles in Driving Global Environmental Action",description:"Strengthening civil society partnership with the GEF by enhancing informed participation, contributing to policy development and local action.",button:"By GSO Admin . October 12, 2023",subtile:"News"
  },
    {
    image:"/assets/governace.jpg",title:"GEF-9 Replenishment Meeting in Botswana Highlights CSO Roles in Driving Global Environmental Action",description:"Strengthening civil society partnership with the GEF by enhancing informed participation, contributing to policy development and local action.",button:"By GSO Admin . October 12, 2023",subtile:"News"
  },
    
]
  return (
    <Box bgcolor={"#fff"}>
      <Box
        sx={{
          backgroundImage: "url('assets/banner_image.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          minHeight: '65vh',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}
        role="img"
        aria-label="Hero background"
      >
        <Stack direction={"column"} spacing={3}   >
          <Typography variant="h3" sx={{ fontWeight: 500, fontSize: 60 }}>
            The Food Systems Dashboard
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 600, fontSize: 45, color: '#b20933' }}>
            THEN AND NOW
          </Typography>
          <Button variant="contained" color="primary" sx={{ width: 178, height: 56, fontSize: 17, fontWeight: '500', backgroundColor: '#b20933', '&:hover': { backgroundColor: '#b20933' } }}>
            learn more
          </Button>
          <Stack justifyContent={"flex-end"} alignItems={"flex-end"} >
            <Paper elevation={0} sx={{ mt: 5, px: 4, py: 2, backgroundColor: '#ffff', borderTopLeftRadius: 10, borderTopRightRadius: 10, borderBottomLeftRadius: 0, borderBottomRightRadius: 0, width: 1008, }} >
              <Stack direction={"row"} spacing={2} justifyContent={"space-between"} alignItems={"center"} >
                <Stack direction={"row"} spacing={4} alignItems={"center"}  >
                  <img src="/assets/image1.png" alt="" />
                  <Typography variant="h6" sx={{ fontWeight: 700, fontSize: 19 }}>
                    70th GEF Council <br />
                    Meeting – Dec. 2025
                  </Typography>
                </Stack>
                <Typography variant="h6" sx={{ fontWeight: 700, fontSize: 40, color: '#f5821f' }}>
                  Upcoming Events
                </Typography>
              </Stack>

            </Paper>
          </Stack>
        </Stack>
      </Box>
      <Grid container spacing={2} sx={{ bgcolor: '#f5821f', color: '#fff', py: 4 }}>
        <Grid size={{ md: 3, xs: 12 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, fontSize: 50, textAlign: 'center' }}>
            16
          </Typography>
          <Typography variant="body1" sx={{ mt: 1, textAlign: 'center', fontWeight: 400, fontSize: 20 }}>
            Regional Focal Points
          </Typography>
        </Grid>
        <Grid size={{ md: 3, xs: 12 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, fontSize: 50, textAlign: 'center' }}>
            5
          </Typography>
          <Typography variant="body1" sx={{ mt: 1, textAlign: 'center', fontWeight: 400, fontSize: 20 }}>
            Indigenous People’s Focal Points
          </Typography>
        </Grid>
        <Grid size={{ md: 3, xs: 12 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, fontSize: 50, textAlign: 'center' }}>
            50
          </Typography>
          <Typography variant="body1" sx={{ mt: 1, textAlign: 'center', fontWeight: 400, fontSize: 20 }}>
            CSO Members
          </Typography>
        </Grid>
        <Grid size={{ md: 3, xs: 12 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, fontSize: 50, textAlign: 'center' }}>
            30
          </Typography>
          <Typography variant="body1" sx={{ mt: 1, textAlign: 'center', fontWeight: 400, fontSize: 20 }}>
            Member Countries
          </Typography>
        </Grid>


      </Grid>

      {/* this section get involved */}
      <Box sx={{ py: 8, width: "95%", margin: "0 auto", maxWidth: "1700px" }}>

        <Typography variant="h4" sx={{ textAlign: 'center', fontWeight: 700, mb: 4 }}>
          Get Involved
        </Typography>

        <Grid container spacing={3} mt={15}>
          {getInvolvedOptions.map((option, index) => (<Grid size={{ xs: 12, sm: 6, md: 3 }} >
            <Paper key={index} elevation={3} sx={{ position: 'relative', pt: 6, pb: 0, borderRadius: 2, height: '520px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <Box sx={{ position: 'absolute', top: -80, left: '50%', transform: 'translateX(-50%)', bgcolor: '#f7f3ef', width: "100%", maxWidth: "178px", height: 178, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 6px 20px rgba(0,0,0,0.12)' }}>
                <img src={option.image} alt={option.title} width={92} height={84} />
              </Box>
              <Stack direction="column" spacing={2} justifyContent={"center"} alignItems={"center"} height={"100%"} sx={{ px: 3, }}>
                <Typography variant="h6" sx={{ mt: 2, fontWeight: 700, textAlign: 'center', fontSize: 20 }}>
                  {option.title}
                </Typography>
                <Typography variant="body2" sx={{ mt: 2, color: 'text.secondary', fontWeight: 500, fontSize: 16 }}>
                  {option.description}
                </Typography>
              </Stack>
              <Button variant="contained" fullWidth sx={{ mt: 3, backgroundColor: '#f5821f', '&:hover': { backgroundColor: '#f5821f' }, borderRadius: 0, py: 1.5, textTransform: "capitalize", fontSize: 18, fontWeight: 700, borderEndEndRadius: 8, borderEndStartRadius: 8, height: 43 }}>
                {option.button}
              </Button>
            </Paper>
          </Grid>))}



        </Grid>

        <Grid container spacing={3} mt={15}>
          {listItems.map((option, index) => (<Grid size={{ xs: 12, sm: 6, md: 4 }} >
            <Paper key={index} elevation={3} sx={{
              pt: 2,
              pb: 4,
              borderRadius: 2,
              height: '331px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              backgroundImage: `
      linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.9)
      ),
      url('${option.image}')
    `,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              color: '#fff',
            }}>

              <Stack direction="column" spacing={2} justifyContent={"flex-end"} alignItems={"flex-start"} height={"100%"} sx={{ px: 3, }}>
                <Typography variant="h6" sx={{ mt: 2, fontWeight: 700, textAlign: 'center', fontSize: 20 }}>
                  {option.title}
                </Typography>
                <Typography variant="body2" sx={{ mt: 2, fontWeight: 500, fontSize: 14 }}>
                  {option.description}
                </Typography>
                <Typography variant="body2" fullWidth sx={{ mt: 3, borderRadius: 0, py: 1.5, textTransform: "uppercase", fontSize: 14, fontWeight: 700, borderEndEndRadius: 8, borderEndStartRadius: 8, cursor: 'pointer', color: "#f5821f" }}>
                  {option.button}
                </Typography>
              </Stack>

            </Paper>
          </Grid>))}
        </Grid>

      </Box>
      <Box mt={15} bgcolor={"#f8f7f5"}>
        <Typography variant="body1" color="initial" fontWeight={700} fontSize={19} sx={{ bgcolor: "#f5821f", maxWidth: 873, textAlign: "right", pr: 5, py: 1, color: "#fff" }}>The map of SUN Civil Society Alliances (CSAs)</Typography>
        <Grid container spacing={3} sx={{ width: "95%", maxWidth: "1700px", margin: "0 auto" }} >

          <Grid size={{ xs: 12, sm: 6, md: 6 }} >
            <Stack direction={"column"} spacing={4} justifyContent={"center"} alignItems={"center"} height={"100%"} >
              <Typography variant="body1" color="initial" fontWeight={500} fontSize={60}>Lorem Ipsum is simply
                dummy text of the printing </Typography>
              <Typography variant="body1" color="#7c7c7c">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distributio

                of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for <br /> <br /> 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
              </Typography>
              <Stack direction={"row"} spacing={2} width={"100%"} >
                <Button variant="contained" color="error" fontWeight={500}  >
                  full view
                </Button>
              </Stack>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 6 }} >
            <img src="/assets/bangladesh.png" alt="" width={"100%"} />
          </Grid>
        </Grid>

      </Box>
      <Paper elevation={0} sx={{ position: 'relative', pt: 6, pb: 0, height: '620px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', mt: 60, bgcolor: "#f5821f" }}>
        <Box sx={{ position: 'absolute', top: -400, left: '50%', transform: 'translateX(-50%)', width: "100%", display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
          <img src={"/assets/gainandsdf.png"} />
        </Box>
        <Typography variant="body1" sx={{ mt: 25, }} color="#fff" fontWeight={500} fontSize={40} textAlign={"center"}>How Many Youths Have Been Trained </Typography>
        <Grid container spacing={3} sx={{ width: "95%", maxWidth: "1700px", margin: "0 auto", mb: 4 }} >
          <Grid size={{ xs: 12, sm: 6, md: 3 }} textAlign={"center"}>
             <img src="/assets/icons2.png" alt="" style={{border:"3px solid #fff",padding:10,borderRadius:"50%"}}/>
            <Typography variant="h3" color="#fff" fontWeight={700} fontSize={40} textAlign={"center"}>5000+</Typography>
            <Typography variant="body1" color="#fff" fontWeight={500} fontSize={20} textAlign={"center"}>Volunteer Helpers </Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }} textAlign={"center"}>
              <img src="/assets/icons1.png" alt=""style={{border:"3px solid #fff",padding:10,borderRadius:"50%"}} />
            <Typography variant="h3" color="#fff" fontWeight={700} fontSize={40} textAlign={"center"}>1200+</Typography>
            <Typography variant="body1" color="#fff" fontWeight={500} fontSize={20} textAlign={"center"}>Donated</Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}textAlign={"center"} >
              <img src="/assets/icons3.png" alt="" style={{border:"3px solid #fff",padding:10,borderRadius:"50%"}} />
            <Typography variant="h3" color="#fff" fontWeight={700} fontSize={40} textAlign={"center"}>300+</Typography>
            <Typography variant="body1" color="#fff" fontWeight={500} fontSize={20} textAlign={"center"}>Products & Gifts</Typography>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }} textAlign={"center"} >
            <img src="/assets/icons2.png" alt="" style={{border:"3px solid #fff",padding:10,borderRadius:"50%"}} />
            <Typography variant="h3" color="#fff" fontWeight={700} fontSize={40} textAlign={"center"}>50+</Typography>
            <Typography variant="body1" color="#fff" fontWeight={500} fontSize={20} textAlign={"center"}>Volunteer Helpers</Typography>
          </Grid>
        </Grid>
      </Paper>
         <Box sx={{ py: 8, width: "95%", margin: "0 auto", maxWidth: "1700px" }}>

        <Typography variant="h4" sx={{ textAlign: 'center', fontWeight: 500, mb: 4 ,textTransform:"capitalize",fontSize:40}}>
          Impact Stories
        </Typography>

        <Grid container spacing={3} >
          {latestNews.map((option, index) => (<Grid size={{ xs: 12, sm: 6, md: 4 }} key={index} >
           
              <Box>
                <img src={option.image} alt={option.title}  width={"100%"} />
              </Box>
              <Stack direction="column" spacing={2} >
                <Typography variant="h6" sx={{ mt: 2, fontWeight: 700,  fontSize: 17, color: '#f5821f' }}>
                  {option.subtile}
                </Typography>
                <Typography variant="h6" sx={{ mt: 2, fontWeight: 700,  fontSize: 20 }}>
                  {option.title}
                </Typography>
                <Typography variant="body2" sx={{ mt: 2, color: 'text.secondary', fontWeight: 500, fontSize: 16 }}>
                  {option.button}
                </Typography>
                <Typography variant="body2" sx={{ mt: 2, color: 'text.secondary', fontWeight: 500, fontSize: 16 }}>
                  {option.description}
                </Typography>
              </Stack>
             
            
          </Grid>))}



        </Grid>
        </Box>
    </Box>
  )
}

export default Home