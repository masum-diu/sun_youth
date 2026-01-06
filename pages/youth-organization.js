import React from 'react';
import { Box, Typography, Grid, TextField, Button, Stack } from '@mui/material';
import { useRouter } from 'next/router';

function YouthOrganizationForm() {
  const router = useRouter();

  return (
    <React.Fragment>
      <Box sx={{ bgcolor: "#f5821f", height: 200, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", color: "#fff", }}>
        <Stack direction={"row"} alignItems="center" justifyContent="space-between"
          sx={{ width: "95%", maxWidth: "1700px", margin: "0 auto", }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>JOIN OUR NETWORK</Typography>
          <Box component="span" sx={{ fontSize: 14, color: "#fff", fontWeight: 600 }}>{router?.route}</Box>
        </Stack>
      </Box>

      <Box sx={{ width: "95%", maxWidth: "1200px", margin: "40px auto" }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', mb: 2 }}>
          Join as a Youth Organization
        </Typography>
        <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, textAlign: 'justify', mb: 4 }}>
          We are thrilled that you're interested in joining the SUN Youth Network Network. Please fill out the form below to register your organization. Together, we can make a significant impact on nutrition and health for the youth in Bangladesh.
        </Typography>

        <Box component="form" noValidate autoComplete="off">
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                required
                fullWidth
                id="organizationName"
                label="Organization Name"
                name="organizationName"
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                required
                fullWidth
                id="contactPerson"
                label="Contact Person Name"
                name="contactPerson"
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
                id="website"
                label="Website (Optional)"
                name="website"
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                required
                fullWidth
                id="message"
                label="Tell us about your organization and why you want to join"
                name="message"
                multiline
                
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 2, backgroundColor: '#f5821f', '&:hover': { backgroundColor: '#d4701c' }, py: 1.5, px: 5 }}
              >
                Submit Application
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default YouthOrganizationForm;