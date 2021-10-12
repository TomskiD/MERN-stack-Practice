import * as React from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";

import { useFormControls } from "./useFormControl";
import { inputFieldValues } from "./formFieldsValue";
import useStyles from "./styles";

const Form = () => {
  const { handleInputValue, handleFormSubmit, formIsValid, errors } =
    useFormControls();
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <form onSubmit={handleFormSubmit}>
        <Typography variant="h4">Create User</Typography>
        {inputFieldValues.map((inputFieldValue, index) => {
          return (
            <TextField
              key={index}
              onBlur={handleInputValue}
              onChange={handleInputValue}
              name={inputFieldValue.name}
              label={inputFieldValue.label}
              autoComplete="none"
              {...(errors[inputFieldValue.name] && {
                error: true,
                helperText: errors[inputFieldValue.name],
              })}
              fullWidth
            />
          );
        })}
        <Button
          className={classes.buttonSubmit}
          disabled={!formIsValid()}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
      </form>
    </Paper>
  );
};

export default Form;