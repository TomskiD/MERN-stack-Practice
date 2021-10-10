const validateEmail = (email) => {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailRegex.test(email);
};
const validateName = (email) => {
  const nameRegex = /^[a-zA-Z]+$/;
  return nameRegex.test(email);
};

export { validateEmail, validateName };
