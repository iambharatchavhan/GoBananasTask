import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Cart = () => {


    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '90vh',
                position: 'relative', 
            }}
        >
            <img
                src={"https://assets.dryicons.com/uploads/icon/svg/4227/shopping_cart.svg" }
                style={{ maxWidth: '30%', height: 'auto' }}
            />
            <Button
                variant="text"
                sx={{
                    position: 'absolute',
                    top: '70%',
                    left: '50%', 
                    transform: 'translate(-50%, -50%)',
                    padding: '10px', 
                    
                }}
                LinkComponent={Link}
                to="/"
            >
                Your cart is empty Shop Now
            </Button>
        </Box>
    );
};

export default Cart;
