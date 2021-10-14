import * as React from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

import { useFormControls } from "./useFormControl";
import { inputFieldValues } from "./formFieldsValue";
import useStyles from "./styles";

const Form = () => {
  const { handleInputValue, handleDateInputValue, handleFormSubmit, formIsValid, errors } = useFormControls();
  const classes = useStyles();

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Paper className={classes.paper}>
        <form onSubmit={handleFormSubmit}>
          <Typography variant="h4" align="center">
            Create User
          </Typography>
          {inputFieldValues.map((inputFieldValue, index) => {
            return (
              <TextField
                className={classes.fileInput}
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
          <DatePicker
            label="Date"
            name="date"
            className={classes.fileInput}
            onChange={handleDateInputValue}
            fullWidth
          />
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
    </MuiPickersUtilsProvider>
  );
};

export default Form;
