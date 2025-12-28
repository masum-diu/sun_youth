import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { useRouter } from 'next/router';
import ConstructionIcon from '@mui/icons-material/Construction';

function NewsBlogsPage() {
  const router = useRouter();
  return (
    <React.Fragment>
      <Box sx={{ bgcolor: "#f5821f", height: 200, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", color: "#fff", }}>
        <Stack direction={"row"} alignItems="center" justifyContent="space-between"
          sx={{ width: "95%", maxWidth: "1700px", margin: "0 auto", }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>RESOURCES</Typography>
          <Box component="span" sx={{ fontSize: 14, color: "#fff", fontWeight: 600 }}>{router?.route}</Box>
        </Stack>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '50vh',
          textAlign: 'center',
          p: 3,
        }}
      >
        <ConstructionIcon sx={{ fontSize: 60, color: 'text.secondary', mb: 2 }} />
        <Typography variant="h4" component="h1" gutterBottom>
          Under Construction
        </Typography>
        <Typography variant="body1" color="text.secondary">
          We're working hard to bring you the latest news and blog posts. Please check back soon!
        </Typography>
      </Box>
    </React.Fragment>
  );
}

export default NewsBlogsPage;