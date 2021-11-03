export const inputFieldValues = [
  {
    name: 'firstName',
    label: 'First Name',
    id: 'my-first-name',
    'test-id': 'event-first-name',
  },
  {
    name: 'lastName',
    label: 'Last Name',
    id: 'my-last-name',
    'test-id': 'event-last-name',
  },
  {
    name: 'email',
    label: 'Email',
    id: 'my-email',
    'test-id': 'event-email',
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
