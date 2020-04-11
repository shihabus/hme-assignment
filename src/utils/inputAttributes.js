const inputAttributes = (inputType) => {
  let attrs = {};
  let _inputType = String(inputType).trim().toLowerCase();

  if (_inputType === "email") {
    attrs = {
      required: true,
      minLength: 5,
      placeholder: "Enter your Email",
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    };
  }

  if (_inputType === "password") {
    attrs = {
      minLength: 6,
      pattern: /[A-Z]{1,2}/g,
      placeholder: "Enter your Password",
    };
  }

  return attrs;
};

export default inputAttributes;
