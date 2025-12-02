import React from 'react'
import Button from '@mui/material/Button'
import { AppBar, Toolbar, Typography, Box, Container } from '@mui/material'

function Header() {
    return (
        <Box>
            <Typography
                variant="body1"
                color="initial"
                sx={{
                    px: 2,
                    py: 1,
                    textAlign: 'center',
                    bgcolor: '#b20933',
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: 15,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                }}
                title={`Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure`}
            >
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure
            </Typography>
            <AppBar position="static" sx={{ bgcolor: '#f0eee2', color: '#000000' }}>

                <Toolbar sx={{ pl: 0, py: 2, width: "95%", maxWidth: "1700px", margin: "0 auto" }}>

                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', justifyContent: 'space-between', width: '100%', }}>
                        <img src="/assets/logo.png" alt="" width={233} />
                        <Box sx={{ display: 'flex', gap: 4,alignItems: 'center' }}>
                            <Typography variant="body1" sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' }, fontWeight: '700',fontSize:20 ,color:'#f5821f' }}>
                                Home
                            </Typography>
                            <Typography variant="body1" sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' }, fontWeight: '500',fontSize:20  }}>
                                About Us
                            </Typography>
                            <Typography variant="body1" sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' }, fontWeight: '500',fontSize:20  }}>
                                What We Do
                            </Typography>
                            <Typography variant="body1" sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' }, fontWeight: '500',fontSize:20  }}>
                                News & Blogs
                            </Typography>
                            <Button variant="contained" color="primary" sx={{width:232,height:56,fontSize:18,fontWeight:'700',backgroundColor:'#f5821f','&:hover':{backgroundColor:'#d4701c'}}}>
                              Join the network
                            </Button>
                        </Box>
                    </Box>
                </Toolbar>

            </AppBar></Box>
    )
}

export default Header