import rulesConfig from "./inputAttributes";

const validityChecker = (type, value, ref) => {
  let isValid = true;
  let errorMessage = "";
  let rules = rulesConfig(type);
  let _value = String(value);

  if (rules.required) {
    if (_value.trim().length <= 0) {
      isValid = false;
      errorMessage = `Required field cannot be empty.`;
    }
  }

  if (rules.maxLength) {
    ref.setAttribute("maxlength", rules.maxLength);
    if (_value.length >= rules.maxLength) {
      isValid = false;
      errorMessage = `Max length is ${rules.maxLength}.`;
    }
  }

  if (rules.pattern) {
    if (!rules.pattern.test(_value)) {
      isValid = false;
      errorMessage = `Please enter a valid input.`;
    }
  }

  if (rules.minLength) {
    ref.setAttribute("minlength", rules.minLength);
    if (_value.length < rules.minLength) {
      isValid = false;
      errorMessage = `Min length is ${rules.minLength}.`;
    }
  }

  return {isValid, errorMessage};
};

export default validityChecker;
