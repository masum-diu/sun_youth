import React, { useRef, useState, useEffect } from 'react'
import { Box, Paper, Grid, Stack, Typography, Button } from '@mui/material'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import DownloadIcon from '@mui/icons-material/Download'

export default function ImageFrameUploader({ onUpload }) {
  const canvasRef = useRef(null)
  const [uploadedImage, setUploadedImage] = useState(null)
  const [frameSrc, setFrameSrc] = useState('/assets/frames/frame1.svg')
  const [frames] = useState([
    { id: 'f1', name: 'Simple Round', src: '/assets/frames/frame1.svg' },
    { id: 'f2', name: 'Corner Accents', src: '/assets/frames/frame2.svg' },
    { id: 'f3', name: 'Square Accents', src: '/assets/frames/frame3.svg' },
    { id: 'f4', name: 'Square Accents', src: '/assets/frames/frame4.svg' },
    // { id: 'f5', name: 'Square Accents', src: '/assets/frames/frame5.svg' },
    // { id: 'f6', name: 'Square Accents', src: '/assets/frames/frame6.svg' },
  ])

  useEffect(() => {
    drawCanvas()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uploadedImage, frameSrc])

  function handleFile(e) {
    const file = e.target.files && e.target.files[0]
    if (!file) return
    const url = URL.createObjectURL(file)
    const img = new Image()
    img.onload = () => setUploadedImage(img)
    img.src = url
  }

  function selectFrame(src) {
    setFrameSrc(src)
  }

  function drawCanvas() {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const width = 600
    const height = 600
    canvas.width = width
    canvas.height = height
    ctx.clearRect(0, 0, width, height)

    if (uploadedImage) {
      const iw = uploadedImage.width
      const ih = uploadedImage.height
      const scale = Math.max(width / iw, height / ih)
      const sw = width / scale
      const sh = height / scale
      const sx = (iw - sw) / 2
      const sy = (ih - sh) / 2
      ctx.drawImage(uploadedImage, sx, sy, sw, sh, 0, 0, width, height)
    } else {
      ctx.fillStyle = '#f5f5f5'
      ctx.fillRect(0, 0, width, height)
      ctx.fillStyle = '#9e9e9e'
      ctx.font = '18px sans-serif'
      ctx.textAlign = 'center'
      ctx.fillText('Upload an image to preview with frames', width / 2, height / 2)
    }

    if (frameSrc) {
      const frameImg = new Image()
      frameImg.crossOrigin = 'anonymous'
      frameImg.onload = () => ctx.drawImage(frameImg, 0, 0, width, height)
      frameImg.src = frameSrc
    }
  }

  function exportImage() {
    const canvas = canvasRef.current
    if (!canvas) return
    canvas.toBlob((blob) => {
      if (!blob) return
      const a = document.createElement('a')
      a.href = URL.createObjectURL(blob)
      a.download = 'framed-image.png'
      a.click()
      URL.revokeObjectURL(a.href)
    }, 'image/png')
  }

  return (
    <Paper elevation={2}  sx={{ p: 2 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
        <Typography variant="h6">Image Upload with Frames</Typography>
        {/* <Stack direction="row" spacing={1}>
         
        </Stack> */}
      </Stack>

      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Box sx={{ borderRadius: 1, overflow: 'hidden', boxShadow: 1 }}>
            <canvas ref={canvasRef} style={{ width: '100%', display: 'block', background: '#fff' }} />
          </Box>

          <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
            <Button variant="contained" component="label" startIcon={<CloudUploadIcon />} sx={{ bgcolor: '#b20933', '&:hover': { bgcolor: '#b20933' } }}>
              Choose Image
              <input hidden accept="image/*" type="file" onChange={handleFile} />
            </Button>
           
             <Button variant="outlined" startIcon={<DownloadIcon />} onClick={exportImage}>
            Download
          </Button>
           <Button variant="contained" color='primary' onClick={() => { setUploadedImage(null) }}>
              Clear
            </Button>
              {/* <Button variant="contained" color="primary" onClick={() => {
                const canvas = canvasRef.current
                if (!canvas) return
                const dataUrl = canvas.toDataURL('image/png')
                if (onUpload) onUpload(dataUrl)
              }}>
                Upload Now
              </Button> */}
          </Stack>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Typography variant="subtitle1" sx={{ mb: 1 }}>Select Frame</Typography>
          <Stack spacing={1}>
            {frames.map((f) => (
              <Paper key={f.id} onClick={() => selectFrame(f.src)} elevation={frameSrc === f.src ? 8 : 1} sx={{ display: 'flex', alignItems: 'center', gap: 1, p: 1, cursor: 'pointer', border: frameSrc === f.src ? '2px solid #b20933' : 'none' }}>
                <Box component="img" src={f.src} alt={f.name} sx={{ width: 64, height: 64, objectFit: 'cover', borderRadius: 1 }} />
                <Typography variant="body2">{f.name}</Typography>
              </Paper>
            ))}
          </Stack>

          <Typography variant="caption" sx={{ display: 'block', mt: 2, color: 'text.secondary' }}>
            Tip: choose a frame, upload an image, then click Download.
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  )
}
