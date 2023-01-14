import React, { useState } from 'react';
import { Button, Paper, Stack, TextField } from '@mui/material';

type InputAreaProps = {
  handleChangeName: (newLastName: string, newFirstName: string) => void;
};

const InputArea = (props: InputAreaProps): JSX.Element => {
  const { handleChangeName } = props;
  // コンポーネントで使うときはラップしたほうがいいんだっけね
  const handleClick = () => {
    handleChangeName(lastName, firstName);
  };

  const [lastName, setLastName] = useState('名字');
  const [firstName, setFirstName] = useState('名前');

  return (
    <Paper>
      <Stack spacing={2} margin={2} direction="row" justifyContent="center">
        <TextField
          id="last-name"
          label="苗字"
          variant="outlined" // ?
          style={{ width: 'fit-content' }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setLastName(e.target.value);
          }}
        />
        <TextField
          id="first-name"
          label="名前"
          variant="outlined" // ?
          style={{ width: 'fit-content' }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setFirstName(e.target.value);
          }}
        />
        <Button
          variant="contained" // ?
          style={{ width: 'fit-content' }}
          onClick={handleClick}
        >
          OKOKOKOKOKOK
        </Button>
      </Stack>
    </Paper>
  );
};

export default InputArea;
