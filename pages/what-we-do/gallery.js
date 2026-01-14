import { Box, Divider, Grid, ImageList, ImageListItem, ImageListItemBar, Stack, Typography, Dialog, DialogContent, IconButton } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

function Gallery() {
  const router = useRouter();

  // Sample data for the gallery. Replace with your actual image paths and titles.
  const itemData = [
    { img: '/assets/gallery/image_1.jpg', title: 'Community Workshop' },
    { img: '/assets/gallery/image_2.jpg', title: 'Youth Leadership Training', rows: 2, cols: 2 },
    { img: '/assets/gallery/image_3.jpg', title: 'Advocacy Event' },
    { img: '/assets/gallery/image_4.jpg', title: 'Field Visit' },
    { img: '/assets/gallery/image_5.jpg', title: 'Team Collaboration', cols: 2 },
    { img: '/assets/gallery/image_6.jpg', title: 'Nutrition Awareness Session', rows: 2, cols: 2 },
    { img: '/assets/gallery/image_7.jpg', title: 'BKBT Campaign Launch' },
    { img: '/assets/gallery/image_8.jpg', title: 'Group Discussion' },
    { img: '/assets/gallery/image_9.jpg', title: 'Celebrating Success', rows: 2, cols: 2 },
    { img: '/assets/gallery/image_10.jpg', title: 'Planning Meeting' },
    { img: '/assets/gallery/image_11.jpg', title: 'Stakeholder Engagement' },
    { img: '/assets/gallery/image_12.jpg', title: 'Volunteers in Action', cols: 2 },
  ];

  

  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <React.Fragment>
      <Box sx={{ bgcolor: "#f5821f", height: 200, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", color: "#fff", }}>
        <Stack direction={"row"} alignItems="center" justifyContent="space-between"
          sx={{ width: "95%", maxWidth: "1700px", margin: "0 auto", }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>WHAT WE DO</Typography>
           {/* <Box
                      component="span"
                      sx={{ fontSize: 14, color: "#fff", fontWeight: 600 }}
                    >
                      {router?.asPath
                        ?.split("-")
                        ?.map(word => word.charAt(0).toUpperCase() + word.slice(1))
                        ?.join(" ")}
                    </Box> */}
        </Stack>
      </Box>

      <Box sx={{ width: "95%", maxWidth: "1700px", margin: "0 auto" }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 3 }} p={2} sx={{ borderRight: { md: "5px solid #f5821f" }, pr: 2, bgcolor: "#f7f3ef", height: "fit-content" }} >
            <Typography sx={{ fontWeight: 'bold', fontSize: 16, cursor: "pointer", color: router?.route === '/what-we-do/gallery' ? "#f5821f" : "#000" }} onClick={() => router.push('/what-we-do/gallery')}>Gallery</Typography>
            <Divider orientation="horizontal" variant="fullWidth" sx={{ my: 2 }} />
            <Typography sx={{ fontWeight: 'bold', fontSize: 16, cursor: "pointer", color: router?.route === '/what-we-do/bkbt' ? "#f5821f" : "#000" }} onClick={() => router.push('/what-we-do/bkbt')}>BKBT</Typography>
            <Divider orientation="horizontal" variant="fullWidth" sx={{ my: 2 }} />
            <Typography sx={{ fontWeight: 'bold', fontSize: 16, cursor: "pointer", color: router?.route === '/what-we-do/food-systems-youth-leadership-training' ? "#f5821f" : "#000" }} onClick={() => router.push('/what-we-do/food-systems-youth-leadership-training')}>Food Systems Youth Leadership Training</Typography>
            <Divider orientation="horizontal" variant="fullWidth" sx={{ my: 2 }} />
            <Typography sx={{ fontWeight: 'bold', fontSize: 16, cursor: "pointer", color: router?.route === '/what-we-do/fosylx' ? "#f5821f" : "#000" }} onClick={() => router.push('/what-we-do/fosylx')}>FOSYLx</Typography>
            <Divider orientation="horizontal" variant="fullWidth" sx={{ my: 2 }} />
            <Typography sx={{ fontWeight: 'bold', fontSize: 16, cursor: "pointer", color: router?.route === '/what-we-do/impact-fellowship' ? "#f5821f" : "#000" }} onClick={() => router.push('/what-we-do/impact-fellowship')}>IMPACT Fellowship</Typography>
            <Divider orientation="horizontal" variant="fullWidth" sx={{ my: 2 }} />
          </Grid>

          <Grid size={{ xs: 12, md: 9 }} py={2} pl={{ md: 4 }}>
            <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', mb: 4 }}>
              Our Gallery
            </Typography>
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, textAlign: 'justify', mb: 4 }}>
              Explore moments from our journey to improve nutrition and empower youth across Bangladesh. This gallery captures the energy of our workshops, the impact of our campaigns, and the spirit of our dedicated volunteers and participants.
            </Typography>

            <ImageList variant="quilted">
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      setSelectedImage(item.img);
                      setOpen(true);
                    }}
                  />
                  <ImageListItemBar
                    title={item.title}
                    sx={{
                      background:
                        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, ' +
                        'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                    }}
                  />
                </ImageListItem>
              ))}
            </ImageList>

            <Dialog
              open={open}
              onClose={() => setOpen(false)}
              maxWidth="xl"
              PaperProps={{ sx: { backgroundColor: 'transparent', boxShadow: 'none' } }}
            >
              <DialogContent sx={{ p: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <IconButton onClick={() => setOpen(false)} sx={{ position: 'absolute', top: 8, right: 8, color: '#fff', zIndex: 1300 }}>
                  <CloseIcon />
                </IconButton>
                {selectedImage && (
                  <img src={selectedImage} alt="Full view" style={{ maxWidth: '90vw', maxHeight: '90vh', objectFit: 'contain' }} />
                )}
              </DialogContent>
            </Dialog>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}

export default Gallery;