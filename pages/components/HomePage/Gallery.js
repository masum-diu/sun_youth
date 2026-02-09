import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import ImageFrameUploader from "../ImageFrameUploader";

const Gallery = () => {
      const [gallery, setGallery] = useState([]);
    
      const handleAddToGallery = (dataUrl) => {
    setGallery((prev) => [dataUrl, ...prev]);
  };
  return <Box sx={{ width: "95%", margin: "0 auto", maxWidth: "1700px" }}>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            mb: 4,
            fontWeight: 500,
            textTransform: "capitalize",
            fontSize: 40,
          }}
        >
          Gallery
        </Typography>
        <Grid container spacing={3} mb={2}>
          <Grid size={{ xs: 12, sm: 6, md: 12 }}>
            <ImageFrameUploader onUpload={handleAddToGallery} />
          </Grid>

          {/* {gallery.map((src, idx) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={idx}>
              <Paper sx={{ p: 1, textAlign: 'center' }}>
                <img src={src} alt={`upload-${idx}`} style={{ width: '100%', objectFit: 'cover', borderRadius: 6 }} />
                <Button size="small" onClick={() => setGallery(g => g.filter((_, i) => i !== idx))} sx={{ mt: 1 }}>Remove</Button>
              </Paper>
            </Grid>
          ))} */}
        </Grid>
      </Box>;
};

export default Gallery;
