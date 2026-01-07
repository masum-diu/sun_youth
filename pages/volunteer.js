import React from 'react';
import { Box, Typography, Grid, TextField, Button, Stack } from '@mui/material';
import { useRouter } from 'next/router';

function VolunteerForm() {
  const router = useRouter();

  return (
    <React.Fragment>
      <Box sx={{ bgcolor: "#f5821f", height: 200, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", color: "#fff", }}>
        <Stack direction={"row"} alignItems="center" justifyContent="space-between"
          sx={{ width: "95%", maxWidth: "1700px", margin: "0 auto", }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>JOIN OUR NETWORK</Typography>
          {/* <Box component="span" sx={{ fontSize: 14, color: "#fff", fontWeight: 600 }}>{router?.route}</Box> */}
        </Stack>
      </Box>

      <Box sx={{ width: "95%", maxWidth: "1700px", margin: "0 auto", my: 4 }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', mb: 2 }}>
          Join as a Volunteer
        </Typography>
        <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, textAlign: 'justify', mb: 4 }}>
          Your time, skills, and passion can make a huge difference. By joining us as a volunteer, you become part of a dynamic movement dedicated to creating a healthier future for the youth of Bangladesh. Please fill out the form below to get started.
        </Typography>

        <Box component="form" noValidate autoComplete="off">
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                required
                fullWidth
                id="fullName"
                label="Full Name"
                name="fullName"
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                type="email"
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                required
                fullWidth
                id="phone"
                label="Phone Number"
                name="phone"
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                id="address"
                label="Your Address"
                name="address"
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 12 }}>
              <TextField
                required
                fullWidth
                id="motivation"
                label="Why do you want to volunteer with us?"
                name="motivation"
                multiline
                rows={4}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 2, backgroundColor: '#f5821f', '&:hover': { backgroundColor: '#d4701c' }, py: 1.5, px: 5 }}
              >
                Become a Volunteer
              </Button>
            </Grid>

          </Grid>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default VolunteerForm;