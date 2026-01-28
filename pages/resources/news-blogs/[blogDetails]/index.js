import { useRouter } from "next/router";
import React from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  List,
  ListItem,
} from "@mui/material";
import Image from "next/image";
import { blogArrOfObject } from "@/public/assets/demoData/allNewsAndBlogs";

const BlogDetailsPage = () => {
  const router = useRouter();
  const blogId = router.query.blogDetails;

  
  const BlogObject = blogArrOfObject.find(
    (blog) => blog.id.toString() === blogId,
  );

  const renderContent = (item, index) => {
    switch (item.type) {
      case "title":
        return (
          <Typography key={index} variant="h5" mt={4} fontWeight={600}>
            {item.text}
          </Typography>
        );

      case "subtitle":
        return (
          <Typography key={index} mt={3} fontWeight={600}>
            {item.text}
          </Typography>
        );

      case "description":
        return (
          <Typography
            key={index}  
            mt={1.5}
            fontSize="15px"
            dangerouslySetInnerHTML={{ __html: item.text }}
          />
        );

      case "list":
        return (
          <List key={index} sx={{ pl: 4, mt: 2 }}>
            {item.items.map((li, i) => (
              <ListItem
                key={i}
                sx={{
                  display: "list-item",
                  listStyleType: "disc",
                  py: 0.5,
                  fontSize: "14px",
                }}
              >
                {li}
              </ListItem>
            ))}
          </List>
        );

      case "table":
        return (
          <TableContainer component={Paper} key={index} sx={{ my: 4 }}>
            <Table>
              <TableHead>
                <TableRow>
                  {item.headers.map((h, i) => (
                    <TableCell key={i} sx={{ fontWeight: 700 }}>
                      {h}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {item.rows.map((row, i) => (
                  <TableRow key={i}>
                    {row.map((cell, j) => (
                      <TableCell key={j}>{cell}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        );

      case "conclusion":
        return (
          <Typography
            key={index}
            mt={4}
            fontWeight={500}
            color="primary.main"
            dangerouslySetInnerHTML={{ __html: item.text }}
          />
        );

      default:
        return null;
    }
  };

  return (
    <Box maxWidth="800px" mx="auto" px={2} py={6}>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: 200, sm: 350 },
          borderRadius: 2,
          overflow: "hidden",
          mb: 4,
        }}
      >
        <Image
          src={BlogObject?.coverImage}
          alt={BlogObject?.mainTitle}
          fill
          priority
          style={{ objectFit: "cover" }}
        />
      </Box>
      <Typography variant="h4" mb={4} fontWeight={700} gutterBottom>
        {BlogObject?.mainTitle}
      </Typography>

      <Typography
        variant="body2"
        color="text.secondary"
        fontWeight={500}
        mb={1}
      >
        {BlogObject?.authorInfo?.name}
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        fontWeight={500}
        mb={1}
      >
        {" "}
        {BlogObject?.authorInfo?.designation}
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        fontWeight={500}
        mb={1}
      >
        {BlogObject?.authorInfo?.institution}
      </Typography>
      {BlogObject?.authorInfo?.email && (
        <Typography
          variant="body2"
          color="text.secondary"
          fontWeight={500}
          mb={1}
        >
          Email: {BlogObject?.authorInfo.email}
        </Typography>
      )}

      {BlogObject?.content.map(renderContent)}
    </Box>
  );
};

export default BlogDetailsPage;
