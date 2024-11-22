import React from 'react';
import { Card as MuiCard, CardContent, CardActions, Typography, Button } from '@mui/material';

interface CardProps {
  title: string;
  subject: string;
  url: string;
}

const Card: React.FC<CardProps> = ({ title, subject, url }) => {
  return (
    <MuiCard>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography color="textSecondary">{subject}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={url} target="_blank">
          View
        </Button>
      </CardActions>
    </MuiCard>
  );
};

export default Card;
