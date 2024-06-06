import * as React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
      }}
    >
      <Typography variant="body1" align="center">
        © 2024 made With 💌 Bharat Chavhan. All rights reserved.
      </Typography>
      <Typography variant="body2" color="text.secondary" align="center">
        {'Go tO '}
        <Link color="inherit" href="#">
          Github
        </Link>
        {'.'}
      </Typography>
    </Box>
  );
};

export default Footer;
