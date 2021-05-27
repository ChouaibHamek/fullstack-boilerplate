/* eslint-disable no-useless-escape, arrow-body-style */
// TODO: localized error messages of the helper methods
export const requiredValidation = (value) => { return value ? undefined : 'Required'; };
export const emailValidation = (value) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return value && !re.test(String(value).toLowerCase()) ? 'Invalid' : undefined;
};
export const usernameValidation = (username) => {
  const re = /^[A-Za-z0-9_.-]+$/i;
  return username && !re.test(String(username)) ? 'Only letters, numbers, and [".", "-", "_"] are allowed' : undefined;
};
export const passwordValidation = (password) => {
  return password.length >= 6 ? undefined : 'Password must be at least 6 characters';
};
export const confirmPasswordValidation = (password, passwordConfirm) => {
  return password === passwordConfirm ? undefined : 'Confirmation does not match password';
};
export const isNotAuthenticated = (error) => {
  return error.message === 'Request failed with status code 401';
};
export const studentLevelWarning = (
  studentLevel,
  minLevel,
  maxLevel,
  firstnameDisplayed,
  notInRangeMessage,
  insufficientMessage,
  higherMessage,
) => {
  const studentInsufficientLevel = minLevel !== -1 && studentLevel < minLevel;
  const studentHigherLevel = maxLevel !== -1 && studentLevel > maxLevel;
  let warningMessage;

  if (studentLevel !== -1 && (studentInsufficientLevel || studentHigherLevel)) {
    if (minLevel && maxLevel) {
      warningMessage = `${firstnameDisplayed} ${notInRangeMessage} ${minLevel}-${maxLevel}.`;
    }
    if (maxLevel && (!minLevel || minLevel === -1)) {
      warningMessage = `${firstnameDisplayed} ${higherMessage} ${maxLevel}.`;
    } else if (minLevel && (!maxLevel || maxLevel === -1)) {
      warningMessage = `${firstnameDisplayed} ${insufficientMessage} ${minLevel}.`;
    }
  }

  return warningMessage;
};
// Used for username, lastname, language, and instrument length validation
export const maxCharValidation1 = (field) => {
  return field.length <= 40 ? undefined : 'Field length exceeds 40 characters';
};
// Used for firstname validation
export const maxCharValidation2 = (field) => {
  return field.length <= 75 ? undefined : 'Field length exceeds 75 characters';
};
export const numericValidation = (field) => {
  if (field === '') {
    return 'Price cannot be empty';
  }
  return !Number.isNaN(Number(field)) && Number(field) >= 0 ? undefined : 'Price must be a positive number';
};
export const emptyPricesValidation = (prices) => {
  let error;
  Object.keys(prices).forEach((key) => {
    if (prices[key] === '') {
      error = 'Session prices cannot be empty';
    }
  });
  return error;
};
