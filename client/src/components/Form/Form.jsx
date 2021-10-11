import * as React from "react";
import { useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch } from "react-redux";

import useStyles from './styles';
import { createUser } from "../../actions/users";

const Form = () => {
  const classes = useStyles();
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    date: "",
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createUser(userData));
  };
  const clear = () => {};
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
      <Typography variant="h6">Create User</Typography>
      <TextField
        name="firstName"
        variant="outlined"
        label="FirstName"
        fullWidth
        value={userData.firstName}
        onChange={(e) =>
          setUserData({ ...userData, firstName: e.target.value })
        }
      ></TextField>
      <TextField
        name="lastName"
        variant="outlined"
        label="LastName"
        fullWidth
        value={userData.lastName}
        onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}
      ></TextField>
      <TextField
        name="email"
        variant="outlined"
        label="Email"
        fullWidth
        value={userData.email}
        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
      ></TextField>
      <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
      <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default Form;
