import React from 'react';
import { Box, Avatar, Typography, Divider } from '@mui/material';

const Profile = () => {
    // Sample user data
    const user = {
        name: 'John Doe',
        email: 'john@example.com',
        age: 30,
        address: '123 Main St, City, Country',
        profileImage: 'https://randomuser.me/api/portraits/men/7.jpg', // Sample profile image URL
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '20px',
                padding: '20px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                borderRadius: '8px',
                height:"85svh",
                backgroundColor: '#121212',
            }}
        >
            <Avatar
                src={user.profileImage}
                alt={user.name}
                sx={{ width: '100px', height: '100px' }}
            />
            <Typography variant="h5">{user.name}</Typography>
            <Typography variant="body1" color="textSecondary">
                {user.email}
            </Typography>
            <Divider sx={{ width: '100%', marginBottom: '10px' }} />
            <Typography variant="body1">
                <strong>Age:</strong> {user.age}
            </Typography>
            <Typography variant="body1">
                <strong>Address:</strong> {user.address}
            </Typography>
        </Box>
    );
};

export default Profile;
