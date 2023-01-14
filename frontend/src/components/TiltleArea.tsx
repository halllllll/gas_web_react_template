import React from 'react';
import { Paper, Stack, Typography } from '@mui/material';

const TitleArea = (): JSX.Element => {
  return (
    <Paper>
      <Stack spacing={2} margin={2}>
        <Typography variant="h4" gutterBottom component="div">
          ここにタイトルが入る
        </Typography>
        <Typography variant="subtitle1" gutterBottom component="div">
          これはなんかサブタイトルっぽい
        </Typography>
      </Stack>
    </Paper>
  );
};

export default TitleArea;
