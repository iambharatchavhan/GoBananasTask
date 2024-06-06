import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Snackbar } from '@mui/material';

const ProductCard = ({ item, loading }) => {
  const [showToast, setShowToast] = React.useState(false);
  const [toastMessage, setToastMessage] = React.useState('');

  const handleBuyNow = () => {
    setToastMessage('Item added to cart!');
    setShowToast(true);
    // Add your "Buy Now" functionality here
  };

  const handleAddToCart = () => {
    setToastMessage('Item added to cart!');
    setShowToast(true);
    // Add your "Add to Cart" functionality here
  };

  const handleCloseToast = () => {
    setShowToast(false);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <Card sx={{ maxWidth: 345, height: 200, margin: 'auto' }}>
        <CardMedia
          sx={{ width: '100%', height: '100%', objectFit: 'contain', background: '#fff' }}
          component="img"
          image={item.image}
          alt={item.title}
        />
      </Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title.length > 20 ? item.title.slice(0, 20) + '...' : item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description.length > 60 ? item.description.slice(0, 60) + '...' : item.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="outlined" onClick={handleBuyNow}>
          Buy Now
        </Button>
        <Button size="small" variant="outlined" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </CardActions>
      <Snackbar
        open={showToast}
        autoHideDuration={3000}
        onClose={handleCloseToast}
        message={toastMessage}
      />
    </Card>
  );
};

export default ProductCard;
