import React from 'react'
import { Box, Container, Typography, Link } from '@mui/material'

function Footer() {
  return (
    <Box component="footer" sx={{ bg: '#f5f5f5', py: 3, mt: 4, borderTop: '1px solid #ddd' ,width: '95%',maxWidth:"1700px",margin:"0 auto"}}>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2, mb: 2 }}>
          <Box>
            <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>
              About
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Sun Youth is dedicated to empowering young people.
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>
              Quick Links
            </Typography>
            <Link href="#" variant="body2" display="block" sx={{ mb: 0.5 }}>
              Home
            </Link>
            <Link href="#" variant="body2" display="block" sx={{ mb: 0.5 }}>
              Services
            </Link>
            <Link href="#" variant="body2" display="block">
              Contact
            </Link>
          </Box>
          <Box>
            <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>
              Contact
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Email: info@sunyouth.com
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Phone: +1 (555) 123-4567
            </Typography>
          </Box>
        </Box>
        <Box sx={{ textAlign: 'center', borderTop: '1px solid #ddd', pt: 2 }}>
          <Typography variant="body2" color="textSecondary">
            © 2025 Sun Youth. All rights reserved.
          </Typography>
        </Box>

    </Box>
  )
}

export default Footer