import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';

import { Alert } from '@mui/material';

export default function CustomSnackbar({message, open, handleClose, severity="success"}) {

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Note archived"
      >
        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}