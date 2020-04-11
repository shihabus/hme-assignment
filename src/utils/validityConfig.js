const validityChecker = (rules, value, ref) => {
  let isValid = true;
  let errorMessage = "";
  let _value = String(value);

  if (rules.required) {
    if (_value.trim().length <= 0) {
      isValid = false;
      errorMessage = `Required field cannot be empty`;
    }
  }

  if (rules.maxLength) {
    if (_value.length >= rules.maxLength) {
      isValid = false;
      errorMessage = `Max length is ${rules.maxLength}`;
    }
  }

  if (rules.minLength) {
    if (_value.length < rules.minLength) {
      isValid = false;
      errorMessage = `Min length is ${rules.minLength}`;
    }
  }

  if (rules.pattern) {
    if (!rules.pattern.test(_value)) {
      isValid = false;
      errorMessage = `Please check your entry`;
    }
  }

  if (ref) {
    // if (!ref.reportValidity()) {
    //   isValid = false;
    //   errorMessage = `Error`;
    // }
  }
  return {isValid, errorMessage};
};

export default validityChecker;
