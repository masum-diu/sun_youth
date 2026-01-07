import React from 'react'
import { Box, Container, Typography, Link, Grid, Button, Divider } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'

function Footer() {
    return (
        <Box component="footer" sx={{ backgroundColor: '#36383A', color: '#eee', }}>
            <Box sx={{ py: 8, width: '95%', margin: '0 auto', maxWidth: '1700px' }}>
                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Box >
                                {/* Replace with real logo image if available */}
                                <img src="/assets/logo1.png" alt="SUN Youth Network" style={{ width: '100%', maxWidth: "487px" }} />
                            </Box>
                        </Box>
                        <Typography sx={{ mt: 4, color: 'rgba(255,255,255,0.8)', maxWidth: 480, lineHeight: 1.8 }}>
                            SUN Youth Network Bangladesh is a youth-led global alliance advancing environmental sustainability and climate action by empowering young leaders and organizations.
                        </Typography>
                    </Grid>

                    <Grid size={{ xs: 6, md: 2 }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, color: '#fff' }}>
                            About
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            {/* <Link href="#" underline="none" sx={{ color: 'rgba(255,255,255,0.85)' }}>About the Network</Link> */}
                            <Link href="#" underline="none" sx={{ color: 'rgba(255,255,255,0.85)' }}>House 20, Road 99, Gulshan 2, Dhaka 1212</Link>
                            {/* <Link href="#" underline="none" sx={{ color: 'rgba(255,255,255,0.85)' }}>Regional Focal Points</Link> */}
                            {/* <Link href="#" underline="none" sx={{ color: 'rgba(255,255,255,0.85)' }}>Contact</Link> */}
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 6, md: 2 }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, color: '#fff' }}>
                            Members
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <Link href="#" underline="none" sx={{ color: 'rgba(255,255,255,0.85)' }}>Membership benefits</Link>
                            {/* <Link href="#" underline="none" sx={{ color: 'rgba(255,255,255,0.85)' }}>Application Procedure</Link>
                            <Link href="#" underline="none" sx={{ color: 'rgba(255,255,255,0.85)' }}>Application Form</Link> */}
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 6, md: 4 }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, color: '#fff' }}>
                            CONNECT WITH US
                        </Typography>
                        <Typography sx={{ color: 'rgba(255,255,255,0.8)', mb: 2 }}>
                            We post regularly on social media, and we email important updates to the Network members.
                        </Typography>
                        <Button variant="contained" sx={{ backgroundColor: '#f07f2a', '&:hover': { backgroundColor: '#f07f2a' }, color: '#fff' }}>
                            NEWSLETTER
                        </Button>

                    </Grid>
                </Grid>
            </Box>

            <Divider sx={{ borderColor: 'rgba(255,255,255,0.12)' }} />

            <Box sx={{ py: 3, width: '95%', margin: '0 auto', maxWidth: '1700px' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2, flexDirection: { xs: 'column', md: 'row' } }}>
                    <Typography sx={{ color: 'rgba(255,255,255,0.7)' }}>
                        © 2025. Developed by <Link href="https://www.ethertech.ltd/" target="_blank" underline="none"><span style={{ color: '#f5821f', fontWeight: 700 }}>EtherTech</span></Link>.
                    </Typography>

                    <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                        <Link href="#" underline="none" sx={{ color: 'rgba(255,255,255,0.7)' }}>Privacy Statement</Link>
                        <Link href="#" underline="none" sx={{ color: 'rgba(255,255,255,0.7)' }}>Code of conduct</Link>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <FacebookIcon sx={{ color: 'rgba(255,255,255,0.9)' }} />
                        <LinkedInIcon sx={{ color: 'rgba(255,255,255,0.9)' }} />
                        <YouTubeIcon sx={{ color: 'rgba(255,255,255,0.9)' }} />

                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Footer