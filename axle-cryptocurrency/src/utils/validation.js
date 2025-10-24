/**
 * Validation Utilities
 * Common validation functions for forms
 */

/**
 * Validate email format
 */
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate password strength
 * Requirements: min 8 chars, 1 uppercase, 1 lowercase, 1 number, 1 special char
 */
export const validatePassword = (password) => {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
};

/**
 * Validate hash rate input (numeric)
 */
export const validateHashRate = (value) => {
  const numValue = parseFloat(value);
  if (isNaN(numValue) || numValue <= 0) {
    return false;
  }
  return numValue <= 999999999; // Reasonable max
};

/**
 * Sanitize input to prevent XSS
 */
export const sanitizeInput = (input) => {
  const div = document.createElement("div");
  div.textContent = input;
  return div.innerHTML;
};

/**
 * Validate form values
 */
export const validateNewsletterForm = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!validateEmail(values.email)) {
    errors.email = "Please enter a valid email address";
  }

  return errors;
};

export const validateCalculatorForm = (values) => {
  const errors = {};

  if (!values.hashRate) {
    errors.hashRate = "Hash rate is required";
  } else if (!validateHashRate(values.hashRate)) {
    errors.hashRate = "Please enter a valid hash rate";
  }

  if (!values.hashUnit) {
    errors.hashUnit = "Hash unit is required";
  }

  return errors;
};

/**
 * Validate contact form
 */
export const validateContactForm = (values) => {
  const errors = {};

  if (!values.name || values.name.trim().length === 0) {
    errors.name = "Name is required";
  }

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!validateEmail(values.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (!values.subject || values.subject.trim().length === 0) {
    errors.subject = "Subject is required";
  }

  if (!values.message || values.message.trim().length === 0) {
    errors.message = "Message is required";
  } else if (values.message.length < 10) {
    errors.message = "Message must be at least 10 characters";
  }

  return errors;
};

const validationUtils = {
  validateEmail,
  validatePassword,
  validateHashRate,
  sanitizeInput,
  validateNewsletterForm,
  validateCalculatorForm,
  validateContactForm,
};

export default validationUtils;
