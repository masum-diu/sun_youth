import React from 'react'
import Button from '@mui/material/Button'
import { Box, Grid, Paper, Stack, Typography } from '@mui/material'

function Home() {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: "url('assets/banner_image.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          // minHeight: '60vh',
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
          <Typography variant="h6" sx={{ fontWeight: 700, fontSize: 50,  textAlign: 'center' }}>
            16
          </Typography>
          <Typography variant="body1" sx={{ mt: 1, textAlign: 'center', fontWeight: 400, fontSize: 20 }}>
            Regional Focal Points
          </Typography>
        </Grid>
        <Grid size={{ md: 3, xs: 12 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, fontSize: 50,  textAlign: 'center' }}>
            5
          </Typography>
          <Typography variant="body1" sx={{ mt: 1, textAlign: 'center', fontWeight: 400, fontSize: 20 }}>
            Indigenous People’s Focal Points
          </Typography>
        </Grid>
        <Grid size={{ md: 3, xs: 12 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, fontSize: 50,  textAlign: 'center' }}>
            50
          </Typography>
          <Typography variant="body1" sx={{ mt: 1, textAlign: 'center', fontWeight: 400, fontSize: 20 }}>
           CSO Members
          </Typography>
        </Grid>
        <Grid size={{ md: 3, xs: 12 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, fontSize: 50,  textAlign: 'center' }}>
            30
          </Typography>
          <Typography variant="body1" sx={{ mt: 1, textAlign: 'center', fontWeight: 400, fontSize: 20 }}>
            Member Countries
          </Typography>
        </Grid>
       

      </Grid>
    </Box>
  )
}

export default Home