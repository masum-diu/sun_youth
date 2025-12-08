// DemographicCards.jsx
import React, { useEffect, useState } from 'react';
import {
    Box,
    Grid,
    Paper,
    Typography,
    Stack,
    useTheme,
} from '@mui/material';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';

// Demographic cards with animated donut progress and image-icons
export default function DemographicCards({
    male = 54,
    female = 46,
    backgroundImage = '/mnt/data/a201086a-e58c-4982-a599-ac3a8ed86839.png',
    Title,
    inView,
}) {
    const theme = useTheme();
    const maleColor = theme.palette.primary.main; // blue
    const femaleColor = theme.palette.error.main; // pink/red

    return (
        <Box
            sx={{
                width: '100%',
                p: { xs: 2, md: 4 },
                backgroundImage: `url('${backgroundImage}')`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}
        >

            <Box sx={{ textAlign: 'center', mb: 3 }}>

                <Box
                    component="span"
                    sx={{
                        display: 'inline-block',
                        mt: 0.5,
                        px: 1.5,
                        py: 0.5,
                        borderRadius: 2,
                        bgcolor: 'rgba(0,0,0,0.06)',
                        fontSize: 12,
                        fontWeight: 600,
                    }}
                >
                    {Title}
                </Box>
            </Box>

            <Grid container spacing={4} justifyContent="center">
                <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                    <Paper
                        // elevation={6}
                        sx={{
                            p: 3,
                            borderRadius: 3,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                            transition: 'transform 300ms ease, box-shadow 300ms ease',
                            '&:hover': { transform: 'translateY(-6px)', boxShadow: 6 },
                        }}
                    >
                        <Donut
                            value={female}
                            size={180}
                            stroke={22}
                            color={femaleColor}
                            label="FEMALE"
                            icon={<FemaleIcon style={{ width: 48, height: 48 }} />}
                            inView={inView}
                        />
                        <Typography
                            variant="subtitle1"
                            sx={{ mt: 2, fontWeight: 700, color: femaleColor }}
                        >
                            FEMALE
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>
                            {female}% of the population
                        </Typography>
                    </Paper>
                </Grid>

                <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                    <Paper
                        //  elevation={6}
                        sx={{
                            p: 3,
                            borderRadius: 3,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                            transition: 'transform 300ms ease, box-shadow 300ms ease',
                            '&:hover': { transform: 'translateY(-6px)', boxShadow: 6 },
                        }}
                    >
                        <Donut
                            value={male}
                            size={180}
                            stroke={22}
                            color={maleColor}
                            label="MALE"
                            icon={<MaleIcon style={{ width: 48, height: 48 }}/>}
                            inView={inView}
                        />
                        <Typography
                            variant="subtitle1"
                            sx={{ mt: 2, fontWeight: 700, color: maleColor }}
                        >
                            MALE
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>
                            {male}% of the population
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
}

// Donut renders a circular donut using CSS conic-gradient so we can control the arc
function Donut({ value = 50, size = 140, stroke = 10, color = '#1976d2', label, icon, inView }) {
    // ensure value between 0-100
    const v = Math.max(0, Math.min(100, value));
    const diameter = size;
    const inner = diameter - stroke * 2;

    // animated progress state (0 -> v)
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (inView) {
            let raf;
            const duration = 800; // ms
            const start = performance.now();
            const from = 0;
            const to = v;

            function step(now) {
                const elapsed = now - start;
                const t = Math.min(1, elapsed / duration);
                // easeOutCubic
                const eased = 1 - Math.pow(1 - t, 3);
                const current = Math.round(from + (to - from) * eased);
                setProgress(current);
                if (t < 1) raf = requestAnimationFrame(step);
            }

            raf = requestAnimationFrame(step);
            return () => cancelAnimationFrame(raf);
        }
    }, [v, inView]);

    return (
        <Box
            sx={{
                width: diameter,
                height: diameter,
                borderRadius: '50%',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                // track background (light grey)
                bgcolor: 'transparent',
                // custom CSS property for color and value used in conic-gradient
                '--arc-color': color,
                '--arc-value': `${progress}%`,
                transition: 'transform 300ms ease',
                '&:hover': { transform: 'scale(1.03)' },
            }}
        >
            {/* arc layer */}
            <Box
                sx={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    background: `conic-gradient(var(--arc-color) var(--arc-value), rgba(0,0,0,0) var(--arc-value))`,
                    // subtle outer track ring using box-shadow
                    boxShadow: 'inset 0 0 0 10px rgba(0,0,0,0.06)',
                    transform: 'rotate(-90deg)',
                }}
            />

            {/* inner circle (cutout) */}
            <Box
                sx={{
                    width: inner,
                    height: inner,
                    borderRadius: '50%',
                    bgcolor: 'background.paper',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    boxShadow: 1,
                    zIndex: 2,
                }}
            >
                <Stack alignItems="center" spacing={0.5} sx={{ transform: `scale(${1 + progress / 300})`, transition: 'transform 350ms ease' }}>
                    <Box sx={{ transition: 'transform 350ms ease', transform: `translateY(${(1 - progress / 100) * 6}px)` }}>{icon}</Box>
                    <Typography sx={{ fontWeight: 800, transition: 'all 250ms ease' }}>{progress}%</Typography>
                    <Typography sx={{ fontSize: 11, letterSpacing: 1 }}>{label}</Typography>
                </Stack>
            </Box>

            {/* subtle outer ring to mimic the image's grey border */}
            <Box
                sx={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    border: '6px solid rgba(0,0,0,0.06)',
                    zIndex: 1,
                }}
            />
        </Box>
    );
}
