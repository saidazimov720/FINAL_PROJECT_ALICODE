import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MainPage from './pages/MainPage';
import Catalog from './pages/Catalog';
import DownloadPage from './pages/DownloadPage';
import MediaPage from './pages/MediaPage';
import Footer from './components/Footer';
import theme from './styles/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/download" element={<DownloadPage />} />
          <Route path="/media/:id" element={<MediaPage />} />
        </Routes>
      </Router>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
