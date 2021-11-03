import '@testing-library/jest-dom/extend-expect';
import * as reactRedux from 'react-redux';
import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Form from '../Form/Form';

describe('event submit form', () => {
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');

  beforeEach(() => {
    useDispatchMock.mockClear();
  });

  it('renders default state', () => {
    const { getByTestId } = render(<Form />);
    const { getByPlaceholderText } = screen;

    const firstName = getByPlaceholderText('Type first name');
    const lastName = getByPlaceholderText('Type last name');
    const email = getByPlaceholderText('Type email');
    const submit = getByTestId('event-submit');

    expect(firstName.value).toEqual('');
    expect(lastName.value).toEqual('');
    expect(email.value).toEqual('');
    expect(submit).toHaveClass('Mui-disabled');
  });

  it('keeps submit disabled when only first name provided', () => {
    const { getByTestId } = render(<Form />);
    const { getByPlaceholderText } = screen;

    const firstName = getByPlaceholderText('Type first name');
    const submit = getByTestId('event-submit');

    fireEvent.change(firstName, { target: { value: 'John' } });
    expect(submit).toHaveClass('Mui-disabled');
  });

  it('keeps submit disabled when only last name provided', () => {
    const { getByTestId } = render(<Form />);
    const { getByPlaceholderText } = screen;

    const lastName = getByPlaceholderText('Type last name');
    const submit = getByTestId('event-submit');

    fireEvent.change(lastName, { target: { value: 'Doe' } });
    expect(submit).toHaveClass('Mui-disabled');
  });

  it('keeps submit disabled when only email provided', () => {
    const { getByTestId } = render(<Form />);
    const { getByPlaceholderText } = screen;

    const email = getByPlaceholderText('Type email');
    const submit = getByTestId('event-submit');

    fireEvent.change(email, { target: { value: 'johnDoe@gmail.com' } });
    expect(submit).toHaveClass('Mui-disabled');
  });

  it('enables submit when form is filled out', () => {
    const { getByTestId } = render(<Form />);
    const { getByPlaceholderText } = screen;

    const firstName = getByPlaceholderText('Type first name');
    const lastName = getByPlaceholderText('Type last name');
    const email = getByPlaceholderText('Type email');
    const submit = getByTestId('event-submit');

    fireEvent.change(firstName, { target: { value: 'John' } });
    fireEvent.change(lastName, { target: { value: 'Doe' } });
    fireEvent.change(email, { target: { value: 'johnDoe@gmail.com' } });

    expect(submit).not.toHaveClass('Mui-disabled');
  });
});
