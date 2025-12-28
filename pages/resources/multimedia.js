import React from 'react';
import { Box, Typography, Stack, Grid, Card, CardContent } from '@mui/material';
import { useRouter } from 'next/router';

// Sample video data. Replace with your actual YouTube video IDs and details.
const videoData = [
  
  {
    id: '42EBvazc5AU',
    title: 'Youth Engagement in Food Systems',
    description: 'A deep dive into how youth are shaping the future of food systems and nutrition in Bangladesh.',
  },
  {
    id: 'vCNLrZHQ_1I',
    title: 'Youth Nutrition Advocacy',
    description: 'Learn how young advocates are making their voices heard for better nutrition policies.',
  },
  {
    id: 'tfdMZ0PhYUE',
    title: 'Community Outreach Success',
    description: 'See the impact of our community outreach programs on local health and nutrition.',
  },
];

function MultimediaPage() {
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

      <Box sx={{ width: "95%", maxWidth: "1700px", margin: "40px auto" }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', mb: 4 }}>
          Multimedia Gallery
        </Typography>
        <Grid container spacing={4}>
          {videoData.map((video) => (
            <Grid  key={video.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 3 }}>
                <Box sx={{ position: 'relative', paddingTop: '56.25%' /* 16:9 Aspect Ratio */ }}>
                  <iframe
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      border: 0,
                    }}
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>
                    {video.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {video.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </React.Fragment>
  );
}

export default MultimediaPage;