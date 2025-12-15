import React, { useState } from 'react'
import Button from '@mui/material/Button'
import { AppBar, Toolbar, Typography, Box, Link as MuiLink, Menu, MenuItem } from '@mui/material'
import NextLink from 'next/link';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const navLinks = [
    { title: 'Home', path: '/', active: true },
    { title: 'About Us', path: '/about' },
    { title: 'What We Do', path: '/what-we-do' },
    { title: 'Impact Stories', path: '/impact-stories' },
    {
        title: 'Resources',
        children: [
            { title: 'Publication', path: '/resources/publication' },
            { title: 'Report', path: '/resources/report' },
            { title: 'Multimedia', path: '/resources/multimedia' },
            { title: 'News & blogs', path: '/resources/news-blogs' },
           
        ]
    },
];

const linkStyles = {
    cursor: 'pointer', '&:hover': { textDecoration: 'underline' }, fontWeight: '500', fontSize: 20, textDecoration: 'none'
};

function Header() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [openMenu, setOpenMenu] = useState(null);

    const handleMenuOpen = (event, title) => {
        setAnchorEl(event.currentTarget);
        setOpenMenu(title);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setOpenMenu(null);
    };
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
                        <Box component="nav" sx={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                            <Box component="ul" sx={{ display: 'flex', gap: 4, alignItems: 'center', listStyle: 'none', p: 0, m: 0 }}>
                                {navLinks.map((link) => (
                                    <li
                                        key={link.title}
                                        onMouseEnter={link.children ? (e) => handleMenuOpen(e, link.title) : undefined}
                                        onMouseLeave={link.children ? handleMenuClose : undefined}
                                    >
                                        <MuiLink
                                            component={link.path ? NextLink : 'div'}
                                            href={link.path || '#'}
                                            sx={{ ...linkStyles, display: 'flex', alignItems: 'center', ...(link.active && { color: '#f5821f', fontWeight: '700' }) }}
                                            aria-owns={openMenu === link.title ? 'mouse-over-menu' : undefined}
                                            aria-haspopup={link.children ? "true" : undefined}
                                        >
                                            {link.title}
                                            {link.children && <ExpandMoreIcon sx={{ fontSize: 20, ml: 0.5 }} />}
                                        </MuiLink>
                                        {link.children && (
                                            <Menu
                                                id="mouse-over-menu"
                                                anchorEl={anchorEl}
                                                open={openMenu === link.title}
                                                onClose={handleMenuClose}
                                                MenuListProps={{ 'aria-labelledby': 'basic-button', onMouseLeave: handleMenuClose }}
                                                elevation={2}
                                            >
                                                {link.children.map((child) => (
                                                    <MenuItem key={child.title} onClick={handleMenuClose} component={NextLink} href={child.path}>
                                                        {child.title}
                                                    </MenuItem>
                                                ))}
                                            </Menu>)}
                                    </li>
                                ))}
                            </Box>

                            <Button variant="contained" color="primary" sx={{ width: 232, height: 56, fontSize: 18, fontWeight: '700', backgroundColor: '#f5821f', '&:hover': { backgroundColor: '#d4701c' } }}>
                                Join the network
                            </Button>
                        </Box>
                    </Box>
                </Toolbar>

            </AppBar></Box>
    )
}

export default Header