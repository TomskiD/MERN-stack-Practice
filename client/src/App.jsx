import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Grid } from '@material-ui/core';

import { getEvents } from './actions/events';
import Form from './components/Form/Form';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  return (
    <Grid container justifyContent="center" alignItems="center" direction="column" style={{ minHeight: '100vh' }} spacing={2}>
      <Form />
    </Grid>
  );
};

export default App;
