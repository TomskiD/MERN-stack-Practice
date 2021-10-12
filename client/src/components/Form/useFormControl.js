import * as React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { initialFormValues } from "./formFieldsValue";
import { createUser } from "../../actions/users";

export const useFormControls = () => {
  const [values, setValues] = useState(initialFormValues);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const validate = (fieldValues = values) => {
    let errInfo = { ...errors};

    if("firstName" in fieldValues) {
      errInfo.firstName = fieldValues.firstName ? "" : "First name is required";
    };

    if("lastName" in fieldValues) {
      errInfo.lastName = fieldValues.lastName ? "" : "Last name is required";
    };

    if ("email" in fieldValues) {
      errInfo.email = fieldValues.email ? "" : "Email adress is required."
      if (fieldValues.email)
        errInfo.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email)
          ? ""
          : "Email is not valid."
    };
    setErrors({
      ...errInfo
    });
  };

  const handleInputValue = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
    validate({ [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formIsValid()) {
      dispatch(createUser(values));
      alert("User has been registered in the database!")
    }
  };

  const formIsValid = (fieldValues = values) => {
    const isValid =
      fieldValues.firstName &&
      fieldValues.lastName &&
      fieldValues.email &&
      Object.values(errors).every((x) => x === "");

    return isValid;
  };

  return {
    handleInputValue,
    handleFormSubmit,
    formIsValid,
    errors
  };
}