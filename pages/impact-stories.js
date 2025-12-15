import React from 'react';
import { Box, Typography, Container, Grid, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import Header from './components/Header';
import NextLink from 'next/link';

// Placeholder data for impact stories
const stories = [
    {
        title: 'Empowering Youth Through Education',
        excerpt: 'Discover how our programs provided educational resources to over 5,000 young people in underserved communities this year.',
        image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop',
        link: '/coming-soon',
    },
    {
        title: 'Community Health Initiatives',
        excerpt: 'Our volunteers organized health camps that reached 2,000 families, providing essential health check-ups and awareness.',
        image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070&auto=format&fit=crop',
        link: '/coming-soon',
    },
    {
        title: 'Environmental Cleanup Drive',
        excerpt: 'A story of change, where local youth came together to clean and restore a local park, making it a safe space for everyone.',
        image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop',
        link: '/coming-soon',
    },
];

function ImpactStoriesPage() {
    return (
        <>
            <Box sx={{ bgcolor: '#f0eee2', py: { xs: 6, md: 10 } }}>
                <Container maxWidth="lg">
                    <Typography variant="h2" component="h1" textAlign="center" gutterBottom sx={{ fontWeight: 700 }}>
                        Our Impact Stories
                    </Typography>
                    <Typography variant="h6" color="text.secondary" textAlign="center" sx={{ maxWidth: '700px', mx: 'auto' }}>
                        See the real-world change we are creating. These stories highlight the dedication of our volunteers and the resilience of the communities we serve.
                    </Typography>
                </Container>
            </Box>

            <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
                <Grid container spacing={4}>
                    {stories.map((story) => (
                        <Grid item key={story.title} size={{ xs: 12, sm: 6, md: 4 }}>
                            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 3, '&:hover': { boxShadow: 6 } }}>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={story.image}
                                    alt={story.title}
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
                                        {story.title}
                                    </Typography>
                                    <Typography color="text.secondary">
                                        {story.excerpt}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button component={NextLink} href={story.link} size="small" sx={{ color: '#f5821f', fontWeight: 'bold' }}>
                                        Read More
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
}

export default ImpactStoriesPage;