export const required = (value) => {
  if (value) return undefined;
  else return "Field is required";
};

export const maxLengthCreator = (maxLength) => (value) => {
  if (value.length > maxLength) return `Max length is ${maxLength}`;
  else return undefined;
};

export const minLengthCreator = (minLength) => (value) => {
  if (value.length < minLength) return `Min length is ${minLength}`;
  else return undefined;
};
