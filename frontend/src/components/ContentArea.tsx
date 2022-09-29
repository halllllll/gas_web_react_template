import React from 'react'
import { Paper, Stack, Typography } from '@mui/material'

type ContentAreaProps = {
  lastName: string
  firstName: string
}

const ContentArea = (props: ContentAreaProps) => {
  const { lastName, firstName } = props
  return (
    <Paper>
      <Stack spacing={2} margin={2}>
        <Typography variant="body1" gutterBottom>
          LastName: {lastName} <br />
          firstName: {firstName}
          <br />
        </Typography>
        <Typography variant="h4">なにこれどうなるの</Typography>
      </Stack>
    </Paper>
  )
}

export default ContentArea
