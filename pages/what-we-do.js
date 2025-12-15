import React from 'react';
import { Box, Typography, Container } from '@mui/material';

function WhatWeDoPage() {
    return (
        <Container maxWidth="md">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '100vh',
                    textAlign: 'center',
                    py: 8,
                }}
            >
                <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Coming Soon!
                </Typography>
                <Typography variant="h5" color="text.secondary">
                    Our "What We Do" page is currently under construction.
                    <br />
                    Please check back later for updates.
                </Typography>
            </Box>
        </Container>
    );
}

export default WhatWeDoPage;