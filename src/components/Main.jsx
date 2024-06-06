import React from 'react';
import { Grid, Box } from '@mui/material';
import ProductCard from './Card';
import NotFound from './NotFound';

const gridContainerStyle = {
  padding: '16px', // Adjust padding as needed
  flexGrow: 1, // Allow the Grid container to grow to fill the available space
};

const Main = ({ data, loading }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} style={gridContainerStyle}>
          {data.length === 0 ? (
            <NotFound />
          ) : (
            data.map((item) => (
              <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
                <ProductCard item={item} loading={loading} />
              </Grid>
            ))
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default Main;
