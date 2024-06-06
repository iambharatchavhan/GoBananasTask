import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { keyframes } from '@mui/system';
import '@fontsource/press-start-2p'; 

const float = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
`;

const blink = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const NotFound = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100%',
        textAlign: 'center',
        backgroundColor: '#000', 
        color: '#fff', 
        p: 2, 
      }}
    >
      <Box
        component="img"
        src="https://imgs.search.brave.com/_SaayAjxmT2gKgWozitw1jt1DJFMbmPVefFd6Qvvebw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYXJ0cy5jb20v/ZmlsZXMvMy9BbGll/bi1TcGFjZWNyYWZ0/LVBORy1JbWFnZS13/aXRoLVRyYW5zcGFy/ZW50LUJhY2tncm91/bmQucG5n" 
        sx={{
          animation: `${float} 3s ease-in-out infinite`,
          maxWidth: '100%', 
          height: 'auto', 
        }}
      />
      <Typography
        variant="h6"
        sx={{
          mt: 2,
          fontFamily: '"Press Start 2P", cursive', 
          animation: `${blink} 1.5s infinite`, 
          fontSize: { xs: '1rem', md: '1.5rem' }, 
        }}
      >
        Product Not Found
      </Typography>
    </Box>
  );
}

export default NotFound;
