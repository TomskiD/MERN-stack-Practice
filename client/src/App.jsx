import * as React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container } from "@material-ui/core";

import {getUsers} from './actions/users'
import Form from "./components/Form/Form";

const App = () => {
  const dispatch = useDispatch();

  useEffect (() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <Container maxWidth="xs">
      <Form></Form>
    </Container>
  );
};

export default App;
