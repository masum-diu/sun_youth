import React from 'react';
import { Box, Typography, Stack, Container, Grid, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import { useRouter } from 'next/router';
import ConstructionIcon from '@mui/icons-material/Construction';
import NextLink from "next/link";

function NewsBlogsPage() {
  // Placeholder data for impact stories
const stories = [
  
  
  {
    title: "From Campus Conversations to Global Advocacy",
    excerpt:
      "From Campus Conversations to Global Advocacy: Al-Amin’s Journey in Transforming Food Systems",
    image: "/assets/al-amin/AL AMIN.JPG",

    link: "/impact-stories/6",
  },
  {
    title: "Bringing Smiles Through Food",
    excerpt:
      "Bringing Smiles Through Food: A Journey with the ‘Tiffiner Hashi’ Project",
    image: "/assets/sayeda/1.jpg",

    link: "/impact-stories/7",
  },
  {
    title: "Pusti Bondhu",
    excerpt:
      "Pusti Bondhu: A Youth-Led Initiative to Improve Campus Nutrition",
    image: "/assets/soyed/author.jpg",

    link: "/impact-stories/8",
  },
  {
    title: "From Courtyard to Community Change",
    excerpt:
      "From Courtyard to Community Change: A Youth-led Nutrition Movement in Rural Bangladesh",
    image: "/assets/imran-rabby/author.jpg",

    link: "/impact-stories/9",
  },
];
  const router = useRouter();
  return (
    <React.Fragment>
      <Box sx={{ bgcolor: "#f5821f", height: 200, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", color: "#fff", }}>
        <Stack direction={"row"} alignItems="center" justifyContent="space-between"
          sx={{ width: "95%", maxWidth: "1700px", margin: "0 auto", }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>RESOURCES</Typography>
          {/* {router?.asPath
              ?.split("-")
              ?.map(word => word.charAt(0).toUpperCase() + word.slice(1))
              ?.join(" ")} */}
        </Stack>
      </Box>

       <Box sx={{ bgcolor: "#f0eee2", py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h1"
            textAlign="center"
            gutterBottom
            sx={{ fontWeight: 700 }}
          >
            News and Blogs
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            textAlign="center"
            sx={{ maxWidth: "700px", mx: "auto" }}
          >
            See the real-world change we are creating. These stories highlight
            the dedication of our volunteers and the resilience of the
            communities we serve.
          </Typography>
        </Container>
      </Box>

    
        <Grid container spacing={4} sx={{ padding: { xs: 2, md: 4 }, maxWidth: "1700px", margin: "0 auto" }}>
          {stories.map((story) => (
            <Grid item key={story.title} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: 3,
                  "&:hover": { boxShadow: 6 },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={story.image}
                  alt={story.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    sx={{ fontWeight: "bold" }}
                  >
                    {story.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {story.excerpt}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    component={NextLink}
                    href={story.link}
                    size="small"
                    sx={{ color: "#f5821f", fontWeight: "bold" }}
                  >
                    Read More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
    </React.Fragment>
  );
}

export default NewsBlogsPage;