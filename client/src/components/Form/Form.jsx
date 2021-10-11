import * as React from "react";
import { useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";

import useStyles from './styles';

const Form = () => {
  const classes = useStyles();
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    date: "",
  });

  const handleSubmit = () => {};
  const clear = () => {};
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      ></form>
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
    </Paper>
  );
};

export default Form;
