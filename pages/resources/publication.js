import { Box, Stack, Typography, Container, Grid, Card, CardMedia, CardContent, Button, CardActions } from '@mui/material';
import React from 'react'

// Mock data for publications. In a real application, you would likely fetch this
// from a CMS or an API.
const publicationsData = [
  {
    id: 1,
    title: 'Annual Report 2026',
    description: 'The active participation of our volunteers and the generous support from our donors have been instrumental in driving our mission forward. This report highlights the milestones we achieved together in 2023.',
    imageUrl: '/assets/pablication.png',
    fileUrl: 'https://heyzine.com/flip-book/00f5e4b24a.html#page/4',
    category: 'Annual Report',
  },
  {
    id: 2,
    title: 'Quarterly Newsletter - Q4 2026',
    description: 'A look back at the final quarter of 2023, showcasing our community events, program successes, and stories from those we serve.',
    imageUrl: '/assets/pablication.png',
    fileUrl: 'https://heyzine.com/flip-book/00f5e4b24a.html#page/4',
    category: 'Newsletter',
  },
  {
    id: 3,
    title: 'Impact Study 2026',
    description: 'A deep dive into the measurable impact of our programs on the community, backed by data and heartfelt testimonials.',
    imageUrl: '/assets/pablication.png',
    fileUrl: 'https://heyzine.com/flip-book/00f5e4b24a.html#page/4',
    category: 'Research',
  },
  {
    id: 4,
    title: 'Volunteer Handbook',
    description: 'An essential guide for all our new and existing volunteers, outlining our values, procedures, and opportunities for engagement.',
    imageUrl: '/assets/pablication.png',
    fileUrl: 'https://heyzine.com/flip-book/00f5e4b24a.html#page/4',
    category: 'Handbook',
  },
];

function PublicationPage() {
  return (
    <Box sx={{ bgcolor: 'grey.50', color: 'text.primary' }}>
      <Box sx={{ bgcolor: "#f5821f", height: 200, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", color: "#fff", }}>
        <Stack direction={"row"} alignItems="center" justifyContent="space-between"
          sx={{ width: "95%", maxWidth: "1700px", margin: "0 auto", }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>RESOURCES</Typography>
        </Stack>
      </Box>
      <Container maxWidth="xl" sx={{ py: { xs: 4, md: 6 } }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" component="h1" fontWeight="bold" gutterBottom>
            Our Publications
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Explore our annual reports, newsletters, and other documents.
          </Typography>
        </Box>
      </Container>
      <Grid container spacing={4} sx={{ width: '95%', maxWidth: "1700px", margin: "0 auto" }}>
        {publicationsData?.map((pub) => (
          <Grid key={pub.id} size={{ xs: 12, sm: 6, md: 3 }}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="200"
                image={pub.imageUrl}
                alt={`Cover for ${pub.title}`}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="caption" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                  {pub.category}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2" fontWeight="bold">
                  {pub.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {pub.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ p: 2, pt: 0 }}>
                <Button
                  component="a"
                  href={pub.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  fullWidth
                  sx={{
                    bgcolor: '#f5821f',
                    '&:hover': { bgcolor: '#9e082d' }
                  }}
                >
                  View Publication
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

    </Box>
  );
}

export default PublicationPage;