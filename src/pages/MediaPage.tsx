import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, CircularProgress, Card as MuiCard, CardContent, Box, Button } from '@mui/material';
import axios from 'axios';

interface MediaItem {
  id: string;
  title: string;
  subject: string;
  description?: string;
  url: string;
}

const MediaPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [mediaItem, setMediaItem] = useState<MediaItem | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setError('Invalid media ID.');
      setIsLoading(false);
      return;
    }

    const fetchMedia = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await axios.get<MediaItem>(`/api/media/${id}`);
        setMediaItem(response.data);
      } catch (err) {
        setError('Failed to fetch media.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMedia();
  }, [id]);

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Container>
        <Typography variant="h5" color="error" sx={{ mt: 4 }}>
          {error}
        </Typography>
      </Container>
    );
  }

  if (!mediaItem) {
    return (
      <Container>
        <Typography variant="h5" color="error" sx={{ mt: 4 }}>
          Media not found.
        </Typography>
      </Container>
    );
  }

  return (
    <Container>
      <MuiCard sx={{ mt: 4, boxShadow: 3, borderRadius: 2 }}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {mediaItem.title}
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ mb: 2 }}>
            Subject: {mediaItem.subject}
          </Typography>
          <Typography variant="body2" sx={{ mb: 4 }}>
            Description: {mediaItem.description || 'No description available.'}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap: 2 }}>
            <Button variant="contained" color="primary" href={mediaItem.url} target="_blank" rel="noopener noreferrer">
              Watch Now
            </Button>
            <Button variant="outlined" color="secondary" href={`/download/${mediaItem.id}`}>
              Download
            </Button>
          </Box>
        </CardContent>
      </MuiCard>
    </Container>
  );
};

export default MediaPage;
