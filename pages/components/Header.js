import React, { useState } from "react";
import Button from "@mui/material/Button";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Link as MuiLink,
  Menu,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Collapse,
  ListItemButton,
  useMediaQuery,
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import NextLink from "next/link";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";
import GroupIcon from "@mui/icons-material/Group";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const navLinks = [
  { title: "Home", path: "/", active: true },
  {
    title: "About Us",
    children: [
      {
        title: "SUN Youth Network Bangladesh Brief",
        path: "/about-us/sun-youth-network-brief",
      },
      //   { title: "Government (MoHFW)", path: "/about-us/government-mohfw" },
      //   { title: "Sun Movement", path: "/about-us/Sun-movement" },
      //   {
      //     title: "Secretariat (GAIN) info and logo",
      //     path: "/about-us/secretariat-gain",
      //   },
    ],
  },
  {
    title: "What We Do",
    path: "/what-we-do",
    children: [
      { title: "Gallery", path: "/what-we-do/gallery" },
      //   { title: "BKBT", path: "/what-we-do/bkbt" },
      { title: "BKBT", path: "http://bhalokhabobhalothakbo.com/" },
      {
        title: "Food Systems Youth Leadership Training",
        path: "/what-we-do/food-systems-youth-leadership-training",
      },
      { title: "FOSYLx", path: "/what-we-do/fosylx" },
      { title: "IMPACT Fellowship", path: "/what-we-do/impact-fellowship" },
    ],
  },
  { title: "Impact Stories", path: "/impact-stories" },
  {
    title: "Resources",
    children: [
      { title: "Publication", path: "/resources/publication" },
      { title: "Report", path: "/resources/report" },
      { title: "Multimedia", path: "/resources/multimedia" },
      { title: "News & blogs", path: "/resources/news-blogs" },
    ],
  },
];

const linkStyles = {
  cursor: "pointer",
  fontWeight: "500",
  fontSize: 16,
  textDecoration: "none",
  color: "#000",
};

function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState({});

  const handleMenuOpen = (event, title) => {
    setAnchorEl(event.currentTarget);
    setOpenMenu(title);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setOpenMenu(null);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const toggleMobileExpand = (title) => {
    setExpandedMobile((prev) => ({ ...prev, [title]: !prev[title] }));
  };
  return (
    <Box>
      <Typography
        variant="body1"
        color="initial"
        sx={{
          px: { xs: 1, sm: 2 },
          py: { xs: 0.5, sm: 1 },
          textAlign: "center",
          bgcolor: "#b20933",
          color: "#fff",
          fontWeight: 700,
          fontSize: { xs: 12, sm: 13, md: 15 },
          whiteSpace: { xs: "normal", sm: "nowrap" },
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: { xs: "-webkit-box", sm: "block" },
          WebkitLineClamp: { xs: 2, sm: 1 },
          WebkitBoxOrient: "vertical",
        }}
        title={`SUN Youth Network Bangladesh: empowering youth to improve nutrition.`}
      >
        {isMobile
          ? "Empowering youth across Bangladesh to drive nutrition action."
          : "Empowering youth across Bangladesh to drive nutrition action, influence policy, and strengthen food systems through a coordinated platform aligned with national priorities and the global Sun Movement."}
      </Typography>
      <AppBar position="static" sx={{ bgcolor: "#f0eee2", color: "#000000" }}>
        <Toolbar
          disableGutters
          sx={{
            pl: { xs: 1, sm: 2, md: 0 },
            py: { xs: 1, sm: 2 },
            width: { xs: "100%", md: "95%" },
            maxWidth: "1700px",
            margin: { xs: 0, md: "0 auto" },
            px: { xs: 1, sm: 2 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: { xs: 1, sm: 2 },
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box
              component="img"
              src="/assets/logo.png"
              alt="Logo"
              sx={{
                width: { xs: 120, sm: 160, md: 233 },
                height: "auto",
              }}
            />
            {isMobile ? (
              <>
                <IconButton
                  onClick={() => setMobileMenuOpen(true)}
                  sx={{ color: "#000000" }}
                >
                  <MenuIcon />
                </IconButton>
                <Drawer
                  anchor="right"
                  open={mobileMenuOpen}
                  onClose={() => setMobileMenuOpen(false)}
                >
                  <Box sx={{ width: 280, p: 2 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 2,
                      }}
                    >
                      <img src="/assets/logo.png" alt="Logo"  width={180} style={{objectFit:"cover"}}/>
                      <IconButton onClick={() => setMobileMenuOpen(false)}>
                        <CloseIcon />
                      </IconButton>
                    </Box>
                    <List>
                      {navLinks.map((link) => (
                        <Box key={link.title}>
                          {link.children ? (
                            <>
                              <ListItemButton  onClick={() => toggleMobileExpand(link.title)} sx={{ ...linkStyles, justifyContent: 'space-between' }}>
                                <ListItemText primary={link.title} />
                                {expandedMobile[link.title] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                              </ListItemButton>
                              <Collapse in={!!expandedMobile[link.title]} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                  {link.children.map((child) => (
                                    <ListItem key={child.title} component={NextLink} href={child.path} onClick={() => setMobileMenuOpen(false)} sx={{ pl: 4 }}>
                                      <ListItemText primary={child.title} />
                                    </ListItem>
                                  ))}
                                </List>
                              </Collapse>
                            </>
                          ) : (
                            <ListItem component={NextLink} href={link.path} onClick={() => setMobileMenuOpen(false)} sx={{ ...linkStyles, ...(link.active && { color: '#f5821f', fontWeight: '700' }) }}>
                              <ListItemText primary={link.title} />
                            </ListItem>
                          )}
                        </Box>
                      ))}
                      <ListItem sx={{ mt: 2 }}>
                        <Button onClick={() => { setMobileMenuOpen(false); handleModalOpen(); }} variant="contained" fullWidth sx={{ height: 48, fontSize: 16, fontWeight: "700", backgroundColor: "#f5821f", "&:hover": { backgroundColor: "#d4701c" } }}>
                          Join the network
                        </Button>
                      </ListItem>
                    </List>
                  </Box>
                </Drawer>
              </>
            ) : (
              <Box
                component="nav"
                sx={{
                  display: "flex",
                  gap: { md: 3, lg: 4 },
                  alignItems: "center",
                }}
              >
                <Box
                  component="ul"
                  sx={{
                    display: "flex",
                    gap: { md: 2, lg: 4 },
                    alignItems: "center",
                    listStyle: "none",
                    p: 0,
                    m: 0,
                  }}
                >
                  {navLinks.map((link) => (
                    <li
                      key={link.title}
                      onMouseEnter={
                        link.children
                          ? (e) => handleMenuOpen(e, link.title)
                          : undefined
                      }
                      onMouseLeave={link.children ? handleMenuClose : undefined}
                    >
                      <MuiLink
                        component={link.path ? NextLink : "div"}
                        href={link.path || "#"}
                        sx={{
                          ...linkStyles,
                          fontSize: { md: 14, lg: 16 },
                          display: "flex",
                          alignItems: "center",
                          ...(link.active && {
                            color: "#f5821f",
                            fontWeight: "700",
                          }),
                        }}
                        aria-owns={
                          openMenu === link.title
                            ? "mouse-over-menu"
                            : undefined
                        }
                        aria-haspopup={link.children ? "true" : undefined}
                      >
                        {link.title}
                        {link.children && (
                          <ExpandMoreIcon sx={{ fontSize: 20, ml: 0.5 }} />
                        )}
                      </MuiLink>
                      {link.children && (
                        <Menu
                          id="mouse-over-menu"
                          anchorEl={anchorEl}
                          open={openMenu === link.title}
                          onClose={handleMenuClose}
                          MenuListProps={{
                            "aria-labelledby": "basic-button",
                            onMouseLeave: handleMenuClose,
                          }}
                          elevation={2}
                        >
                          {link.children.map((child) => (
                            <MenuItem
                              key={child.title}
                              onClick={handleMenuClose}
                              component={NextLink}
                              href={child.path}
                            >
                              {child.title}
                            </MenuItem>
                          ))}
                        </Menu>
                      )}
                    </li>
                  ))}
                </Box>

                <Button
                  onClick={handleModalOpen}
                  variant="contained"
                  color="primary"
                  sx={{
                    width: { md: 180, lg: 232 },
                    height: { md: 48, lg: 56 },
                    fontSize: { md: 16, lg: 18 },
                    fontWeight: "700",
                    backgroundColor: "#f5821f",
                    "&:hover": { backgroundColor: "#d4701c" },
                  }}
                >
                  Join the network
                </Button>
              </Box>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Dialog
        open={isModalOpen}
        onClose={handleModalClose}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle sx={{ m: 0, p: 2, fontWeight: "bold" }}>
          Join Our Network
          <IconButton
            aria-label="close"
            onClick={handleModalClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom sx={{ mb: 3 }}>
            We are excited to have you. Choose how you would like to get
            involved with our network.
          </Typography>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <NextLink href="/youth-organization" passHref>
                <Card variant="outlined" sx={{ height: "100%" }}>
                  <CardActionArea
                    onClick={handleModalClose}
                    sx={{ p: 3, textAlign: "center", height: "100%" }}
                  >
                    <GroupIcon sx={{ fontSize: 48, color: "#f5821f" }} />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        Join as Youth Organization
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </NextLink>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <NextLink href="/volunteer" passHref>
                <Card variant="outlined" sx={{ height: "100%" }}>
                  <CardActionArea
                    onClick={handleModalClose}
                    sx={{ p: 3, textAlign: "center", height: "100%" }}
                  >
                    <VolunteerActivismIcon
                      sx={{ fontSize: 48, color: "#f5821f" }}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        Join as Volunteer
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </NextLink>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </Box>
  );
}

export default Header;
