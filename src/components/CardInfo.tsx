import React from 'react';
import { Box, Typography, Link, Container } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        py: 3,
        mt: 4,
        textAlign: 'center',
      }}
    >
      <Container>
        <Typography variant="body1">
          &copy; {new Date().getFullYear()} Edu-Media Platform. All rights reserved.
        </Typography>
        <Typography variant="body2">
          <Link href="/privacy-policy" color="inherit" underline="hover">
            Privacy Policy
          </Link>{' '}
          |{' '}
          <Link href="/terms" color="inherit" underline="hover">
            Terms of Service
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
