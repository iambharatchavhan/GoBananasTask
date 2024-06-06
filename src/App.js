import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import useFetch from './Utils/useFetch';
import { CssBaseline, ThemeProvider, createTheme, CircularProgress } from '@mui/material';
import Main from './components/Main';
import Cart from './components/Cart'; 
import Profile from './components/Profile'; 

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const { data, loading, error } = useFetch('https://fakestoreapi.com/products');
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredData = data?.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <Header onSearch={handleSearch} />
        <Routes>
          <Route exact path="/" element={loading ? <div className='main'><CircularProgress color="success" /></div> : <Main data={filteredData} loading={loading} />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
