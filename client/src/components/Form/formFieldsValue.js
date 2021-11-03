export const inputFieldValues = [
  {
    name: 'firstName',
    label: 'First Name',
    id: 'my-first-name',
    placeholder: 'Type first name',
  },
  {
    name: 'lastName',
    label: 'Last Name',
    id: 'my-last-name',
    placeholder: 'Type last name',
  },
  {
    name: 'email',
    label: 'Email',
    id: 'my-email',
    placeholder: 'Type email',
  },
];

export const initialFormValues = {
  firstName: '',
  lastName: '',
  email: '',
  date: Date.now(),
  formSubmitted: false,
  success: false,
};
