import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetMediaQuery } from '../features/media/mediaApi';
import { filterMedia } from '../features/media/mediaSlice';
import { RootState } from '../store';
import Header from '../components/Header';
import Card from '../components/Card';
import { Container, Grid, CircularProgress, Typography, Box } from '@mui/material';

interface Media {
  id: string;
  title: string;
  subject: string;
  url: string;
}

const Catalog: React.FC = () => {
  const dispatch = useDispatch();
  const { subject, query } = useSelector((state: RootState) => state.search);
  const { data: mediaItems = [], isLoading } = useGetMediaQuery();
  const filteredItems = useSelector((state: RootState) => state.media.filteredItems);

  useEffect(() => {
    if (mediaItems.length > 0) {
      dispatch(filterMedia({ items: mediaItems, subject, query }));
    }
  }, [mediaItems, subject, query, dispatch]);

  return (
    <div>
      <Header />
      <Container>
        <Typography variant="h4" sx={{ my: 2 }}>
          Media Catalog
        </Typography>
        <Box>
          {isLoading ? (
            <CircularProgress />
          ) : filteredItems.length > 0 ? (
            <Grid container spacing={2}>
              {filteredItems.map((media: Media) => (
                <Grid item xs={12} sm={6} md={4} key={media.id}>
                  <Card title={media.title} subject={media.subject} url={media.url} />
                </Grid>
              ))}
            </Grid>
          ) : (
            <Typography>No media found.</Typography>
          )}
        </Box>
      </Container>
    </div>
  );
};

export default Catalog;
